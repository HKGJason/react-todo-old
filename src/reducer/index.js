const initialState = {
    todos : [],
    isOnlyActive: false
}

export default (state = initialState, action) =>{
    switch(action.type){
    case "INIT_TODO":
        return {...state, todos:action.payload}
    case "ADD_TODO":
  
        return {...state, todos: [...state.todos, action.payload]};
    case "TOGGLE_TODO":
		let result = state.todos.map(todo => {
			if (todo.id === action.payload.id)
				return action.payload
			else
				return todo
		})
        return {...state, todos:result}
    case "FILTER_COMPLETED":

        return {...state, isOnlyActive: action.payload}
	

    default:
        return state;
    }


}