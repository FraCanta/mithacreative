import React from "react";

export default function Footer() {
  return (
    <div
      className="relative h-[800px] bg-primary dark:bg-white"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sticky top-[calc(100vh-800px)]">
          <div className="flex justify-center text-white dark:text-primary w-[90%] mx-auto">
            <h2 className="text-9xl leading-[0.8] mt-10 font-bold">
              GET IN TOUCH
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
