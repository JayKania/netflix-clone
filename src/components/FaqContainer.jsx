import React, { useState } from "react";
import Faq from "./Faq";
import { v4 as uuidv4 } from "uuid";

const FaqContainer = () => {
  const [faqs, setFaqs] = useState([
    {
      id: uuidv4(),
      isOpen: false,
      ques: "What is Netflix?",
      ans: [
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
        "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
      ],
    },
    {
      id: uuidv4(),
      isOpen: false,
      ques: "How much does netflix cost?",
      ans: [
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.",
      ],
    },
    {
      id: uuidv4(),
      isOpen: false,
      ques: "Where can I watch?",
      ans: [
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
        "You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
      ],
    },
    {
      id: uuidv4(),
      isOpen: false,
      ques: "How do I cancel?",
      ans: [
        "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
      ],
    },
    {
      id: uuidv4(),
      isOpen: false,
      ques: "What can I watch on Netflix?",
      ans: [
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
      ],
    },
    {
      id: uuidv4(),
      isOpen: false,
      ques: "Is Netflix good for kids?",
      ans: [
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
        "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
      ],
    },
  ]);

  const questions = faqs.map((faq) => {
    const id = uuidv4();
    return (
      <Faq
        ques={faq.ques}
        ans={faq.ans}
        key={faq.id}
        id={faq.id}
        isOpen={faq.isOpen}
        faqs={faqs}
        setFaqs={setFaqs}
      />
    );
  });
  return (
    <div className="faq-wrapper">
      <div className="faq-container">
        <h1>Frequently Asked Questions</h1>
        {questions}
      </div>
    </div>
  );
};

export default FaqContainer;
