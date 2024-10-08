/* eslint-disable @next/next/no-img-element */

import Opportunity from "@/components/layout/homePage/opportunity";
import RoleOfFinance from "@/components/layout/homePage/role";
import Approach from "@/components/layout/homePage/approach";
import HowWorks from "@/components/layout/homePage/howWorks";

import { Separator } from "@/components/ui/separator";

// import Article1 from "@/public/assets/insights/Article_1.png";
// import Article2 from "@/public/assets/insights/Article_2.png";
// import Article3 from "@/public/assets/insights/Article_3.png";
// import Article4 from "@/public/assets/insights/Article_4.png";
// import Article5 from "@/public/assets/insights/Article_5.png";
// import Article6 from "@/public/assets/insights/Article_6.png";

import AiAsAService from "@/public/assets/catapultAdvantage/aiAsService.png";

export default function TextPage() {
  return (
    <>
      <Opportunity />
      <RoleOfFinance />
      <Approach page="catapult-advantage" />
      <HowWorks />
      <div className="px-10 md:px-20 text-black flex flex-col">
       
        {/* <div className="w-full flex items-center justify-center mb-10">
          <Separator className="w-96 bg-[#d9d9d9]" />
        </div> */}

        <div className="max-w-8xl flex items-center h-16">
          <p className="text-base leading-relaxed text-left">
            Our Unique AI as a Service Model for Digital Transformation solves
            for the typical barriers to startng this journey :
          </p>
          {/* <div className="flex flex-col mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 ">
              {Card.map((card, index) => (
                <div
                  key={index}
                  className="md:px-6 py-6 my-2 rounded-lg hover:md:shadow-2xl"
                >
                  <img src={card.image} alt="blog" className="w-full mb-2" />

                  <h2 className=" flex items-center text-2xl font-bold mb-2 ">
                    {card.title}
                  </h2>

                  <p className="text-base leading-relaxed text-left">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
      <img
        src={AiAsAService.src}
        alt="ai as a service"
        className="w-full bg-[#090E4A] py-10 px-10"
      />
    </>
  );
}

// const Card = [
//   {
//     title: "Budget",
//     description:
//       "Digital Transformation can cost millions in Upfront implementation costs and ongoing license fees. Our unique AI as a Service model eliminates cost barriers.",
//     image: Article1.src,
//     link: "",
//   },
//   {
//     title: "People",
//     description:
//       "Digital Transformations requires client senior management bandwidth for years. Our unique AI as a Service model eliminates any need for client teams for Project Management.",
//     image: Article2.src,
//     link: "",
//   },
//   {
//     title: "Expertise",
//     description:
//       "Digital Transformation can requires deep domain expertise as well as technology skills. Our unique AI as a Service model eliminates any need for clients to possess these skills.",
//     image: Article3.src,
//     link: "",
//   },
//   {
//     title: "Data",
//     description:
//       "Foundation for Ai readiness is data. Substantial resources & expertise are needed to aggregate enterprise data, As part of our unique AI as a Service model our teams manage the entire process of building your data layer.",
//     image: Article4.src,
//     link: "",
//   },
//   {
//     title: "User Adoption",
//     description:
//       "Majority of Digital Transformations fail due to failure of User Adoption. This causes loss of investments & competitive advantage. Our unique AI as a Service model integrates Catapult Capability Centre teams trained & incentivized for smooth implementation.",
//     image: Article5.src,
//     link: "",
//   },
//   {
//     title: "Speed",
//     description:
//       "Digital Transformation can take years to implement allowing competition and large companies an advantage. Our unique AI as a Service model eliminates this by bringing pre-built assets, frameworks, algorithm libraries & trained teams.",
//     image: Article6.src,
//     link: "",
//   },
// ];
