"use client";

import React from "react";
import { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wbn2h0i",
        "template_sc82i6a",
        form.current!,
        "1CIt61pNsbip7CxKi"
      )
      .then(
        (result) => {
          alert(
            "Thank you for your message! Devin will get back to you shortly."
          );
          console.log(result.text);
        },
        (error) => {
          alert(
            "Unfortunately an error has occured. Please contact Devin on instagram @devinvolk. Sorry for the inconvenience."
          );
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <div>
        <h1 className="capitalize text-center font-bold text-4xl">
          Send me a message!
          <hr className="w-6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded"></hr>
        </h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col mt-10 mx-2 md:mx-auto md:w-4/5"
        >
          <label htmlFor="name" className="text-xl text-neutral-900">
            Name:
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="off"
            placeholder="Jane Doe"
            required
            className="shadow md:shadow-lg appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></input>
          <label htmlFor="email" className="text-xl mt-10 text-neutral-900">
            Email:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="off"
            placeholder="janedoe@gmail.com"
            required
            className="shadow md:shadow-lg appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></input>
          <label htmlFor="message" className="text-xl mt-10 text-neutral-900">
            Message:
          </label>
          <input
            id="message"
            name="message"
            type="text"
            autoComplete="off"
            placeholder="Write your message here..."
            required
            className="shadow md:shadow-lg appearance-none border rounded pt-2 pb-80 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></input>
          <div className="flex justify-center mt-10 mb-20">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded flex"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
