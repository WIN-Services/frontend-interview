import React, { useEffect, useState } from "react";
import { Grid, Container } from "@material-ui/core";
import CardComponent from "../../components/card/CardComponent";
import {
  deleteItemFromLocalStorage,
  getItemsFromLocalStorage,
} from "../../services/storage";

const HomePage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = getItemsFromLocalStorage();
    setItems(storedItems[0]?.value);
  }, []);

  const handleDelete = (id) => {
    deleteItemFromLocalStorage(id);
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };
  return (
    <Grid container className="container">
      {items && items.length > 0
        ? items.map((item) => (
            <Grid item key={item.id} xs={12}>
              <CardComponent
                id={item.id}
                title={item.title}
                onDelete={() => handleDelete(item.id)}
              />
            </Grid>
          ))
        : "Add Task From header"}
    </Grid>
  );
};

export default HomePage;
