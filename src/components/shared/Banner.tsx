import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

// import bannerImg from "@/assets/banner1.jpg";

function Banner() {
  return (
    <div className="bg-slate-100">
      <div className="px-4 py-8 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* image */}
        <div>
          {/* <Image src={bannerImg} alt="banner" /> */}
          {/* dynamic image set */}

          <Image
            src="https://images.unsplash.com/photo-1742475701265-c55a6506722b?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="dynamic image"
            width={600}
            height={400}
            className="w-full h-auto rounded-xl"
          />
        </div>

        <div className="space-y-4 flex flex-col">
          {" "}
          <h4 className="text-sm font-medium text-gray-500">Technology</h4>
          <h2>Openai is growing Fast and burning Thought piles of money </h2>
          <p>
            OpenAI is an artificial intelligence research and deployment company
            focused on ensuring that artificial general intelligence (AGI)
            benefits all of humanity.<br></br> It is known for developing
            advanced AI models such as ChatGPT, GPT-4, DALL·E, and Codex, which
            are used in applications ranging from natural language processing
            and code generation to image synthesis and more.
          </p>
          <Button variant="default">Read More </Button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
