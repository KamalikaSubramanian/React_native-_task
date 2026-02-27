import React, { useState } from "react";
import "./Faq.css";
import downArrow from "../Faq/assets/downArrow.jpg";
import upArrow from "../Faq/assets/upArrow.jpg";
import sidearrowFaq from "../Faq/assets/sidearrowFaq.jpg";

const faqs = [
  {
    question: "What is Protein Coffee?",
    answer:
      "It's real, strong coffee, worth two espresso shots, blended with 15g of high-quality whey protein. Your everyday coffee, with benefits.",
  },
  {
    question: "How much protein does one serving have?",
    answer: "It's real, strong coffee, worth two espresso shots, blended with 15g of high-quality whey protein. Your everyday coffee, with benefits.",
  },
  {
    question: "What type of protein does this contain?",
    answer: "It's real, strong coffee, worth two espresso shots, blended with 15g of high-quality whey protein. Your everyday coffee, with benefits.",
  },
  {
    question: "Does it contain sugar?",
    answer: "It's real, strong coffee, worth two espresso shots, blended with 15g of high-quality whey protein. Your everyday coffee, with benefits.",
  },
  {
    question: "How much caffeine does it have?",
    answer: "It's real, strong coffee, worth two espresso shots, blended with 15g of high-quality whey protein. Your everyday coffee, with benefits.",
  },
  {
    question: "How do I prepare it?",
    answer: "It's real, strong coffee, worth two espresso shots, blended with 15g of high-quality whey protein. Your everyday coffee, with benefits.",
  },
];
function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-container">
      <h2 className="faq-title">Customers Often Ask —</h2>

      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div
            className="faq-question"
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          >
            {faq.question}
            <span>{openIndex === index ? <img src={upArrow} className="arrow"/> :<img src={downArrow} className="arrow"/>}</span>
          </div>

          {openIndex === index && (
            <p className="faq-answer">{faq.answer}</p>
          )}
        </div>
      ))}

      <div className="faq-buttons">
        <button className="btn-light">SEE OUR FAQ <img src={sidearrowFaq} className="arrow"/></button>
        <button className="btn-red">MAIL US</button>
      </div>
    </div>
  );
}

export default Faq