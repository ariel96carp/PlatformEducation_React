import { Formik, Field, Form, ErrorMessage } from "formik"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [ loginError, setLoginError ] = useState(false)
    const navigate = useNavigate()

    const userLogin = async (data) => {
        const urlApi = process.env.REACT_APP_USER_API_URL
        const userData = {
            email: data.email,
            password: data.password
        }
        const header = new Headers()
        header.append("Content-Type", "application/json")
        const params = {
            method: "POST",
            headers: header,
            body: JSON.stringify(userData)
        }

        const response = await fetch(`${urlApi}/login`, params)
        switch(response.status)
        {
            case 200:
                const dataResponse = await response.json()
                localStorage.setItem("educationToken", dataResponse.token)
                navigate("/")
                break
            default:
                setLoginError(true)
                setTimeout(() => setLoginError(false), 2000)
        }
    }

    return (
        <Formik
            initialValues={{
                email: "",
                password: ""
            }}
            onSubmit={( values, { resetForm } ) => {
                userLogin(values)
                resetForm()
            }}
            validate={( values ) => {
                let errors = {}
                const emailPattern = "[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?"
                if (!values.email)
                {
                    errors.email = "Por favor ingrese un nombre."
                }
                else
                {
                    if (!values.email.match(emailPattern))
                    {
                        errors.email = "El correo ingresado no corresponde a un correo válido."
                    }
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
                        <h1 className="title center-content">Iniciar sesión</h1>
                        <Form className="login-form" action="#" method="POST">
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
                            <input type="submit" value="Iniciar sesión" className="button"></input>
                        </Form>
                        {loginError &&
                            <p className="form-message success center-content error">
                                El usuario ingresado no existe.
                            </p>
                        }
                    </div>
                </div>
            )}
        </Formik>
    )
}

export default Login
