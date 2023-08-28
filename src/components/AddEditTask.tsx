import styled from "@emotion/styled";
import { Box, TextField } from "@mui/material";
import React, { useState } from "react";

type AddEditTaskProps = {
  isEdit: boolean;
  activeTaskId: string | null;
  taskTitle?: string;
  taskDescription?: string;
  handleSubmitTask: (
    activeTaskId: string | null,
    title: string,
    description: string
  ) => void;
};

function AddEditTask({
  isEdit,
  activeTaskId,
  taskTitle,
  taskDescription,
  handleSubmitTask,
}: AddEditTaskProps) {
  const [title, setTitle] = useState(taskTitle || "");
  const [description, setDescription] = useState(taskDescription || "");

  return (
    <>
      <div className="task-text task-header">
        Task{isEdit ? `- ${taskTitle}` : ""}
      </div>
      <TaskTextField
        id="task-title"
        label="Title"
        multiline
        rows={2}
        maxRows={4}
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        sx={{ marginBottom: "2rem" }}
      />
      <TaskTextField
        id="task_description"
        label="Description"
        multiline
        rows={5}
        maxRows={8}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "2.5rem" }}
      >
        <span
          className="submit-button"
          onClick={() => handleSubmitTask(activeTaskId, title, description)}
        >
          Submit
        </span>
      </Box>
    </>
  );
}

export default AddEditTask;

const TaskTextField = styled(TextField)`
  background-color: #fff;
  border-radius: 9px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
`;
