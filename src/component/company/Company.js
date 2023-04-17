import React from "react";
import BannerMain from "../../layout/Banner/Banner";
import Facts from "./Facts";
import Work from "./Work";
import Award from "../home/Award";
import Download from "./Download";
import Team from "./Team";
import img from "../../../src/images/blog/company.jpg";
const Company = () => {
  return (
    <div style={{ backgroundColor: "#F1F4FD" }}>
      <BannerMain
        img={img}
        title={"Who We Are"}
        title1={
          "Magzel (pvt) Limited is a software engineering company, a band of experienced and enthusiastic developers, designers, analysts, and managers."
        }
        title2={
          "Following its mission to deliver top-notch software products worldwide, the company transformed into an international business in 2015. We specialize in building custom software solutions where every detail is aimed at resolving a specific business problem."
        }
        title3={
          "The end-to-end delivery approach guided by the proprietary framework SDPDF™ allows the сlient to receive fully functioning software even if all they have is an idea."
        }
      />
      <Facts />
      <Work />
      <Download />
      <Award />
      <Team />
    </div>
  );
};

export default Company;
