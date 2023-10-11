import React, { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import Header from "pages/parts/header";
import Footer from "pages/parts/Footer";
import ListCourses from "pages/parts/ListCourses";

import courses from "pages/constans/api/courses";

function Courses({ data }) {
  const [Search, setSearch] = useState(() => "");
  const [SearchFocus, setSearchFokus] = useState(() => false);
  const [SearchResponse, setSearchResponse] = useState(() => ({
    isLoading: false,
    isError: false,
    data: [],
  }));

  const selectWrapper = useRef(null);

  function clickOutSide(event) {
    if (selectWrapper && !selectWrapper.current.contains(event.target)) {
      setSearch("");
    }
  }

  let timeoutSearch = useRef(null);
  function handlerTimeoutSearch(e) {
    e.persist();
    setSearch(e.target.value);
    clearTimeout(timeoutSearch.current);
    timeoutSearch.current = setTimeout(() => {
      setSearchResponse({
        isLoading: true,
        isError: false,
        data: null,
      });
      courses
        .all({ params: { q: e.target.value } })
        .then((res) => {
          setSearchResponse({
            isLoading: false,
            isError: false,
            data: res.data,
          });
        })
        .catch((err) => {
          setSearchResponse({
            isLoading: false,
            isError: true,
            data: null,
          });
        });
    }, 1000);
  }

  useEffect(() => {
    window.addEventListener("mousedown", clickOutSide);

    return () => {
      window.removeEventListener("mousedown", clickOutSide);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Micro | Courses </title>
      </Head>
      <section className="pt-10 z-30 relative" style={{ height: 360 }}>
        <div className="absolute inset-0 z-0 w-full h-full bg-black opacity-75">
          {" "}
        </div>
        <div
          className="meta-tittle absolute bottom-0 object-fill z-0 w-full flex justify-center items-center"
          style={{ marginBottom: "-25px" }}
        >
          <div className="">
            <h3 className="text-6xl text-center text-teal-500 font-semibold">
              Library
            </h3>
            <h4 className="text-lg text-center text-white">
              Jangan mau kalah update dengan yang lainnya. <br /> Yuk ikuti
              perkembangan teknologi.
            </h4>
            <div className="flex flex-col relative" ref={selectWrapper}>
              <input
                id="q"
                onChange={handlerTimeoutSearch}
                onFocus={() => setSearchFokus(!SearchFocus)}
                onBlur={() => setSearchFokus(!SearchFocus)}
                value={Search}
                placeholder={
                  SearchFocus
                    ? "ketik minimal 3 karakter"
                    : "Lagi nyari kelas apa?"
                }
                type="text"
                className="bg-white focus:outline-none transition-all duration-200 border focus:border-teal-500 border-gray-600 px-4
                 py-3 w-full mt-6"
              />
              {Search.length >= 3 && (
                <div
                  className="flex flex-col absolute py-2 px-4 bg-white border border-gray-600 w-full"
                  style={{ top: 75 }}
                >
                  {SearchResponse.isLoading ? (
                    "Loading..."
                  ) : (
                    <>
                      {SearchResponse.isError &&
                        "Something is tecnically wrong!"}
                      {SearchResponse.data?.length > 0
                        ? SearchResponse.data?.map((item, index) => {
                            return (
                              <div
                                key={index}
                                className="flex items-center -mx-4 py-2 cursor-pointer hover:bg-gray-200 relative"
                              >
                                <div
                                  className="w-auto px-4"
                                  style={{ width: 150 }}
                                >
                                  <img
                                    src={item?.thumnail ?? ""}
                                    alt={item?.name ?? "Course Name"}
                                  />
                                </div>
                                <div className="w-full px-4">
                                  <h6 className="text-gray-900 text-lg"></h6>
                                  {item?.name ?? "Course Name"}
                                  <p className="text-gray-600">
                                    {item?.level ?? "Course Level"}
                                  </p>
                                  <Link
                                    href="/courses/[id]"
                                    as={`/courses/${item.id}`}
                                    className="link-wrapped"
                                  ></Link>
                                </div>
                              </div>
                            );
                          })
                        : "No courses found"}
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="container mx-auto z-10 relative">
          <Header></Header>
        </div>
      </section>
      <section className=" container mx-auto pt-24">
        <ListCourses data={data}></ListCourses>
      </section>
      <section className=" bg-indigo-950 py-12 mt-24">
        <Footer></Footer>
      </section>
    </>
  );
}

Courses.getInitialProps = async () => {
  try {
    const data = await courses.all();
    return { data: data.data };
  } catch (error) {
    return error;
  }
};

export default Courses;
