import { StrictMode } from 'react'
import { render } from 'react-dom'
import App from "./components/App.js"

render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById('root')
)

