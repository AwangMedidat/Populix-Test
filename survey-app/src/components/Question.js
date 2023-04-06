import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Question = ({ ask, deleteQuestion, editQuestion }) => {
  return (
    <div className="Question">
      <p>{ask.ask}</p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editQuestion(ask.id)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteQuestion(ask.id)}
        />
      </div>
    </div>
  );
};
