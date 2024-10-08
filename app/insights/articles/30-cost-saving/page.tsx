/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";

import Article1 from "@/public/assets/insights/Article_1.png";
import Article2 from "@/public/assets/insights/Article_2.png";
import Article3 from "@/public/assets/insights/Article_3.png";

// import Square from "./square.png";

export default function CostSaving() {
  return (
    <main className="flex  flex-col justify-between w-full">
      <Navbar />
      <span className="h-20"></span>

      <div className=" bg-white px-10 md:px-20 text-black flex items-center">
        <div className="max-w-8xl my-5 w-full">
          <div className="flex justify-start my-10">
            <Link href="/insights">
              <button className="flex fl`ex-row text-left items-center text-black hover:underline text-base">
                <ChevronLeft className="mr-2 text-lg" /> Back to Insights
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center w-full mt-5 mb-10">
            <p className="text-3xl sm:text-3xl md:text-5xl font-bold text-[#090E4A] text-center">
              30% Cost Savings
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col md:flex-row w-full">
          <div className="flex-1 md:hidden block">
            <img
              src={Article3.src}
              alt="Article 1"
              className="w-full h-full xl:h-52 object-cover"
            />
          </div>

          <div className="flex-1">
            <div className="text-black px-10 md:px-20 py-10">
              <h3 className="text-4xl font-bold mb-4">Business Challenge</h3>
              <p className="text-base text-pretty">
                A global advertising and marketing services provider wanted to
                establish a centralized accounting to support it’s global
                operations and expansion.
              </p>
            </div>
          </div>

          <div className="flex-1 md:block hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${Article3.src})` }}
            ></div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full">
          <div className="flex-1 md:hidden block">
            <img
              src={Article1.src}
              alt="Article 1"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 md:block hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${Article1.src})` }}
            ></div>
          </div>

          <div className="flex-1">
            <div className="text-black px-10 md:px-20 py-10">
              <h3 className="text-4xl font-bold mb-4">Solution Implemented</h3>
              <p className="text-base text-pretty">
                Designed and successfully implemented the solution in 3 months.
                The scope of work included :
              </p>

              <ul className="list-square marker:text-[#FFF600] ml-4 text-base">
                <li>
                  <span className="font-semibold">
                    Accounts Payable I Accounts Receivable I Payroll:
                  </span>{" "}
                  End to end management of the processes, including the exchange
                  of information from onsite to India.
                </li>
                <li>
                  <span className="font-semibold">Month close :</span> A complex
                  Revenue Recognition process involving tracking Deferred
                  income, accruals and release to revenue, Bank reconciliation,
                  inter-co reconciliation, VAT returns & other compliance.
                </li>
                <li>
                  <span className="font-semibold">Other activities:</span>{" "}
                  Treasury management including a weekly cash management system.
                </li>
                <li>
                  <span className="font-semibold">Consolidated reporting:</span>{" "}
                  Preparation of a comprehensive monthly reporting comprising
                  of:
                  <ul className="list-disc  text-base ml-5">
                    <li>
                      Board Pack including budgets vs. actual for the board at
                      individual entity level and consolidated group level.
                    </li>
                    <li>Ageing analysis of payables & receivables</li>
                    <li>Accruals / Prepayments analysis</li>
                    <li>Deferred Income tracker</li>
                    <li>P&L and Balance sheet schedules.</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">
                    Multi-Dimensional Financial book-keeping and analysis:
                  </span>
                  <ul className="list-disc text-base ml-5">
                    <li>Sales Person</li>
                    <li>Service Line</li>
                    <li>Geography</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full">
          <div className="flex-1 md:hidden block">
            <img
              src={Article2.src}
              alt="Article 1"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <div className="text-black px-10 md:px-20 py-10">
              <h3 className="text-4xl font-bold mb-4">Our Impact</h3>

              <ul className="list-square text-base  ml-4 marker:text-[#FFF600]">
                <li>
                  <span className="font-semibold">Reduced costs:</span>{" "}
                  Estimated savings of 30%
                </li>
                <li>
                  <span className="font-semibold">
                    CFO’s ability to focus on business requirements:
                  </span>{" "}
                  Being freed up from daily accounting operations, the CFO was
                  able to focus more on business partnership.
                </li>
                <li>
                  <span className="font-semibold">Improved processes:</span>{" "}
                  Implemented various processes/templates that ensured improved
                  visibility & granularity, plugging revenue leakages/errors.
                </li>
                <li>
                  <span className="font-semibold">
                    Successful remote transition:
                  </span>{" "}
                  Our experienced leadership ensured that the transition was
                  carried out remotely without having visited the client site.
                </li>
                <li>
                  <span className="font-semibold">Improved analytics:</span> In
                  the process of implementing an online management reporting
                  tool which will enable better analytics by the ability to
                  slice/dice data in an improved manner, online access to
                  reporting templates to all stakeholders, reduced reporting
                  timelines.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex-1 md:block hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${Article2.src})` }}
            ></div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
