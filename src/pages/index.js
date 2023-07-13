import {
    TextField,
    Button,
    Typography,
    Checkbox,
    List,
    ListItem,
    Container,
    makeStyles
  } from "@material-ui/core";
  import { useEffect, useState } from "react";
import { fetchApi } from "../services/api";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

  
  const useStyles = makeStyles({
    input: {
      width: "70%",
      marginBottom: 30
    },
    addButton: {
      height: 55,
      marginLeft: 10,
      marginBottom: 30
    },
    container: {
      textAlign: "center",
      marginTop: 100
    },
    list: {
      width: "80%",
      margin: "auto",
      display: "flex",
      justifyContent: "space-around",
      border: "1px solid light-gray"
    },
    text: {
      width: "70%"
    },
    listButtons: {
      marginLeft: 10
    }
  });
  
  function App() {
    const [inputVal, setInputVal] = useState("");
    const [todos, setTodos] = useState([]);
    const [isEdited, setIsEdited] = useState(false);
    const [editedId, setEditedId] = useState(null);
    const classes = useStyles();

    const router = useRouter();
  
    const onChange = (e) => {
      setInputVal(e.target.value);
    };

    useEffect(()=>{
      getTodos();
    },[ ]);


    const getTodos = ()=>{
        return fetchApi(
            `todos`,
            {},
            {},
            true,
            "get"
          )
            .then((response) => { 
              
              if (
                response.status == 200 
              ) { 
                setTodos(response.data.content);        
              } else {
              }
            })
            .catch((err) => {});
    }
  
    const handleClick = () => {
      if (!isEdited) {  
        return fetchApi(
            `todos`,
            {title: inputVal},
            {},
            true,
            "post"
          )
            .then((response) => { 
              if (
                response.status == 201
              ) { 
                
                toast.success("Task Added Successfully"); 
                getTodos();
                      
              } else {
              }
            })
            .catch((err) => {});
        
      } else {
        return fetchApi(
            `todos/${editedId}`,
            {title: inputVal},
            {},
            true,
            "put"
          )
            .then((response) => { 
              if (
                response.status == 200
              ) { 
                
                toast.success("Task Updated Successfully"); 
                getTodos();

                setInputVal("");
                setIsEdited(false);
                      
              } else {
              }
            })
            .catch((err) => {});
      }
    
    };
  
    const onDelete = (id) => { 
        
        return fetchApi(
            `todos/?todoId=${id}`,
            {},
            {},
            true,
            "delete"
          )
            .then((response) => { 
              
              if (
                response.status == 200 
              ) { 
                toast.warning("Todo Deleted Successfully"); 
                getTodos();       
              } else {
              }
            })
            .catch((err) => {});
      
    };
  
    const handleDone = (id) => {
      const updated = todos.map((todo) => {
        if (todo.todoId === id) {
          todo.done = !todo.done;
        }
        return todo;
      });
      setTodos(updated);
    };
  
    const handleEdit = (id) => {
      const newTodos = todos.filter((todo) => todo.todoId !== id);
      const editVal = todos.find((todo) => todo.todoId === id); 
     
      setEditedId(editVal.todoId);
      setInputVal(editVal.title);
      setTodos(newTodos);
      setIsEdited(true);
    };
  
    return (
      <Container component="main"  style={{
        textAlign: "center",
        marginTop: 100
      }}>
        <TextField
          variant="outlined"
          onChange={onChange}
          label="type your task"
          value={inputVal}
          className={classes.input}
        />
        <Button
          size="large"
          variant={isEdited ? "outlined" : "contained"}
          color="primary"
          onClick={handleClick}
          className={classes.addButton}
          disabled={inputVal ? false : true}
        >
          {isEdited ? "Edit Task" : "Add Task"}
        </Button>
        <List>
          { todos && todos.length>0 && todos.map((todo) => {
            return (
              <>
                <ListItem divider="bool" className={classes.list}>
                  <Checkbox
                    onClick={() => handleDone(todo.todoId)}
                    checked={todo.done}
                  />
                  <Typography
                    className={classes.text}
                    style={{ color: todo.done ? "green" : "" }}
                    key={todo.todoId}
                  >
                    {todo.title}
                  </Typography>
                  <Button
                    onClick={() => handleEdit(todo.todoId)}
                    variant="contained"
                    className={classes.listButtons}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => onDelete(todo.todoId)}
                    color="secondary"
                    variant="contained"
                    className={classes.listButtons}
                  >
                    delete
                  </Button>
                </ListItem>
              </>
            );
          })}
        </List> 

        <Button  size="large"
          variant="outlined"
          color="primary"
          className={classes.addButton}
          style={{
            marginTop: 20
          }} 
          onClick={()=>router.push("/taskdraganddrop")}
          >
            Drag and Drop 
        </Button>
      </Container>
    );
  }
  
  export default App;
  