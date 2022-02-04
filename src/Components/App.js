import { Provider } from "react-redux"
import { getAllCourses } from "./redux/actionscreator"
import store from "./redux/store"
import Header from "./sections/header"
import Main from "./sections/main"
import Footer from "./sections/footer"

store.dispatch(getAllCourses())

function App() {
    return (
        <Provider store={store}>
            <Header />
            <Main />
            <Footer />
        </Provider>
    );
}

export default App;
