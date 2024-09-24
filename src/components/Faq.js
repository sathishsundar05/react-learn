import React, { useState } from "react";

const faq = () => {
  const [openFAQ, setOpenFAQ] = useState(null); 

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index); 
  };

  const faqs = [
    {
      question: "How to become a seller?",
      answer:
        "Just talk to our expert team @0123456789 or mail to seller@ourportal.com. You will receive a confirmation email. By clicking that, you can become a seller."
    },
    {
      question: "How can I subscribe to Premium Membership?",
      answer: "To subscribe to our premium membership, go to the premium section in your account and follow the instructions."
    },
    {
      question: "What are the benefits of becoming a Continuous Customer?",
      answer: "As a continuous customer, you get exclusive discounts, early access to new products, and much more."
    },
    {
      question: "How can I cancel or return the products? What to be done to get the refund?",
      answer: "You can easily cancel or return your products from your order history page. Refunds will be processed within 7-10 business days."
    },
    {
      question: "When can I receive refund amount if I cancel the order?",
      answer: "Refunds are typically processed within 7-10 business days after cancellation."
    }
  ];

  return (
    <div className="faq-container">
      {faqs.map((faq, index) => (
        <div className="faq-item my-4" key={index}>
          <button
            onClick={() => toggleFAQ(index)}
            className={`w-full text-left text-lg font-semibold p-2 ${
              openFAQ === index ? "bg-[#4F7942] text-white" : "bg-[#c7af97] text-black"
            } hover:bg-[#e3deda] rounded-md flex justify-between items-center focus:outline-none`}
          >
            <span>{faq.question}</span>
            <span className="text-xl">{openFAQ === index ? "-" : "+"}</span>
          </button>
          {openFAQ === index && (
            <div className="p-4 bg-white border border-gray-200 rounded-none text-gray-600 text-sm">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default faq;