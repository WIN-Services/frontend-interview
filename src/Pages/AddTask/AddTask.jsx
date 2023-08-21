import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { Input } from "@mui/material";
import {
  getItemByIdFromLocalStorage,
  saveItemToLocalStorage,
} from "../../services/storage";
import StyledButton from "../../components/button/button";
import { useNavigate, useParams } from "react-router-dom";
import "./AddTask.css";

const AddPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();
  const item = getItemByIdFromLocalStorage(id);
  let navigate = useNavigate({ replace: true });

  useEffect(() => {
    if (item) {
      setTitle(item.title);
      setDescription(item.description);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = id ? { id, title, description } : { title, description };
    saveItemToLocalStorage(newItem);
    setTitle("");
    setDescription("");
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container className="container">
        <Grid item xs={12}>
          <Input
            type="text"
            autoFocus
            className="form_textfield"
            label="Title"
            placeholder="Title"
            value={title}
            required
            onChange={(event) => setTitle(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextareaAutosize
            className="form_textfield"
            aria-label="text area"
            minRows={5}
            placeholder="Description"
            value={description}
            required
            onChange={(event) => setDescription(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <StyledButton
            styleClassName="submit_button"
            label="Submit"
            type="submit"
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default AddPage;
