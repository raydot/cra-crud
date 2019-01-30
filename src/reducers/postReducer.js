const postReducer = (state = [], action) => {
	switch(action.type) {
		case 'ADD_POST':
			//adtion.data is an object with post title and message
			return state.concat([action.data]);
		case 'EDIT_POST': 
			return state.map((post)=>post.id === action.id ? {...post,editing:!post.editing}:post)
		case 'DELETE_POST':
			return state.filter((post)=>post.id !== action.id);
		case 'UPDATE':
			return state.map((post)=>{
				if(post.id === action.id) {
					return {
						...post,
						title: action.data.newTitle,
						message: action.data.newMessage,
						editing: !post.editing
					}
				} else return post;
			})
		default:
			//This must always be present so redux doesn't fail!
			return state;
	}
}

export default postReducer;