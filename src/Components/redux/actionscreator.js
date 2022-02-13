import types from "./actions"

const apiURL = process.env.REACT_APP_API_URL

const loginUser = ( token ) => ({
    type: types.LOGIN_USER,
    data: token
})

const logoutUser = () => ({
    type: types.LOGOUT_USER
})

const getAllPosts = () => async dispatch => {
    const response = await fetch(`${apiURL}/posts`)
    if (response.status === 200)
    {
        const dataResponse = await response.json()
            return dispatch ({
                type: types.GET_ALL_POSTS,
                data: dataResponse
            })
    }
}

const getAllSpecialities = () => async dispatch => {
    const response = await fetch(`${apiURL}/especialidades`)
    if (response.status === 200)
    {
        const dataResponse = await response.json()
            return dispatch ({
                type: types.GET_ALL_SPECIALITIES,
                data: dataResponse
            })
    }
}

const getAllCourses = () => async dispatch => {
    const response = await fetch(`${apiURL}/cursos`)
    if (response.status === 200)
    {
        const dataResponse = await response.json()
            return dispatch ({
                type: types.GET_ALL_COURSES,
                data: dataResponse
            })
    }
}

const getAllTeachers = () => async dispatch => {
    const response = await fetch(`${apiURL}/profesores`)
    if (response.status === 200)
    {
        const dataResponse = await response.json()
            return dispatch ({
                type: types.GET_ALL_TEACHERS,
                data: dataResponse
            })
    }
}

const getPost = (id) => async dispatch => {
    const response = await fetch(`${apiURL}/posts/${id}`)
    if (response.status === 200)
    {
        const dataResponse = await response.json()
            return dispatch ({
                type: types.GET_POST,
                data: dataResponse.data
            })
    }
}

const getSpeciality = (id) => async dispatch => {
    const response = await fetch(`${apiURL}/especialidad/${id}`)
    if (response.status === 200)
    {
        const dataResponse = await response.json()
            return dispatch ({
                type: types.GET_SPECIALITY,
                data: dataResponse
            })
    }
}

const getCourse = (id) => async dispatch => {
    const response = await fetch(`${apiURL}/curso/${id}`)
    if (response.status === 200)
    {
        const dataResponse = await response.json()
            return dispatch ({
                type: types.GET_COURSE,
                data: dataResponse
            })
    }
}

const getClass = (id) => async dispatch => {
    const response = await fetch(`${apiURL}/clase/${id}`)
    if (response.status === 200)
    {
        const dataResponse = await response.json()
            return dispatch ({
                type: types.GET_CLASS,
                data: dataResponse
            })
    }
}

export {
    getAllPosts,
    getAllSpecialities,
    getAllCourses,
    getAllTeachers,
    getPost,
    getCourse,
    getClass,
    getSpeciality,
    loginUser,
    logoutUser
}

