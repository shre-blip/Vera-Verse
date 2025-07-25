"use client";
import React, { useState } from "react";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";
import VoiceToText from "../../_components/VoiceToText"; 

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput: any;
  loading: boolean;
}

function FormSection({ selectedTemplate, userFormInput, loading }: PROPS) {
  const [formData, setFormData] = useState<any>({});


  const handleInputChange = (event: any) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevData: any) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    userFormInput(formData); 
  };

  return (
    <div className="p-5 shadow-md border rounded-lg bg-white text-black">
      {/* @ts-ignore */}
      <Image src={selectedTemplate?.icon} alt="icon" width={70} height={70} />
      <h2 className="font-bold text-2xl mb-2 mt-4 text-primary">
        {selectedTemplate?.name}
      </h2>
      <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>

      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className="my-2 flex flex-col gap-2 mb-7">
            <label className="font-bold">{item.label}</label>

            {item.field === "input" ? (
              <Input
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            ) : item.field === "textarea" ? (
              <>
                <Textarea
                  name={item.name}
                  required={item?.required}
                  rows={5}
                  maxLength={2000}
                  onChange={handleInputChange}
                />
                <label className="text-xs text-gray-400">
                  Note: Max 2000 Words
                </label>
              </>
            ) : item.field === "checkbox" ? (
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name={item.name}
                  onChange={handleInputChange}
                  className="w-4 h-4"
                />
                <label className="text-sm">Check for Plagiarism</label>
              </div>
            ) : item.field === "audio" &&
              selectedTemplate?.name !== "Voice to Text" ? (
              <div>
                {/* Handle other form fields like uploading audio files (if needed) */}
                <input
                  type="file"
                  accept="audio/*"
                  name={item.name}
                  required={item?.required}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [item.name]: e.target.files?.[0], // Add uploaded file
                    })
                  }
                />
                <label className="text-xs text-gray-400 mb-2">
                  Upload an audio file (MP3, WAV)
                </label>
              </div>
            ) : null}
          </div>
        ))}

        {/* Render the VoiceToText component ONLY if the selected template is "Voice to Text" */}
        {selectedTemplate?.name === "Voice to Text" && (
          <div className="mt-6">
            <VoiceToText />
          </div>
        )}

        {selectedTemplate?.name !== "Voice to Text" && (
          <Button type="submit" className="w-full py-6" disabled={loading}>
            {loading && <Loader2Icon className="animate-spin" />}
            Generate Content
          </Button>
        )}
      </form>
    </div>
  );
}

export default FormSection;
