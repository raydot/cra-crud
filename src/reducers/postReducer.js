const postReducer = (state = [], action) => {
	switch(action.type) {
		case 'ADD_POST':
			//adtion.data is an object with post title and message
			return state.concat([action.data]);
		default:
			//This must always be present so redux doesn't fail!
			return state;
	}
}

export default postReducer;