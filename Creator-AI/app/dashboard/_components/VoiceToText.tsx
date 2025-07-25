"use client";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2Icon } from "lucide-react";

const VoiceToText = () => {
  const [isRecording, setIsRecording] = useState(false); // Track recording state
  const [transcription, setTranscription] = useState<string>(""); // Track transcribed text
  const [audioUrl, setAudioUrl] = useState<string | null>(null); // Store the URL for the recorded audio

  const mediaRecorderRef = useRef<MediaRecorder | null>(null); // Reference to the MediaRecorder instance
  const audioChunksRef = useRef<BlobPart[]>([]); // Store chunks of audio data

  // Initialize Web Speech API for real-time transcription (optional)
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);

  useEffect(() => {
    // Setup Web Speech API for voice-to-text transcription
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const newRecognition = new SpeechRecognition();
      newRecognition.continuous = true;
      newRecognition.interimResults = true;

      newRecognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0].transcript)
          .join("");
        setTranscription(transcript);
      };

      newRecognition.onerror = (event: any) => {
        console.error("Speech recognition error", event);
      };

      setRecognition(newRecognition); // Store recognition instance in state
    } else {
      console.warn("Speech recognition is not supported in this browser.");
    }
  }, []);

  const startRecording = () => {
    if (recognition) {
      recognition.start(); // Start the real-time speech recognition
      setIsRecording(true);
    }

    // Record audio using MediaRecorder
    if (mediaRecorderRef.current) {
      audioChunksRef.current = []; // Clear previous audio chunks
      mediaRecorderRef.current.start();
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
    if (recognition) {
      recognition.stop(); // Stop the real-time speech recognition
      setIsRecording(false);
    }

    // Stop the MediaRecorder
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleAudioRecorded = (file: File) => {
    const audioBlob = file;
    const audioUrl = URL.createObjectURL(audioBlob);
    setAudioUrl(audioUrl); // Set audio URL for playback
  };

  // Setting up MediaRecorder on component mount
  useEffect(() => {
    const setupRecorder = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true }); // Access microphone
        const recorder = new MediaRecorder(stream);

        recorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            audioChunksRef.current.push(event.data);
          }
        };

        recorder.onstop = () => {
          const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
          const audioUrl = URL.createObjectURL(audioBlob);
          setAudioUrl(audioUrl); // Set the audio URL for playback

          // Pass the audio file back to parent if needed
          const file = new File([audioBlob], "audio.wav", { type: "audio/wav" });
          handleAudioRecorded(file);

          audioChunksRef.current = []; // Clear chunks after stop
        };

        mediaRecorderRef.current = recorder;
      } catch (err) {
        console.error("Error accessing media devices:", err);
      }
    };

    setupRecorder();

    return () => {
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stream?.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="p-5 shadow-md border rounded-lg bg-white text-black">

      {/* Textarea for manually typing or showing transcribed text */}
      <Textarea
        name="transcription"
        value={transcription}
        placeholder="Start Recording..."
        rows={5}
        maxLength={2000}
        readOnly
      />

      <div className="mt-4">
        <Button
          type="button"
          onClick={startRecording}
          disabled={isRecording}
          className="bg-blue-600 text-white px-4 py-2 rounded mr-2"
        >
          Start Recording
        </Button>

        <Button
          type="button"
          onClick={stopRecording}
          disabled={!isRecording}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Stop Recording
        </Button>
      </div>

      {/* Display the recorded audio and playback option */}
      {audioUrl && (
        <div className="mt-4">
          <audio controls src={audioUrl} />
        </div>
      )}

      
    </div>
  );
};

export default VoiceToText;
