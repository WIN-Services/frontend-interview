import React from "react";
import TaskCard from "./TaskCard";
import { TaskItem } from "./Home";

type TaskListProps = {
  taskList: TaskItem[];
  handleEditPress: (taskId: string) => void;
  handleViewPress: (taskId: string) => void;
  handleDeletePress: (taskId: string) => void;
};

function TaskList({
  taskList,
  handleEditPress,
  handleViewPress,
  handleDeletePress,
}: TaskListProps) {
  return (
    <>
      <div className="task-text task-header">Today Tasks</div>
      {taskList?.map((task) => (
        <TaskCard
          key={`${task.taskId}`}
          taskId={task.taskId}
          task={task?.title || ""}
          handleEditPress={handleEditPress}
          handleViewPress={handleViewPress}
          handleDeletePress={handleDeletePress}
        />
      ))}
    </>
  );
}

export default TaskList;
