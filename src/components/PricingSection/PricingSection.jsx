import React from "react";

const PricingSection = () => {
  return (
    <div>
      <div className="text-center mt-10 md:mt-25 mb-10">
        <h1 className="text-[#101727] font-extrabold text-[36px]   md:text-[45px]">
          Simple, Transparent Pricing
        </h1>
        <p className="text-[13px] md:text-[16px] w-65 md:w-lg   mx-auto text-[#627382] mt-1">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-7 justify-items-center mb-25">


        <div className="card w-75 md:w-96 h-112 border border-gray-200 bg-[#F9FAFC] shadow-sm rounded-2xl">
          <div className="card-body">
            <div className="">
              <h2 className="text-2xl text-[#101727] font-bold">Starter</h2>
              <p className="text-[#627382] text-[16px] mt-2 mb-6">Perfect for getting started</p>
              <span className="text-xl text-[#627382]"><span className="font-bold text-[#101727] text-[40px]">$0</span>/Month</span>
            </div>
            <ul className="mt-6 flex flex-col gap-2 md:text-[16px] font-medium text-[#627382]">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Access to 10 free tools</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Basic templates</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Community support</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>1 project per month</span>
              </li>
            </ul>
            <div className="mt-11">
              <button className="btn w-full border-0 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="hover:-translate-y-1.5 transition-all duration-500 card w-75  md:w-96 h-112 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-sm rounded-2xl relative">
          <div className="card-body">
            <span className="badge absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#FEF3C6] text-[#BB4D00]">Most Popular</span>
            <div className="">
              <h2 className="text-2xl  font-bold">Pro</h2>
              <p className=" text-[16px] text-white/80 mt-2 mb-4">Best for professionals</p>
              <span className="text-xl "><span className="font-bold  text-[40px]">$29</span>/Month</span>
            </div>
            <ul className="mt-1 text-white/90 flex flex-col gap-2 md:text-[16px] font-medium ">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Access to all premium tools</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Unlimited templates</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Priority support</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Unlimited project</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Cloud sync</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Advanced analytics</span>
              </li>
            </ul>
            <div className="mt-2 bg-white rounded-full">
              <button className="btn w-full border-0 bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-bold
               bg-clip-text text-transparent shadow-none rounded-full  ">Start Pro Trial</button>
            </div>
          </div>
        </div>

        <div className="card w-75 md:w-96 h-112 border border-gray-200 bg-[#F9FAFC] shadow-sm rounded-2xl">
          <div className="card-body">
            <div className="">
              <h2 className="text-2xl text-[#101727] font-bold">Enterprise</h2>
              <p className="text-[#627382] text-[16px] mt-2 mb-4">For teams and businesses</p>
              <span className="text-xl text-[#627382]"><span className="font-bold text-[#101727] text-[40px]">$99</span>/Month</span>
            </div>
            <ul className="mt-1 flex flex-col gap-2 md:text-[16px] font-medium text-[#627382]">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Everything in Pro</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Team collaboration</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Custom integrations</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Dedicated support</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>SLA guarantee</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Custom branding</span>
              </li>
            </ul>
            <div className="mt-2">
              <button className="btn w-full border-0 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">Contact Sales</button>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default PricingSection;
