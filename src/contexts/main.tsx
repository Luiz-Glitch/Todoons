import React, { createContext, useState, ReactNode, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { storageKeysTasks } from "../hooks/storageKeys";
import { Colors } from "react-native/Libraries/NewAppScreen";

export interface TaskProps {
    id: number;
    title: string;
    description?: string;
    categories?: [];
    date_final?: Date;
    date_initial?: Date;
    emphasis?: boolean;
    priority?: string;
    checked?: boolean;
  }

interface MainContextProps {
    tasks: TaskProps[];
    createTask: (task:TaskProps) => void;
    deleteTask: (id:number) => void;
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

    async function deleteTask(id:number) {
        const taskDelete = tasks.find((task) => task.id == id)
        const index = tasks.indexOf(taskDelete ? taskDelete : {} as TaskProps)
        const newValues = tasks
        newValues.splice(index,1)
        setTasks(newValues)
    }

    return (
        <MainContext.Provider value={{tasks,createTask, deleteTask}}>
            {children}
        </MainContext.Provider>
    )
}