const reducer = (state, action) => {

    switch (action.type) {
        case "get_chats":
            return {
                ...state,
                chats:action.payload.chats,
                from: action.payload.from,
                message: action.payload.message,
                name: action.payload.name,
                status: action.payload.status,
                to: action.payload.to,
            }
    }

    return state;
};

export default reducer;