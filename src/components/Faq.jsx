import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";


const Question= () => {
    
  const faqs = [
    {
      question: "How can I pay for my appointment?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.",
    },
    {
      question: "What can I expect at my first consultation?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.",
    },
    {
      question: "What can I expect at my first consultation?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.",
    },
    {
      question: "What can I expect at my first consultation?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.",
    },
    {
      question: "What can I expect at my first consultation?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.",
    },
    {
      question: "What can I expect at my first consultation?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.",
    },
    {
      question: "What can I expect at my first consultation?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.",
    },

    {
      question: "What can I expect at my first consultation?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpansion = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container 2xl:max-w-[1180px] xl:px-20 2xl:px-0 mx-auto relative pt-12 pb-12">
        <h2 className="text-center text-3xl font-semibold mb-8 content">
          Frequently Asked Questions
        </h2>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-7 border border-black shadow-sm bg-[#ff000004] hover:shadow-md ">
              <div
                onClick={() => toggleExpansion(index)}
                className="p-6">
                <button className="w-full flex items-center focus:outline-none">
                  <svg
                    className={`flex-shrink-0 w-6 h-6 text-blue-500 ${expandedIndex === index ? "transform rotate-90" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 12H4"
                    />
                  </svg>
                  <div className="w-full flex justify-between items-center ">
                    <h1 className="mx-4 text-xl text-gray-500 dark:text-white faqstext">
                      {faq.question}
                    </h1>
                    <span><FaChevronDown className="text-2xl cursor-pointer text-[#585858]" /></span>
                  </div>
                </button>
                {expandedIndex === index && (
                  <div className="mt-4 border-t-2 border-[#e3e3e3] pt-4">
                    <p className="max-w-full px-10 text-gray-500 dark:text-gray-300 a-faqstext">
                      {faq.answer}
                    </p>

                  </div>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Question;
