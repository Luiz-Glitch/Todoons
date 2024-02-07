import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState, ReactNode, useEffect } from 'react';

import { storageKeysTasks } from '../hooks/storageKeys';

export interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

export interface TaskProps {
  id: number;
  title: string;
  status?: string;
  emphasis?: boolean;
  priority?: string;
  categories?: string[];
  dates?: DateRange;
  description?: string;
  check?: boolean;
}

interface MainContextProps {
  tasks: TaskProps[];
  createTask: (task: TaskProps) => void;
  getTask: (taskID: number) => TaskProps;
  updateTask: (task: TaskProps) => void;
  deleteTask: (task: TaskProps) => void;
  checkTask: (task: TaskProps) => void;
}
interface MainProviderProps {
  children: ReactNode;
}

export const MainContext = createContext<MainContextProps>({} as MainContextProps);

export default function MainProvider({ children }: MainProviderProps) {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  // Pegar as tasks
  useEffect(() => {
    function getTasks() {
      const tasksStorage = AsyncStorage.getItem(storageKeysTasks.all);
      tasksStorage.then((response) => {
        if (response) {
          const jsonValue: TaskProps[] = JSON.parse(response);
          setTasks(jsonValue);
        }
      });
    }
    getTasks();
  }, []);

  useEffect(() => {
    function saveStorage() {
      AsyncStorage.setItem(storageKeysTasks.all, JSON.stringify(tasks));
    }
    saveStorage();
  }, [tasks]);

  function createTask(task: TaskProps) {
    alert(JSON.stringify(task));
    const tasksStorage = [...tasks, task];
    setTasks(tasksStorage);
  }

  function getTask(taskID: number) {
    const index = tasks.findIndex((task) => task.id === taskID);
    return tasks[index];
  }

  function updateTask(updatedTask: TaskProps) {
    setTasks((tasks) => tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  }

  function deleteTask(task: TaskProps) {
    const index = tasks.indexOf(task);
    const newValues = tasks;
    newValues.splice(index, 1);
    setTasks([...newValues]);
  }

  function checkTask(task: TaskProps) {
    const index = tasks.indexOf(task);
    tasks[index].check = !tasks[index].check;
    setTasks([...tasks]);
  }

  return (
    <MainContext.Provider value={{ tasks, createTask, getTask, updateTask, deleteTask, checkTask }}>
      {children}
    </MainContext.Provider>
  );
}
