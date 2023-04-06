import React, { useState } from "react";

export const EditQuestionForm = ({ editQuestion, ask }) => {
  const [value, setValue] = useState(ask.ask);

  const handleSubmit = (e) => {
    e.preventDefault();
    editQuestion(value, ask.id);
    setValue("");
  };

  return (
    <form className="QuestionForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="question-input"
        value={value}
        placeholder="Update Question"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="question-btn">
        Update Question
      </button>
    </form>
  );
};
