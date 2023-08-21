import React, { useEffect, useState } from "react";
import { Grid, Avatar, Stack } from "@mui/material";
import Logo from "../Logo/logo";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { Link } from "react-router-dom";
import "./Header.css";
import { fetchUserData } from "../../services/api";

const Header = () => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const userData = await fetchUserData();
    if (userData) {
      setUserInfo(userData);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const AvatarImage = userInfo?.picture?.large;
  const UserName = `${userInfo?.name?.title} ${userInfo?.name?.first} ${userInfo?.name?.last}`;

  return (
    <Grid
      spacing={2}
      className="header"
      container
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid item>
        <Stack direction="row" alignItems="center">
          <a href="/">
            <Logo />
          </a>
        </Stack>
      </Grid>
      <Grid item>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={"flex-end"}
          spacing={2}
        >
          <div className="header__item">
            <Link to="/add">
              <PlaylistAddIcon style={{ color: "white" }} />
            </Link>
          </div>
          <Avatar alt="Avatar" src={AvatarImage} sx={{ marginRight: 1 }} />
          {!isLoading && <div className="header__item">{UserName}</div>}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Header;
