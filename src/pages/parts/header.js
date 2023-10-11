import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Logo } from "../../../public/images/logo.svg";
import DefaulAvatar from "../../../public/images/default-avatar.svg";

export default function header({ onLight }) {
  const [User, setUser] = useState(() => null);
  useEffect(() => {
    const userCokies =
      decodeURIComponent(window.document.cookie)
        ?.split(";")
        ?.find?.((item) => item.indexOf("BWAMICRO:user") > -1)
        ?.split("=")[1] ?? null;
    setUser(userCokies ? JSON.parse(userCokies) : null);
    console.log(userCokies);
  }, []);

  const LinkColor = onLight ? "text-gray-900" : "text-white";
  const router = useRouter();

  const LinkCTA =
    router.pathname.indexOf("/login") > -1
      ? `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/register`
      : `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/login`;
  const textCTA = router.pathname.indexOf("/login") > -1 ? "Daftar" : "Masuk";
  return (
    <header className="flex justify-between">
      <div style={{ height: 54 }}>
        <Logo className="on-dark"></Logo>
      </div>
      <ul className="flex items-center ">
        <li>
          <Link
            href={"/"}
            className={[
              LinkColor,
              "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium",
            ].join(" ")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"/"}
            className={[
              LinkColor,
              "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium",
            ].join(" ")}
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            href={"/"}
            className={[
              LinkColor,
              "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium",
            ].join(" ")}
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            href={"/"}
            className={[
              LinkColor,
              "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium",
            ].join(" ")}
          >
            Story
          </Link>
        </li>
        <li>
          {User ? (
            <a className=" hover:bg-indigo-800 transition-all duration-200 text-white hover:text-teal-500 text-lg px-6 py-3 font-medium ml-6 inline-flex items-center">
              <span className="rounded-full overflow-hiden mr-3 border-2 border-orange-500">
                {User?.thumbnail ? (
                  <img
                    src={User?.thumbnail}
                    alt={User.name ?? "username"}
                    className="object-cover w-8 h-8 inline-block"
                  />
                ) : (
                  <DefaulAvatar className="object-cover fill-indigo-500 w-8 h-8 inline-block" />
                )}
              </span>
              HI, {User.name}
            </a>
          ) : (
            <a
              target="_blank"
              rel="noopener noereferer"
              href={LinkCTA}
              className="bg-indigo-700 hover:bg-indigo-800 transition-all duration-200 text-white hover:text-teal-500 text-lg px-6 py-3 font-medium ml-6"
            >
              {textCTA}
            </a>
          )}
        </li>
      </ul>
    </header>
  );
}
