"use client";


import Accordion from "../../Accordion.jsx";
import Button from "../../Button";
import Reveal from "../../common/ScrollAnimation";
import Title from "../../common/Title";

import { whoWeAreData } from "../../../data/whoWeAreData.js";
import { useState } from "react";

const WhoWeAreHomeOne = () => {
  const [openAccordion, setOpenAccordion] = useState(0);

  const toggleAccordion = (index) => {
    if (openAccordion === index) {
      return setOpenAccordion(null);
    }
    setOpenAccordion(index);
  };

  return (
    <section id="about" className=" py-24 bg-gray-50">
      <div className="container">
        <Title
          subTitle="WHO WE ARE"
          title="We Are Proud of our accurate medical coding solutions."
          primary={true}
          titleBlack={false}
          classNames="justify-start"
        />
        <div className="grid lg:grid-cols-2 lg:gap-24 gap-10 items-center">
          <div className="w-full relative">
            {/* IMAGES */}
            {whoWeAreData?.images?.map((img, i) => (
              <Reveal from={100} key={i}>
                <div
                  className={`image ${
                    i === 1 ? "absolute bottom-0 left-1/3" : ""
                  }`}
                >
                 <img
  src={img}
  alt="Who We Are"
  className={`w-full h-full object-cover rounded-lg border border-solid border-gray-200 ${
    i === 0 ? "min-h-[520px]" : "h-[280px]"
  }`}
  width="550"
  height="550"
/>
                </div>
              </Reveal>
            ))}

            {/* JOURNEY TEXT */}
            <div
              style={{ background: "#f7933d", fontSize: "19px" }}
              className="flex items-center gap-1 md:w-fit w-[60%] py-4 px-6  absolute bottom-5 left-1/2 -translate-x-1/2 text-gray-100 rounded-md"
            >
              {/* <h2 className="text-6xl font-bold">Begin</h2> */}
              <p className="text-1xl" style={{color:"#000"}}>Begin Your Journey With Us!</p>
            </div>
          </div>

          {/* WHO WE ARE CONTENT */}
          <div>
            <div>
              {/* FAQS */}
              <ul className="space-y-6">
                {whoWeAreData?.topics?.map((item, i) => (
                  <li key={i}>
                    <Accordion
                      item={item}
                      open={openAccordion === i}
                      toggle={() => toggleAccordion(i)}
                    />
                  </li>
                ))}
              </ul>

              {/* BUTTONS */}
              <div className="flex sm:items-center flex-col sm:flex-row gap-6 mt-12">
                <button
                  className="btn btn-secondary"
                  onClick={() => {}}
                >
                  GET QUOTATION
                </button>
                <Button text="CONTACT US" link="/contact" primary={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreHomeOne;
