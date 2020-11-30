import React, { useState } from "react";
import "./style/Sss.css";
import data from "../data/data";
import SingleQuestion from "../data/Question";

function Sss() {
  const [questions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>Sıkça Sorulan Sorular</h3>
        <section className="info">
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default Sss;
