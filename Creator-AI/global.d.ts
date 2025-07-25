declare global {
    interface Window {
      webkitSpeechRecognition: any;
      SpeechRecognition: any;
    }
  
    interface SpeechRecognition extends EventTarget {
      lang: string;
      continuous: boolean;
      interimResults: boolean;
      start(): void;
      stop(): void;
      abort(): void;
      onresult: (event: SpeechRecognitionEvent) => void;
      onerror: (event: any) => void;
    }
  
    interface SpeechRecognitionEvent {
      resultIndex: any;
      results: SpeechRecognitionResultList;
    }
  
    interface SpeechRecognitionResultList {
      [index: number]: SpeechRecognitionResult;
      length: number;
    }
  
    interface SpeechRecognitionResult {
      isFinal: boolean;
      [index: number]: SpeechRecognitionAlternative;
      length: number;
    }
  
    interface SpeechRecognitionAlternative {
      transcript: string;
      confidence: number;
    }
  }
  
  export {};
  