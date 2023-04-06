import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useSortable } from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";


export const Question = ({ ask, deleteQuestion, editQuestion }) => {

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({id: ask.id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

  return (
    <div className="Question" ref={setNodeRef} style={style} {...attributes} {...listeners}>
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
