import api from "./api";

export const getTasks = () => api.get("/tasks");
export const addTask = (data) => api.post("/tasks", data);
export const deleteTask = (id) => api.delete(`/tasks/${id}`);