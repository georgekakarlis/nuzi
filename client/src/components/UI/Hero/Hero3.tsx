import { signIn } from "next-auth/react";
import React from "react";

type Props = {};

const Hero3 = (props: Props) => {
  return (
    <>
      <section>
        <div className="relative mx-auto w-full max-w-7xl items-center px-5 py-12 md:px-12 lg:px-16 lg:py-24">
          <div className="mx-auto flex w-full text-left">
            <div className="relative mx-auto inline-flex items-center align-middle">
              <div className="text-center">
                <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:max-w-7xl lg:text-6xl">
                  Imagine speaking, hearing, creating{" "}
                  <br className="hidden lg:block" />
                  with FULL privacy.
                </h1>
                <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-gray-500">
                  Say Hello to Nuzi! Nuzi is all about Voice and Communication.
                  Talk with your friends, create a podcast or even a conference.
                </p>
                <div className="mx-auto mt-6 flex w-full max-w-2xl justify-center gap-2">
                  <div className="mt-3 rounded-lg sm:mt-0">
                    <a
                      href={`/auth/signin`}
                      className="mb-2 inline-flex w-full items-center justify-center rounded-md bg-green-500 px-6 py-3 text-lg text-white hover:bg-green-400 sm:mb-0 sm:w-auto"
                      onClick={(e) => {
                        e.preventDefault();
                        signIn();
                      }}
                    >
                      Sign In
                    </a>
                  </div>
                  <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                    <button className="block transform items-center rounded-xl border-2 border-white px-5 py-3.5 text-center text-base font-medium text-green-500 shadow-md transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 lg:px-10">
                      See features
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <section id="intro">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center rounded-lg pt-24 lg:px-10">
              <img
                className="w-full rounded-xl object-cover object-center"
                alt="hero"
                src="/assets/images/placeholders/hero.webp"
              />
            </div>
          </section> */}
        </div>
      </section>
    </>
  );
};

export default Hero3;
