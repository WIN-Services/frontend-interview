import React from "react";
import { Grid, IconButton, Avatar, Typography } from "@mui/material";
import { ArrowBackIosRounded, Edit, Delete } from "@mui/icons-material";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  deleteItemFromLocalStorage,
  getItemByIdFromLocalStorage,
} from "../../services/storage";
import "./ViewPage.css";

const ViewPage = () => {
  const { id } = useParams();
  const item = getItemByIdFromLocalStorage(id);
  let navigate = useNavigate({ replace: true });

  const handleEditClick = () => {
    navigate(`/add/${id}`);
  };

  const handleDeleteClick = () => {
    deleteItemFromLocalStorage(id);
    navigate("/");
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <b>Title: {item?.title}</b>
      </Grid>
      <Grid item xs={12}>
        <p>Description: {item?.description}</p>
      </Grid>
      <Grid item xs={12}>
        <div className="iconGroup">
          <div>
            <Link to="/">
              <IconButton className="iconButton">
                <Avatar className="avatarBack">
                  <ArrowBackIosRounded className="iconColorWhite" />
                </Avatar>
              </IconButton>
              <Typography variant="body1" className="buttonLabel">
                Back
              </Typography>
            </Link>
          </div>
          <div onClick={handleEditClick}>
            <IconButton className="iconButton">
              <Avatar className="avatarEdit">
                <Edit className="iconColorWhite" />
              </Avatar>
            </IconButton>
            <Typography variant="body1" className="buttonLabel">
              Edit
            </Typography>
          </div>
          <div onClick={handleDeleteClick}>
            <IconButton className="iconButton">
              <Avatar className="avatarDelete">
                <Delete className="iconColorWhite" />
              </Avatar>
            </IconButton>
            <Typography variant="body1" className="buttonLabel">
              Delete
            </Typography>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default ViewPage;
