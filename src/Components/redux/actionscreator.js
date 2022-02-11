import types from "./actions"

const apiURL = process.env.REACT_APP_API_URL

const getAllPosts = () => async dispatch => {
    const response = await fetch(`${apiURL}/posts`)
    switch(response.status)
    {
        case 200:
            const dataResponse = await response.json()
            return dispatch ({
                type: types.GET_ALL_POSTS,
                data: dataResponse
            })
    }
}

const getAllSpecialities = () => async dispatch => {
    const response = await fetch(`${apiURL}/especialidades`)
    switch(response.status)
    {
        case 200:
            const dataResponse = await response.json()
            return dispatch ({
                type: types.GET_ALL_SPECIALITIES,
                data: dataResponse
            })
    }
}

const getAllCourses = () => async dispatch => {
    const response = await fetch(`${apiURL}/cursos`)
    switch(response.status)
    {
        case 200:
            const dataResponse = await response.json()
            return dispatch ({
                type: types.GET_ALL_COURSES,
                data: dataResponse
            })
    }
}

const getAllTeachers = () => async dispatch => {
    const response = await fetch(`${apiURL}/profesores`)
    switch(response.status)
    {
        case 200:
            const dataResponse = await response.json()
            return dispatch ({
                type: types.GET_ALL_TEACHERS,
                data: dataResponse
            })
    }
}

const getPost = (id) => async dispatch => {
    const response = await fetch(`${apiURL}/posts/${id}`)
    switch(response.status)
    {
        case 200:
            const dataResponse = await response.json()
            return dispatch ({
                type: types.GET_POST,
                data: dataResponse.data
            })
    }
}

const getSpeciality = (id) => async dispatch => {
    const response = await fetch(`${apiURL}/especialidad/${id}`)
    switch(response.status)
    {
        case 200:
            const dataResponse = await response.json()
            return dispatch ({
                type: types.GET_SPECIALITY,
                data: dataResponse
            })
    }
}

const getCourse = (id) => async dispatch => {
    const response = await fetch(`${apiURL}/curso/${id}`)
    switch(response.status)
    {
        case 200:
            const dataResponse = await response.json()
            return dispatch ({
                type: types.GET_COURSE,
                data: dataResponse
            })
    }
}

const getClass = (id) => async dispatch => {
    const response = await fetch(`${apiURL}/clase/${id}`)
    switch(response.status)
    {
        case 200:
            const dataResponse = await response.json()
            return dispatch ({
                type: types.GET_CLASS,
                data: dataResponse
            })
    }
}

const createPost = (data) => async dispatch => {
    const header = new Headers()
    header.append("Content-type", "application/json")
    const params = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    const response = await fetch(`${apiURL}/posts`, params)
    switch(response.status)
    {
        case 201:
            const dataResponse = await response.json()
            return dispatch ({
                type: types.CREATE_POST,
                data: dataResponse.data
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
    createPost
}

