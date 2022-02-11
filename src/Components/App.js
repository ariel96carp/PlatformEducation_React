import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import store from "./redux/store"
import Header from "./sections/header"
import Main from "./sections/main"
import Footer from "./sections/footer"
import "../styles/css/styles.css"

function App() {
    return (
        <Router>
            <Provider store={store}>
                <Header />
                <Main />
                <Footer />
            </Provider>
        </Router>
    );
}

export default App;
