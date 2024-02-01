import React, { createContext, useState, ReactNode, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { storageKeysTasks } from "../hooks/storageKeys";

export interface DateRange {
    startDate: Date | null;
    endDate: Date | null;
  }

export interface TaskProps {
    id: number;
    title: string;
    description?: string;
    categories?: [];
    term?: DateRange;
    emphasis?: boolean;
    priority?: string;
    checked?: boolean;
  }

interface MainContextProps {
    tasks: TaskProps[];
    createTask: (task:TaskProps) => void;
    deleteTask: (task:TaskProps) => void;

}
interface MainProviderProps {
    children: ReactNode;
}

export const MainContext = createContext<MainContextProps>({} as MainContextProps)

export default function MainProvider({ children } : MainProviderProps){
    const [tasks, setTasks] = useState<TaskProps[]>([])

    // Pegar as tasks
    useEffect(() => {
        function getTasks() {
            const tasksStorage = AsyncStorage.getItem(storageKeysTasks.all)
            tasksStorage.then((response) =>{
                if (response){
                    const jsonValue:TaskProps[] = JSON.parse(response)
                    setTasks(jsonValue)
                }
            }
            )
            
        }
        getTasks()
    },[])

    useEffect(() =>{
        function saveStorage() {
            AsyncStorage.setItem(storageKeysTasks.all, JSON.stringify(tasks))
        }
        saveStorage()
    },[tasks])

    async function createTask (task:TaskProps) {
        const tasksStorage = [...tasks, task]
        setTasks(tasksStorage)
    }

    async function deleteTask(task:TaskProps) {
        const index = tasks.indexOf(task)
        const newValues = tasks
        newValues.splice(index,1)
        setTasks([...newValues])
    }

    return (
        <MainContext.Provider value={{tasks,createTask, deleteTask}}>
            {children}
        </MainContext.Provider>
    )
}