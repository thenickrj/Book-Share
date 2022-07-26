import Image from "next/image";
import React from "react";
import lapozas_2 from "../images/lapozas_2.gif";

function Home() {
  return (
    <div className="space-y-1">
      <header className="flex justify-start py-4"></header>
      <div className="relative xl:absolute w-80 h-80 xl:w-[650px] xl:h-[650px] top-14 left-5">
        <Image src={lapozas_2} layout="fill" objectFit="contain" alt="" />
      </div>

      <header className="flex justify-around">
        <div className="flex  space-x-16 justify-start items-start py-2">
          <div>Book Share</div>
          <div>
            <a>Contact</a>
          </div>
          <div>
            <a>About</a>
          </div>
        </div>
        <div className="flex ml-10 space-x-16 justify-end items-start py-2">
          <p className="border-4 rounded-full border-[#f35d5d] px-5 py-1.5">
            Sign In
          </p>
        </div>
      </header>
      <main>
        <div></div>
      </main>
    </div>
  );
}

export default Home;
