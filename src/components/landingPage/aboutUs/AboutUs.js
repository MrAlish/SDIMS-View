import React, { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="bg-slate-300">
      <div className="text-center uppercase font-bold italic text-4xl underline pb-4">
        AboutUs
      </div>
      <div className="text-center  text-xl pb-2">
        To know more detail about us, Please go through it...
      </div>
      <div className="text-sm pb-10 px-4 lg:px-24 text-justify">
        {showMore
          ? "Bursting with imagery, motion, interaction and distraction though it is, today’s World Wide Web is still primarily a conduit for textual information. In HTML5, the focus on writing and authorship is more pronounced than ever. It’s evident in the very way that new elements such as article and aside are named. HTML5 asks us to treat the HTML document more as… well, a document.It’s not just the specifications that are changing, either. Much has been made of permutations to Google’s algorithms, which are beginning to favor better written, more authoritative content (and making work for the growing content strategy industry). Google’s bots are now charged with asking questions like, “Was the article edited well, or does it appear sloppy or hastily produced?” and “Does this article provide a complete or comprehensive description of the topic?,” the sorts of questions one might expect to be posed by an earnest college professor.This increased support for quality writing, allied with the book-like convenience and tactility of smartphones and tablets, means there has never been a better time for reading online. The remaining task is to make the writing itself a joy to read."
          : "It’s not just the specifications that are changing, either. Much has been made of permutations to Google’s algorithms, which are beginning to favor better written, more authoritative content (and making work for the growing content strategy industry). Google’s bots are now charged with asking questions like, “Was the article edited well, or does it appear sloppy or hastily produced?” and “Does this article provide a complete or comprehensive description of the topic?,” the sorts of questions one might expect to be posed by an earnest college professor."}
      </div>
      <div className="flex justify-end pr-24 ">
        <div
          onClick={() => {
            setShowMore(!showMore);
          }}
          className="flex gap-2 bg-blue-400  py-3 shadow-lg rounded-md w-36 justify-center hover:bg-blue-300 cursor-pointer "
        >
          <div className="pt-1">
            {showMore ? <FaArrowUp /> : <FaArrowDown />}
          </div>

          <button type="submit" className="text-sm font-extralight ">
            {showMore ? "Show Less  " : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
