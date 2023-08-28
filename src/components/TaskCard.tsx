import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import DeleteIcon from "../assets/svg/delete_icon.svg";

type TaskCardProps = {
  taskId: string;
  task: string;
  handleEditPress: (taskId: string) => void;
  handleViewPress: (taskId: string) => void;
  handleDeletePress: (taskId: string) => void;
};

function TaskCard({
  taskId,
  task,
  handleEditPress,
  handleViewPress,
  handleDeletePress,
}: TaskCardProps) {
  return (
    <TaskContainer>
      <span className="task-text">{task}</span>

      <ActionWrapper>
        <span
          className="edit-view-text"
          onClick={() => handleEditPress(taskId)}
        >
          Edit
        </span>
        <span
          className="edit-view-text"
          onClick={() => handleViewPress(taskId)}
        >
          View
        </span>
        <img
          src={DeleteIcon}
          alt="delete icon"
          className="delete-icon"
          onClick={() => handleDeletePress(taskId)}
        />
      </ActionWrapper>
    </TaskContainer>
  );
}

export default TaskCard;

const TaskContainer = styled(Box)`
  padding: 15px 10px;
  background-color: #fff;
  border-radius: 9px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ActionWrapper = styled(Box)`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;
