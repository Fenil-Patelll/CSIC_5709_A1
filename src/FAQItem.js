import React, { useState } from 'react';
import './FAQItem.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <button className={`faq-question ${isOpen ? 'open' : ''}`} onClick={toggleOpen}>
        {question}
      </button>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

export default FAQItem;
