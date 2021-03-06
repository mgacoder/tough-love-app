const initialState = () => ({
    postImage: '',
    postDescription: '',
    posts: []
});

const postReducer = (state = initialState(), action) => {
    switch(action.type){
        case 'SET_POST_IMAGE':
            return{
                ...state,
                postImage: action.payload
            }
        case 'SET_POST_DESCRIPTION':
            return{
                ...state,
                postDescription: action.payload
            }
        case 'INSERT_POST':
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        default: return state
    }

}

export default postReducer