import React, { useState, useEffect } from "react";

const Questions = () => {
  const [questions, setQuestions] = useState();

  const fetchData = async () => {
    const res = await fetch("/api/questions");
    res.json()
      .then(res => setQuestions(res))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    if (!questions) {
      fetchData();
    }
  });

  return (
    <div>
      <span>{questions && JSON.stringify(questions)}</span>
    </div>
  );
};

export default Questions;