import React from "react";
import StepsContact from "../components/StepsContact/StepsContact";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import Logo from "../public/assets/logo.png";
import Head from "next/head";

const iniziaProgetto = () => {
  return (
    <>
      <Head>
        <title>Parliamo del tuo progetto</title>
      </Head>
      <nav className="w-screen px-4 py-3 ">
        <div className="container flex items-center justify-between w-full mx-auto">
          <div className="hidden lg:block"></div>
          <Image
            src={Logo}
            alt="logo"
            className="w-[85px] md:w-[160px] lg:w-[100px] xl:w-[130px] 2xl:w-[100px] fxl:w-[150px] 3xl:w-[200px] 4xl:w-[300px]"
          />
          <Link href="/">
            <Icon
              icon="tdesign:close"
              width="2rem"
              height="2rem"
              className="text-pink"
            />
          </Link>
        </div>
      </nav>
      <div className=" bg-pink/20 h-[0.04rem]"></div>
      <div className="flex flex-col items-center w-full h-screen py-10">
        <StepsContact />
      </div>
    </>
  );
};

export default iniziaProgetto;
