import { useEffect, useState, useRef } from "react";

import Head from "next/head";

import Youtube from "react-youtube";
import Header from "../parts/header";
import courses from "../constans/api/courses";
import { CSSTransition } from "react-transition-group";

import NameTag from "../.../../../../public/images/icon-stundent.svg";
import Playback from "../.../../../../public/images/icon-playback.svg";
import Certificate from "../.../../../../public/images/icon-certificate.svg";

import Feature from "pages/parts/Details/Feature";
import HappyStudent from "pages/parts/Details/HappyStudent";

import Footer from "../parts/Footer";
import CoursePhoto from "../parts/Details/CoursePhoto";
import RenderPreview from "pages/parts/Details/RenderPreview";

import ThousandFormat from "pages/helpers/ThousandFormat";

function DetailCourse({ data }) {
  const footer = useRef(null);

  const [isStiky, setSticky] = useState(() => true);

  useEffect(() => {
    const stikyOffSetTop = footer.current.getBoundingClientRect().top;

    const stikyMetaToggler = () => {
      setSticky(stikyOffSetTop >= window.pageYOffset + window.innerHeight);
    };
    window.addEventListener("scroll", stikyMetaToggler);
    return () => {
      window.removeEventListener("scroll", stikyMetaToggler);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Micro</title>
      </Head>

      <section
        className="pt-10  relative overflow-hidden"
        style={{ height: 660 }}
      >
        {data?.chapters[0]?.lessons?.[0]?.video && (
          <div className="video-wrapper">
            <Youtube
              videoId={data?.chapters?.[0]?.lessons[0]?.video}
              id={data?.chapters?.[0]?.lessons?.[0].video}
              opts={{
                playerVars: {
                  loop: 1,
                  mute: 1,
                  autoplay: 1,
                  controls: 0,
                  showInfo: 0,
                },
              }}
              onEnd={(event) => {
                event.target.playVideo();
              }}
            ></Youtube>
          </div>
        )}
        <div className="absolute inset-0 z-0 w-full h-full bg-black opacity-75"></div>
        <div className="meta-title absolute inset-0 object-fill z-0 w-full flex justify-center items-center">
          <div className="text-center">
            <h3 className="text-lg text-white">Kelas Online:</h3>
            <h4 className="text-6xl text-teal-500 font-semibold">
              {data?.name ?? "Nama Kelas"}
            </h4>
          </div>
        </div>
        <div className="container mx-auto z-10 relative">
          <Header></Header>
        </div>
      </section>

      <section className="container mx-auto z-10 pt-24 relative">
        <div className="absolute top-0 w-full tranform -translate-y-1/2">
          <div className="w-3/4 mx-auto">
            <div className="flex justify-between">
              <Feature
                data={{
                  icon: <NameTag />,
                  meta: "STUDENT",
                  value: data?.total_student ?? "-",
                }}
              />
              <Feature
                data={{
                  icon: <Playback />,
                  meta: "VIDEOS",
                  value: data?.total_videos ?? "-",
                }}
              />
              <Feature
                data={{
                  icon: <Certificate />,
                  meta: "CERTIFICATE",
                  value: data?.certificate === 1 ? "TERSEDIA" : "-",
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <CSSTransition
            in={isStiky}
            timeout={300}
            classNames="meta-price"
            unmountOnExit
          >
            <div className="meta-price w-full bg-white z-50 left-0 py-3">
              <div className="mx-auto w-3/4">
                <div className="flex items-center">
                  <div className="w-full">
                    <h2 className="text-gray-600">Nama Kelas</h2>
                    <h3 className="text-gray-900">
                      {data?.name ?? "Nama Kelas"}
                    </h3>
                  </div>
                  <h5 className="text-2xl text-teal-500 whitespace-no-wrap mr-4">
                    {data?.type === "free" ? (
                      "Free"
                    ) : (
                      <span>Rp.{ThousandFormat(data?.price ?? 0)}</span>
                    )}
                  </h5>
                  <a
                    href={`${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/joined/${data.id}`}
                    target="_blank"
                    rel={"noopener noreferrer"}
                    className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 whitespace-nowrap"
                  >
                    {data?.type === "free" ? "Enrol Now" : "Buy Now"}
                  </a>
                </div>
              </div>
            </div>
          </CSSTransition>
        </div>
      </section>
      <div className="w-3/4 mx-auto mt-8">
        <div className="w-3/4">
          <section>
            <h6 className="font-medium text-gray-900 text-2xl mb-4">
              About <span className="text-teal-500">Courses</span>
            </h6>
            <p className="text-gray-600 text-lg leading-relaxed mb-3">
              {data?.description ?? "Description Not Found"}
            </p>
          </section>
          <section className="mt-10">
            <h6 className="font-medium text-gray-900 text-2xl mb-4">
              Courses <span className="text-teal-500">Photos</span>
            </h6>
            <div className="flex justify-start items-center -mx-4 mt-6">
              {data?.images?.length > 0 ? (
                data?.images?.map?.((photo, index) => (
                  <CoursePhoto data={photo} key={index} />
                ))
              ) : (
                <div className="w-full text-center py-12">No Item Found</div>
              )}
            </div>
          </section>
          <section className="mt-10">
            <h6 className="font-medium text-gray-900 text-2xl mb-4">
              You Will <span className="text-teal-500">Learn</span>
            </h6>
            {data?.chapters?.length > 0 ? (
              <RenderPreview previews={data.chapters}></RenderPreview>
            ) : (
              <div className="w-full text-center py-12">No Previews Found</div>
            )}
          </section>
          <section className="mt-10 h-2/3">
            <h6 className="font-medium text-gray-900 text-2xl mb-4">
              Our <span className="text-teal-500">Instructur</span>
            </h6>
            <div className="flex items-center">
              <img
                src={
                  data?.mentor?.profile ??
                  `${process.env.NEXT_PUBLIC_BASE_URL}/images/default-user.jpg`
                }
                alt={data?.mentor?.name}
                className="w-20 h-20 rounded-full overflow-hiden object-cover"
              />
              <div className="ml-4">
                <h2 className="text-lg text-gray-900">
                  {data?.mentor?.name ?? "Mentor Name"}
                </h2>
                <h3 className="text-sm text-gray-600">
                  {data?.mentor.profession ?? "Mentor Profession"}
                </h3>
              </div>
            </div>
          </section>
          <section className="mt-10 w-6/12">
            <h6 className="font-medium text-gray-900 text-2xl mb-4">
              Happy <span className="text-teal-500">Students</span>
            </h6>
            {data?.reviews?.map((tesnimonial, index) => {
              return (
                <HappyStudent key={index} data={tesnimonial}></HappyStudent>
              );
            })}
          </section>
        </div>
      </div>
      <section className=" bg-indigo-950 py-12 mt-24" ref={footer}>
        <Footer></Footer>
      </section>
    </>
  );
}

DetailCourse.getInitialProps = async (props) => {
  const { id } = props.query;
  try {
    const data = await courses.details(id);
    return { data: data.data };
  } catch (error) {}
};
export default DetailCourse;
