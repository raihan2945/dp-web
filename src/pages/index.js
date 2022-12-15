import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import AboutUs from "../components/AboutUs/AboutUs";
import EducationAndTarining from "../components/EducationAndTarining/EducationAndTarining";
import Experience from "../components/Experience/Experience";
import HeroSection from "../components/Hero/HeroSection";
import Header from "../components/Layout/Header/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import Chamber from "../components/Chamber/Chamber";
import Speciality from "../components/Speciality/Speciality";
import Gallery from "../components/Gallery/Gallery";
import VideoGallery from "../components/VideoGallery/VideoGallery";
import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Layout/Header/Footer";

export default function Home() {
  const [allData, setAllData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getAllData = async () => {
    setLoading(true);
    const data = await axios.get("https://drmoslehuddin.com/context.json");
    setAllData(data.data);

    setLoading(false);
  };

  useEffect(() => {
    getAllData();
  }, []);

  console.log("data is : ", allData)

  return (
    <>
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          {/* <!-- Template Main CSS File --> */}
          <link href="assets/css/style.css" rel="stylesheet"></link>
          <link href="assets/css/hero.css" rel="stylesheet"></link>
          <link href="assets/css/header.css" rel="stylesheet"></link>
          <link href="assets/css/about-us.css" rel="stylesheet"></link>
          <link href="assets/css/education.css" rel="stylesheet"></link>
          <link href="assets/css/experience.css" rel="stylesheet"></link>
          <link href="assets/css/chamber.css" rel="stylesheet"></link>
          <link href="assets/css/speciality.css" rel="stylesheet"></link>
          <link href="assets/css/gallery.css" rel="stylesheet"></link>
          <link href="assets/css/video-gallery.css" rel="stylesheet"></link>
          <link href="assets/css/contact-us.css" rel="stylesheet"></link>
          <link href="assets/css/footer.css" rel="stylesheet"></link>


          {/* fonts  */}
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>

          {/* font awesome  */}
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet"></link>

          {/* <!-- //add bootstrap 5 css file --> */}
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
          ></link>

          {/* <!-- // add bootstrap 5 js file --> */}
          <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"></script>

          {/* <!-- //add bundel js --> */}
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
        </Head>
        {loading ? (
          <h1>loading</h1>
        ) : (
          <main>
            <section id="hero" className="d-flex align-items-center">
              <HeroSection data={allData}/>
            </section>
            <Header />
            <section id="about" className="about-video">
              <AboutUs data={allData}/>
            </section>
            <section id="education" className="">
              <EducationAndTarining data={allData}/>
            </section>
            <section id="experience" className="experience">
              <Experience data={allData}/>
            </section>
            <section id="chamber" className="chamber">
              <Chamber data={allData}/>
            </section>
            <section id="speciality" className="speciality">
              <Speciality data={allData}/>
            </section>
            <section id="gallery" className="gallery">
              <Gallery data={allData}/>
            </section>
            <section id="video-gallery" className="video-gallery">
              <VideoGallery data={allData}/>
            </section>
            <section id="contact-us" className="contact-us">
              <ContactUs data={allData}/>
            </section>
            <section id="footers" className="footer">
              <Footer data={allData}/>
            </section>
          </main>
        )}
      </div>
    </>
  );
}