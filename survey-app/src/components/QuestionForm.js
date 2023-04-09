import React, { useState } from "react";

export const QuestionForm = ({ addQuestion, hideForm }) => {
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState("");
  const [option, setOption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addQuestion(value, option, answer);
    hideForm(false);
    setValue("");
  };

  return (
    <form className="QuestionForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="question-input"
        value={value}
        placeholder="Any Question ?"
        onChange={(e) => setValue(e.target.value)}
      />
      <select
        className="question-input"
        onChange={(e) => setOption(e.target.value)}
      >
        <option value="none" disabled selected>
          Select Answer
        </option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
        <option value="other">Other Answer</option>
      </select>
      {option === "other" ? (
        <>
          <input
            type="text"
            className="question-input"
            value={answer}
            placeholder="Write Answer"
            onChange={(e) => setAnswer(e.target.value)}
          />
        </>
      ) : (
        <p></p>
      )}

      <button type="submit" className="submit-btn">
        Submit Question
      </button>
    </form>
  );
};
