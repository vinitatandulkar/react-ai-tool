import React, { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import Markdown from "react-markdown";
import { checkHeading, replaceHeadingStarts } from "../helper";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import language from "react-syntax-highlighter/dist/esm/languages/hljs/1c";

const Answers = ({ ans, totalResult, index, type }) => {
  const [heading, setHeading] = useState(false);
  const [answer, setAnswer] = useState(ans);

  //console.log(ans, key);
  useEffect(() => {
    //console.log(ans, checkHeading(ans));
    //checkHeading(ans);
    if (checkHeading(ans)) {
      setHeading(true);
      setAnswer(replaceHeadingStarts(ans));
    }
  }, []);

  const renderer = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          {...props}
          children={String(children).replace(/\n$/, "")}
          language={match[1]}
          style={dark}
          PreTag="div"
        />
      ) : (
        <code {...props} className={className}>
          {children}
        </code>
      );
    },
  };

  return (
    <>
      {index == 0 && totalResult > 1 ? (
        <span className="pt-2 text-xl block text-white">{answer}</span>
      ) : heading ? (
        <span className={"pt-2 text-lg block text-white"}>{answer}</span>
      ) : (
        <span className={type == "q" ? "pl-1" : "pl-5"}>
          <Markdown components={renderer}>{answer}</Markdown>
        </span>
      )}
    </>
  );
};

export default Answers;
