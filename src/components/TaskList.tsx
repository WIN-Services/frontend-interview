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
      <div className="task-text task-header">Todays Tasks</div>
      {taskList?.length ? (
        taskList?.map((task) => (
          <TaskCard
            key={`${task.taskId}`}
            taskId={task.taskId}
            task={task?.title || ""}
            handleEditPress={handleEditPress}
            handleViewPress={handleViewPress}
            handleDeletePress={handleDeletePress}
          />
        ))
      ) : (
        <div className="add-task-instruction">
          <span>Please add your tasks ↗️</span>
        </div>
      )}
    </>
  );
}

export default TaskList;
