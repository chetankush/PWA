import React, { useReducer, useEffect, useContext } from "react";
import axios from 'axios';
import reducer from "./reducer";

const initialState = {
    chats: [],
    from: "",
    message: "",
    name: "",
    status: "",
    to: "",
}

const AppContext = React.createContext();

const AppProvider = ({ children }) => {


    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get('https://qa.corider.in/assignment/chat');
                const jsonData = response.data;
                // setData(jsonData);
                // setChats(jsonData.chats);
                console.log(jsonData.chats);
                dispatch({
                    type: "get_chats",
                    payload: {
                        chats: jsonData.chats,
                        from: jsonData.from,
                        message: jsonData.message,
                        name: jsonData.name,
                        status: jsonData.status,
                        to: jsonData.to,
                    }
                });
            } catch (error) {
                console.log('Error:', error);
            }
        };

        return () => fetchData();
    }, []);

    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    )
};

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };