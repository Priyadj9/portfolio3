import "./styles.css";
import React from "react";
import { Header } from "./components/header/Header";
import { About } from "./components/about/About";
import { Resume } from "./components/resume/Resume";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Testimonials } from "./components/testimonials/Testimonials";
import { ContactUs } from "./components/contact/ContactUs";
import { Footer } from "./components/footer/Footer";
import resumeData from "./resumeData";

export default function App() {
  return (
    <div className="App">
      <Header resumeData={resumeData} />
      <About resumeData={resumeData} />
      <Testimonials resumeData={resumeData} />
      <Resume resumeData={resumeData} />
      <Portfolio resumeData={resumeData} />

      <ContactUs />
      <Footer resumeData={resumeData} />
    </div>
  );
}
