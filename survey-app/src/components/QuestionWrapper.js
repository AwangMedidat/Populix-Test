import React, { useState } from "react";
import { QuestionForm } from "./QuestionForm";
import { v4 as uuidv4 } from "uuid";
import { Question } from "./Question";
import { EditQuestionForm } from "./EditQuestionForm";
uuidv4();

export const QuestionWrapper = () => {
  const [questions, setQuestions] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  const addQuestion = (question) => {
    setQuestions([
      ...questions,
      { id: uuidv4(), ask: question, completed: false, isEditing: false },
    ]);
  };

  const deleteQuestion = (id) => {
    setQuestions(questions.filter((ask) => ask.id !== id));
  };

  const editQuestion = (id) => {
    setQuestions(
      questions.map((ask) =>
        ask.id === id ? { ...ask, isEditing: !ask.isEditing } : ask
      )
    );
  };

  const editAsk = (ask, id) => {
    setQuestions(
      questions.map((question) =>
        question.id === id
          ? { ...question, ask, isEditing: !question.isEditing }
          : question
      )
    );
  };

  const hideForm = (status) => {
    setOpenForm(status);
  };

  return (
    <div className="QuestionWrapper">
      <h1>Let's Ask Us</h1>

      {openForm ? (
        <QuestionForm addQuestion={addQuestion} hideForm={hideForm} />
      ) : (
        <button
          type="submit"
          className="question-btn"
          onClick={() => setOpenForm(true)}
        >
          Add Question
        </button>
      )}
      {questions.map((ask) =>
        ask.isEditing ? (
          <EditQuestionForm editQuestion={editAsk} ask={ask} />
        ) : (
          <Question
            key={ask.id}
            ask={ask}
            deleteQuestion={deleteQuestion}
            editQuestion={editQuestion}
          />
        )
      )}
    </div>
  );
};
