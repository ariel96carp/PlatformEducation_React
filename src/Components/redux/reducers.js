import types from "./actions"

const postReducer = ( state = {}, action ) => {
    switch(action.type)
    {
        case types.GET_ALL_POSTS:
            return {
                ...state,
                posts: action.data
            }
        case types.GET_POST:
            return {
                ...state,
                post: action.data
            }
        case types.CREATE_POST:
            return {
                ...state,
                posts: state.posts.concat(action.data)
            }
        default:
            return state
    }
}

const specialityReducer = ( state = {}, action ) => {
    switch(action.type)
    {
        case types.GET_ALL_SPECIALITIES:
            return {
                ...state,
                specialities: action.data
            }
        case types.GET_SPECIALITY:
            return {
                ...state,
                speciality: action.data
            }
        default:
            return state
    }
}

const courseReducer = ( state = {}, action ) => {
    switch(action.type)
    {
        case types.GET_ALL_COURSES:
            return {
                ...state,
                courses: action.data
            }
        case types.GET_COURSE:
            return {
                ...state,
                course: action.data
            }
        default:
            return state
    }
}

const classReducer = ( state = {}, action ) => {
    switch(action.type)
    {
        case types.GET_CLASS:
            return {
                ...state,
                class: action.data
            }
        default:
            return state
    }
}

const teacherReducer = ( state = {}, action ) => {
    switch(action.type)
    {
        case types.GET_ALL_TEACHERS:
            return {
                ...state,
                teachers: action.data
            }
        default:
            return state
    }
}

export { postReducer, specialityReducer, courseReducer, classReducer, teacherReducer }
