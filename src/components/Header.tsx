import { Avatar, Box, Typography, styled } from "@mui/material";
import React from "react";
import WinHomeLogo from "../assets/svg/Win_Home_Logo.svg";
import Logo_Ellipse from "../assets/svg/Logo_Ellipse.svg";
import AddTaskIcon from "../assets/svg/add_task_icon.svg";

type HeaderProps = {
  userData: any;
  handleAddTask: () => void;
};

function Header({ userData, handleAddTask }: HeaderProps) {
  return (
    <div>
      <HeaderContainer>
        <Box>
          <img src={Logo_Ellipse} alt="logo ellipse" className="logo-ellipse" />
          <img src={WinHomeLogo} alt="Win home logo" className="win-logo" />
        </Box>

        <InfoBox>
          <img
            src={AddTaskIcon}
            alt="add task icon"
            className="add-task-icon"
            onClick={handleAddTask}
          />
          <Avatar
            src={userData?.picture?.thumbnail}
            sx={{ marginRight: "0.5rem" }}
          />
          <UserNameText>{userData?.name?.last}</UserNameText>
        </InfoBox>
      </HeaderContainer>
    </div>
  );
}

export default Header;

const HeaderContainer = styled(Box)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #005981;
  padding-block: 2.5rem;
  z-index: 1;
`;

const InfoBox = styled(Box)`
  display: flex;
  padding-right: 2rem;
  align-items: center;
`;

const UserNameText = styled(Typography)`
  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
