import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="fourthpart">
      <p className="p1">Frequently asked questions</p>
      <div className="layout">
        {faqData.map((faq, index) => (
          <div
            className={`accordion ${activeIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => toggleAccordion(index)}
          >
            <div className="accordion__question">
              <p>{faq.question}</p>
            </div>
            <div className="accordion__answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "What is CRAFT at GrowthX?",
    answer:
      "CRAFTs are specialised programs that help you go from point A to point B in your career. If you want to achieve exponential outcomes, it's non-negotiable to build depth, proof of work and connect with the right people. That's exactly what CRAFT allows you to do. Taught by the best in the industry, they're in depth modules, that help you build actionable craft that achieve real outcomes.",
  },
  {
    question: "What is pricing for CRAFT?",
    answer:
      `CRAFT is offered as a part of the whole GrowthX membership. Apply for a membership here`

  },
  {
    question: "Who is eligible for CRAFT?",
    answer:
      "Exclusively available for GrowthX members who have completed the 8 week immersion.",
  },
  {
    question: "Can I apply if I am not a member?",
    answer:
      "The event led growth learning sprint is part of the GrowthX membership. To get access, you will need to apply for a membership.",
  },
  {
    question: "How do I become a member?",
    answer: "You can apply for a membership here",
  },
  {
    question: "Will I have access to the program director?",
    answer:
      "Ashutosh Cheulkar will be doing a live session to answer all questions and to break down & give feedback on two member built case studies.",
  },
  {
    question: "Will have access to recordings?",
    answer:
      "There will be no access to recordings post the sessions.",
  },
  {
    question: "Are these sessions live?",
    answer:
      "The sessions are hybrid. Some sessions will be live, while others will be async. All sessions will be accessible for only a limited time period.",
  },
];

export default FAQ;