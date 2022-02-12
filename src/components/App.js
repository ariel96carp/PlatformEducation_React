import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import store, { persistor } from "./redux/store"
import { PersistGate } from "redux-persist/integration/react"
import Header from "./sections/header"
import Main from "./sections/main"
import Footer from "./sections/footer"
import "../styles/css/styles.css"

const App = () => (
    <Router>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Header />
                <Main />
                <Footer />
            </PersistGate>
        </Provider>
    </Router>
)

export default App
