import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import BackIcon from "../assets/svg/back_icon.svg";
import EditIcon from "../assets/svg/edit_icon.svg";
import DeleteRedIcon from "../assets/svg/delete_red_icon.svg";

type ViewTaskProps = {
  activeTaskId: string | null;
  title?: string;
  description?: string;
  handleBackPress: () => void;
  handleEditPress: (taskId: string) => void;
  handleDeletePress: (taskId: string) => void;
};

function ViewTask({
  activeTaskId,
  title,
  description,
  handleBackPress,
  handleEditPress,
  handleDeletePress,
}: ViewTaskProps) {
  return (
    <>
      <div className="task-view-title">Title: {title}</div>
      <div className="task-view-description">Description: {description}</div>

      <Box sx={{ display: "flex", gap: "4rem", marginBottom: "5rem" }}>
        <ActionWrapper onClick={handleBackPress}>
          <img src={BackIcon} alt="back" />
          <span>Back</span>
        </ActionWrapper>
        <ActionWrapper onClick={() => handleEditPress(activeTaskId || "")}>
          <img src={EditIcon} alt="edit" />
          <span>Edit</span>
        </ActionWrapper>
        <ActionWrapper onClick={() => handleDeletePress(activeTaskId || "")}>
          <img src={DeleteRedIcon} alt="delete" />
          <span>Delete</span>
        </ActionWrapper>
      </Box>
    </>
  );
}

export default ViewTask;

const ActionWrapper = styled(Box)`
  display: flex;
  align-items: center;
  gap: 7px;
`;
