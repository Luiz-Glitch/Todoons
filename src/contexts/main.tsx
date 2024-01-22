import React, { createContext, useState, ReactNode, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { storageKeysTasks } from "../hooks/storageKeys";

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
}
interface MainProviderProps {
    children: ReactNode;
}

export const MainContext = createContext<MainContextProps>({} as MainContextProps)

export default function MainProvider({ children } : MainProviderProps){
    const [tasks, setTasks] = useState<TaskProps[]>([])

    // Pegar as tasks
    useEffect(() => {
        function getTasks () {
            const tasksStorage = AsyncStorage.getItem(storageKeysTasks.all)
            tasksStorage.then((response) =>{
                if (response){
                    const jsonValue = JSON.parse(response)
                    setTasks(jsonValue)
                    alert(tasks)
                }
                return [] as TaskProps[]
            }
            )
            
        }
        getTasks()
        //Assim que o createTask for acionado vai execultar novamente o useEffect para atulizar os dados
    },[])

    async function createTask (task:TaskProps) {
        const tasksStorage = [...tasks, task]
        await AsyncStorage.setItem(storageKeysTasks.all, JSON.stringify(tasksStorage))
        setTasks(tasksStorage)
    }

    return (
        <MainContext.Provider value={{tasks,createTask}}>
            {children}
        </MainContext.Provider>
    )
}