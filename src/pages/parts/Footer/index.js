import React from "react";

import Link from "next/link";

export default function index() {
  function submit() {}
  return (
    <footer className="container mx-auto">
      <div className="flex justify-between">
        <div className="w-1/6">
          <h6 className="text-white">Company</h6>
          <ul className="mt-4">
            <li className="mt-2">
              <Link
                href={"#"}
                className="text-indigo-900 hover:text-teal-500 hover:underline"
              >
                API Developver
              </Link>
            </li>
            <li className="mt-2">
              <Link
                href={"#"}
                className="text-indigo-900 hover:text-teal-500 hover:underline"
              >
                Carrer
              </Link>
            </li>
            <li className="mt-2">
              <Link
                href={"#"}
                className="text-indigo-900 hover:text-teal-500 hover:underline"
              >
                Our Story
              </Link>
            </li>
            <li className="mt-2">
              <Link
                href={"#"}
                className="text-indigo-900 hover:text-teal-500 hover:underline"
              >
                New Soon
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-1/6">
          <h6 className="text-white">Student</h6>
          <ul className="mt-4">
            <li className="mt-2">
              <Link
                href={"#"}
                className="text-indigo-900 hover:text-teal-500 hover:underline"
              >
                Get Scolarship
              </Link>
            </li>
            <li className="mt-2">
              <Link
                href={"#"}
                className="text-indigo-900 hover:text-teal-500 hover:underline"
              >
                Our PathSkills
              </Link>
            </li>
            <li className="mt-2">
              <Link
                href={"#"}
                className="text-indigo-900 hover:text-teal-500 hover:underline"
              >
                All Features
              </Link>
            </li>
            <li className="mt-2">
              <Link
                href={"#"}
                className="text-indigo-900 hover:text-teal-500 hover:underline"
              >
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-1/6">
          <h6 className="text-white">Touch Us</h6>
          <p className="mt-4 text-indigo-900 leading-loose">
            Micro Center <br />
            Alleysi Block X No.12 <br />
            Bali,Indonesia <br />
            +64 2023 5555
          </p>
        </div>
        <div className="w-2/6">
          <h6 className="text-white"> Promotions</h6>
          <p className="text-indigo-900 mt-4">Submit your email for updates</p>
          <form onSubmit={submit}>
            <input
              type="email"
              className="bg-white focus:outline-none border-0 px-6 py-3 mt-6"
              placeholder="Your Email Address"
            />
            <button className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white p-6 py-3">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="border-t mt-8 p-6 border-gray-700 text-center">
       <p className="text-indigo-900"> 2020 Copyright Micro by BuildWith Angga. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
