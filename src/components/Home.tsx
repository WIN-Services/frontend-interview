import React, { useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import { getUserData } from "../utils/helperFunctions";
import { useLocalStorage } from "usehooks-ts";
import { Container } from "@mui/material";
import TaskList from "./TaskList";
import AddEditTask from "./AddEditTask";

type Mode = "list" | "add" | "edit" | "view";

export type TaskItem = {
  taskId: string;
  title: string;
  description: string;
};

function Home() {
  const [userData, setUserData] = useLocalStorage("user_data", null);
  const [taskList, setTaskList] = useLocalStorage<TaskItem[]>("task_list", []);
  const [mode, setMode] = useState<Mode>("list");
  const [activeTaskId, setActiveTaskId] = useState<string | null>(null);
  const activeTask = taskList.find((task) => task.taskId === activeTaskId);

  const fetchUserData = useCallback(() => {
    getUserData().then((data) => {
      setUserData(data);
    });
  }, []);

  useEffect(() => {
    if (!userData) {
      fetchUserData();
    }
  }, []);

  const handleAddTask = () => {
    setMode("add");
  };

  const handleEditPress = (taskId: string) => {
    setMode("edit");
    setActiveTaskId(taskId);
  };

  const handleViewPress = (taskId: string) => {
    setMode("view");
    setActiveTaskId(taskId);
  };

  const handleDeletePress = (taskId: string) => {
    const updatedTaskList = taskList.filter((task) => task.taskId !== taskId);

    setTaskList([...updatedTaskList]);
  };

  const handleSubmitTask = (
    activeTaskId: string | null,
    title: string,
    description: string
  ) => {
    if (!title || !description) {
      alert("Please fill in the task details");
      return;
    }

    if (activeTaskId) {
      const prevTaskList = [...taskList];

      const updatedList = prevTaskList.map((task) => {
        return task.taskId === activeTaskId
          ? { taskId: activeTaskId, title, description }
          : { ...task };
      });

      setTaskList([...updatedList]);
    } else {
      const taskId = uuidv4();
      const taskItem = {
        taskId,
        title,
        description,
      };

      setTaskList([...taskList, taskItem]);
    }

    setMode("list");
  };

  return (
    <div>
      <Header userData={userData} handleAddTask={handleAddTask} />
      <Container>
        {mode === "list" && (
          <TaskList
            taskList={taskList}
            handleEditPress={handleEditPress}
            handleViewPress={handleViewPress}
            handleDeletePress={handleDeletePress}
          />
        )}
        {(mode === "add" || mode === "edit") && (
          <AddEditTask
            isEdit={mode === "edit"}
            activeTaskId={activeTaskId}
            taskTitle={activeTask?.title}
            taskDescription={activeTask?.description}
            handleSubmitTask={handleSubmitTask}
          />
        )}
      </Container>
    </div>
  );
}

export default Home;
