import { createContext, useState } from "react";


export const TasksContext = createContext({});
export const TasksProvider = ({ children }) => {
    const [cards, setCards] = useState([]);

    return (
        <TasksContext.Provider value={{ cards, setCards }}>
            {children}
        </TasksContext.Provider>
    );
}