import React from "react";
import Button from "../components/Button";
import { CiMail } from "react-icons/ci";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  const inputStyle =
    "w-full bg-transparent border border-zinc-800 rounded-2xl px-5 py-4 text-white placeholder:text-zinc-500 outline-none focus:border-orange-500 transition";

  const contactStyle = "cursor-pointer hover:text-zinc-300 transition duration-300"

  const iconStyle = "bg-zinc-800 h-4 w-4 rounded-md"

  return (
    <div id="contact" className="w-full px-6">
      <div className="max-w-6xl mx-auto py-22 px-6">
        <div className="rounded-3xl p-12 bg-white/10 flex gap-16">

          <div className="w-1/2 flex flex-col">
            <span className="text-orange-500 font-medium tracking-wide">
              GET IN TOUCH
            </span>

            <h1 className="text-5xl font-bold text-white mt-4 leading-tight">
              Let's work
              <br />
              together
            </h1>

            <p className="text-zinc-400  mt-8 leading-relaxed">
              I'm open to UI/UX and frontend missions, short or long-term.
              <br />
              Landing page, full product redesign, or just a second pair of <br />
              eyes - let's talk.
            </p>

            <div className="mt-12 flex flex-col gap-5 text-zinc-400">
              <div className="flex gap-2 items-center"> 
                <CiMail className={iconStyle}/> 
                <h2 className={contactStyle}>
                   hello@eliot.dev
                </h2>
              </div>

              <div className="flex gap-2 items-center">
                <IoLogoLinkedin className={iconStyle}/>
                <h2 className={contactStyle}>
                  linkedin.com/in/eliot-dev
                </h2>
              </div>

              <div className="flex gap-2 items-center">
                <FaGithub className={iconStyle}/>
                <h2 className={contactStyle}>
                  github.com/eliot-dev
                </h2>
              </div>
            </div>
          </div>

          <div className="w-1/2 flex flex-col gap-6">

            <div className="flex gap-4">
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-zinc-300 text-sm">
                  Name *
                </label>

                <input
                  type="text"
                  placeholder="Jane Smith"
                  className={inputStyle}
                />
              </div>

              <div className="flex-1 flex flex-col gap-2">
                <label className="text-zinc-300 text-sm">
                  Email *
                </label>

                <input
                  type="email"
                  placeholder="jane@company.com"
                  className={inputStyle}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-zinc-300 text-sm">
                Subject
              </label>

              <input
                type="text"
                placeholder="Project inquiry"
                className={inputStyle}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-zinc-300 text-sm">
                Message *
              </label>

              <textarea
                placeholder="Tell me about your project..."
                rows={6}
                className={`${inputStyle} resize-none`}
              />
            </div>

            <Button
              className="w-full bg-orange-500 hover:bg-orange-400 transition duration-300 rounded-2xl py-4 text-white font-semibold cursor-pointer"
              text="Send message"
              icon=" →"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;