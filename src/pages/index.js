import Head from "next/head";
// import Link from 'next/link'
import axios from "./configs/axios";
import Logo from "../../public/images/circle-accent-1.svg";

import Header from "../pages/parts/header";
import Hero from "../pages/parts/Hero";
import Clients from "./parts/Clients";
import ListCourses from "./parts/ListCourses";
import ListCategories from "./parts/ListCategories";
import Footer from "./parts/Footer";

import courses from "./constans/api/courses";

function Home({ data }) {
  return (
    <>
      <Head>
        <title>BWAMICRO</title>
      </Head>
      <main>
        <section className="header-cliping pt-10">
          <Logo className="absolute left-0 bottom-0"></Logo>
          <div className="sunshine"></div>
          <div className="container mx-auto">
            <Header onLight></Header>
            <Hero></Hero>
          </div>
        </section>
        <section className="container mx-auto pt-24">
          <Clients></Clients>
        </section>
        <section className=" container mx-auto pt-24">
          <ListCourses data={data}></ListCourses>
        </section>
        <section className="container mx-auto pt-24 pb-10">
          <ListCategories></ListCategories>
        </section>
        <section className=" bg-indigo-950 py-12 mt-24">
          <Footer></Footer>
        </section>
      </main>
    </>
  );
}

Home.getInitialProps = async () => {
  try {
    const data = await courses.all();
    return { data: data.data };
  } catch (error) {
    return error;
  }
};
export default Home;
