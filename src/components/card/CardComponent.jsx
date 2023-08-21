import React from "react";
import { Radio, IconButton } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import StyledButton from "../button/button";
import { Link, useNavigate } from "react-router-dom";
import "./CardComponent.css";

const CardComponent = ({ onDelete, title, id }) => {
  let navigate = useNavigate({ replace: true });
  return (
    <div className="card">
      <div className="card-content">
        <div className="left-content">
          <Radio color="primary" />
          <div>{title}</div>
        </div>
        <div className="right-content">
          <div onClick={() => navigate(`/add/${id}`)}>
            <StyledButton
              styleClassName="round submit_button "
              label="Edit"
              type="button"
            />
          </div>
          <div>
            <Link to={`/view/${id}`}>
              <StyledButton
                styleClassName="round submit_button "
                label="View"
                type="button"
              />
            </Link>
          </div>
          <div>
            <IconButton
              className="action-button delete-button"
              onClick={onDelete}
            >
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
