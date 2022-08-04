import Image from "next/image";
import React from "react";
import lapozas_2 from "../images/lapozas_2.gif";
import logo from "../images/logo.png";
import { getProviders, signIn } from "next-auth/react";

function Home({ providers }) {
  return (
    <div className="space-y-1 blur-corner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <header className="flex justify-around py-8 items-center">
        <div className="flex  space-x-16  py-2 items-center">
          <div>
            <Image src={logo} width="150px" height="50px" alt="" />
          </div>
          <div>
            <a className="header-nav">Contact</a>
          </div>
          <div>
            <a className="header-nav">About</a>
          </div>
        </div>
        {/* <div className="flex ml-10 space-x-16 justify-end items-start py-2">
          <p
            className="border-4 rounded-full border-[#d83fbe] px-5 py-1.5"
          >
            Sign In
          </p>
        </div> */}
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <div className="pl-4">
              <button
                className="text-blue-700 font-semibold rounded-full border border-[#d83fbe] px-5 py-1.5 transition-all hover:border-2"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in
              </button>
            </div>
          </div>
        ))}
      </header>
      <main>
        <div className="flex justify-center items-center">
          <div className="relative xl:absolute w-80 h-80 xl:w-[650px] xl:h-[650px] top-14 left-5">
            <Image src={lapozas_2} layout="fill" objectFit="contain" alt="" />
          </div>
          <div>
            <h1>Welcome to Book Share</h1>
          </div>{" "}
        </div>
      </main>
    </div>
  );
}

export default Home;

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
