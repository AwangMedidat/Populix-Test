import React, { useEffect, useState } from "react";
import { QuestionForm } from "./QuestionForm";
import { v4 as uuidv4 } from "uuid";
import { Question } from "./Question";
import { EditQuestionForm } from "./EditQuestionForm";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
uuidv4();

export const QuestionWrapper = () => {
  const [questions, setQuestions] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    const savedQuestions = JSON.parse(localStorage.getItem("questions")) || [];
    setQuestions(savedQuestions);
  }, []);

  const addQuestion = (question, option, otherAnswer) => {
    const newQuestion = [
      ...questions,
      {
        id: uuidv4(),
        ask: question,
        optionAnswer: option,
        otherAnswer: otherAnswer,
        isEditing: false,
      },
    ];
    setQuestions(newQuestion);
    localStorage.setItem("questions", JSON.stringify(newQuestion));
  };

  const deleteQuestion = (id) => {

    const deletedQuestion = questions.filter((ask) => ask.id !== id)
    setQuestions(deletedQuestion);
    localStorage.setItem("questions", JSON.stringify(deletedQuestion));
  };

  const editQuestion = (id) => {
    setQuestions(
      questions.map((ask) =>
        ask.id === id ? { ...ask, isEditing: !ask.isEditing } : ask
      )
    );
  };

  const editAsk = (ask, id) => {
    const updatedQuestion = questions.map((question) =>
      question.id === id
        ? { ...question, ask, isEditing: !question.isEditing }
        : question
    );
    setQuestions(updatedQuestion);
    localStorage.setItem("questions", JSON.stringify(updatedQuestion));
  };

  const hideForm = (status) => {
    setOpenForm(status);
  };

  return (
    <div>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
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

          <div>
            <SortableContext
              items={questions}
              strategy={verticalListSortingStrategy}
            >
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
            </SortableContext>
          </div>
        </div>
      </DndContext>
    </div>
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setQuestions((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
};
