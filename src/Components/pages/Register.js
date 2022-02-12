import { Formik, Field, Form, ErrorMessage } from "formik"
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

const Register = () => {
    const [ userCreated, setUserCreated ] = useState(false)
    const [ userError, setUserError ] = useState(false)
    const navigate = useNavigate()

    const createUser = async (data) => {
        const urlApi = process.env.REACT_APP_USER_API_URL
        const userData = {
            email: data.email,
            name: data.name,
            password: data.password
        }
        const header = new Headers()
        header.append("Content-Type", "application/json")
        const params = {
            method: "POST",
            headers: header,
            body: JSON.stringify(userData)
        }

        const response = await fetch(`${urlApi}/signup`, params)
        switch(response.status)
        {
            case 201:
                setUserCreated(true)
                setTimeout(() => {
                    setUserCreated(false)
                    navigate("/login")
                }, 2000)
                break
            default:
                setUserError(true)
                setTimeout(() => setUserError(false), 2000)
        }
    }

    return (
        <Formik
            initialValues={{
                email: "",
                name: "",
                password: ""
            }}
            onSubmit={( values, { resetForm } ) => {
                createUser(values)
                resetForm()
            }}
            validate={( values ) => {
                let errors = {}
                const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                if (!values.email)
                {
                    errors.email = "Por favor ingrese un correo."
                }
                else
                {
                    if (!values.email.match(emailPattern))
                    {
                        errors.email = "El correo ingresado no corresponde a un correo válido."
                    }
                }
                if (!values.name)
                {
                    errors.name = "Por favor ingrese un nombre."
                }
                if (!values.password)
                {
                    errors.password = "Por favor ingrese una contraseña."
                }

                return errors
            }}
        >
            {({ errors }) => (
                <div className="form-container l-40 m-60 s-100 center-block">
                    <div className="wrapper">
                        <h1 className="title center-content">Registro de Usuario</h1>
                        <Form className="login-form" action="#" method="POST">
                            <div className="input-container">
                                <label htmlFor="user-name">Nombre completo</label>
                                <Field
                                    type="text"
                                    id="user-name"
                                    name="name"
                                    placeholder="Ingrese un nombre">
                                </Field>
                                <ErrorMessage name="name" component={() => (
                                    <p className="input-message error">{errors.name}</p>
                                )} />
                            </div>
                            <div className="input-container">
                                <label htmlFor="user-email">Correo electrónico</label>
                                <Field 
                                    type="email" 
                                    id="user-email"
                                    name="email"
                                    placeholder="Ingrese su e-mail">
                                </Field>
                                <ErrorMessage name="email" component={() => (
                                    <p className="input-message error">{errors.email}</p>
                                )} />
                            </div>
                            <div className="input-container">
                                <label htmlFor="user-password">Contraseña</label>
                                <Field 
                                    type="password" 
                                    id="user-password"
                                    name="password"
                                    placeholder="Ingrese su contraseña">
                                </Field>
                                <ErrorMessage name="password" component={() => (
                                    <p className="input-message error">{errors.password}</p>
                                )} />
                            </div>
                            <input type="submit" value="Crear usuario" className="button"></input>
                        </Form>
                        {userCreated &&
                            <p className="form-message success center-content success">
                                ¡El usuario ha sido creado exitosamente!
                            </p>
                        }
                        {userError &&
                            <p className="form-message success center-content error">
                                El usuario no ha podido crearse. Por favor inténtelo de vuelta más tarde.
                            </p>
                        }
                        <p className="center-content">
                            ¿Ya tienes una cuenta de usuario? <Link to="/login" className="form-link">Iniciar sesión</Link>
                        </p>
                    </div>
                </div>
            )}
        </Formik>
    )
}

export default Register
