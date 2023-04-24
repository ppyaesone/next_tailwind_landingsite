import React from "react";
import { Disclosure } from "@headlessui/react";
const MoreInfoModal = () => {
  const info = [
    {
      title: "How the first lesson with teacher will be?",
      des: "By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online.",
    },
    {
      title: "How the first lesson with teacher will be?",
      des: "By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online.",
    },
    {
      title: "How the first lesson with teacher will be?",
      des: "By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online.",
    },
    {
      title: "How the first lesson with teacher will be?",
      des: "By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online.",
    },
    {
      title: "How the first lesson with teacher will be?",
      des: "By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online.",
    },
    {
      title: "How the first lesson with teacher will be?",
      des: "By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online.",
    },
  ];
  return (
    <div className="container mx-auto py-20">
      <p className="text-gray-500 text-2xl font-medium uppercase my-3">
        MORE INFO
      </p>
      <p className="text-gray-800 text-4xl font-medium capitalize mb-10">
        Common questions
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
        {info.map((inf, i) => {
          return (
            <Disclosure key={i}>
              {({ open }) => (
                <div className="group">
                  <Disclosure.Button className="flex flex-col group-hover:bg-[#524fd5] group-focus:bg-[#524fd5] w-full justify-between rounded-lg lg:rounded-full border border-gray-200 px-8 py-10 text-left text-sm font-medium  focus:outline-none ">
                    <div className="flex justify-between items-center w-full">
                      <span className="group-hover:text-white  group-focus:text-white">
                        {inf.title}
                      </span>
                      <svg
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 4v16m8-8H4"
                          color="blue"
                        ></path>
                      </svg>
                    </div>

                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 group-focus:text-white group-hover:text-white">
                      {inf.des}
                    </Disclosure.Panel>
                  </Disclosure.Button>
                </div>
              )}
            </Disclosure>
          );
        })}
      </div>
    </div>
  );
};

export default MoreInfoModal;
