import MainBanner from "../organisms/MainBanner"
import Publication from "../organisms/Publication"
import { connect } from "react-redux"
import store from "../redux/store"
import { useEffect } from "react"
import { getAllPosts, getAllCourses } from "../redux/actionscreator"

const Home = ({ posts, courses }) => {
    useEffect(() => {
        store.dispatch(getAllPosts())
        store.dispatch(getAllCourses())
    }, [])

    return (
        <>
            <MainBanner 
                title="Bienvenido a la experiencia más increible en educación online"
                description="Nuestro equipo ha desarrollado esta plataforma pensando en
                tí. Sabemos que estás buscando contenido de calidad. Aquí lo encontrarás."
            />
            <div className="main-section section-padding">
                <div className="wrapper">
                    <section className="cart-container">        
                        {courses &&
                            courses.map((course, index) => {
                                if (index <=3)
                                {
                                    return (
                                        <div 
                                            className="course-cart"
                                            key={course.id}
                                        >
                                            <img src={course.picture}></img>
                                            <h3>{course.name}</h3>
                                        </div>
                                    )
                                }
                            })
                        }
                    </section>
                        <div className="posts-grid">
                            <section className="posts">
                                <h2 className="title">Ultimas publicaciones</h2>
                                {posts 
                                    ? (
                                        posts.map((post) => (
                                            <Publication 
                                                key={post.id}
                                                title={post.title}
                                                user={post.author}
                                                date={post.fecha}
                                                content={post.content}
                                            />
                                        ))
                                    )
                                    : (
                                        <p>No hay ninguna publicación reciente.</p>
                                    )
                                }
                            </section>
                            <section className="categories-list">
                                <h3 className="title">Lista de categorías</h3>
                                <ul>
                                    <li className="categorie-item image">React JS</li>
                                    <li className="categorie-item image">React Native</li>
                                    <li className="categorie-item image">Angular</li>
                                    <li className="categorie-item image">Vue.JS</li>
                                    <li className="categorie-item image">HTML</li>
                                    <li className="categorie-item image">CSS</li>
                                </ul>
                            </section>
                        </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    posts: state.postReducer.posts,
    courses: state.courseReducer.courses
})

export default connect(mapStateToProps, {})(Home)
