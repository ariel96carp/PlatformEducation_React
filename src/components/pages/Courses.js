import Banner from "../organisms/Banner"
import Card from "../organisms/Card"
import { useEffect } from "react"
import store from "../redux/store"
import { connect } from "react-redux"
import { getAllCourses } from "../redux/actionscreator"

const Courses = ({ courses }) => {
    useEffect(() => {
        store.dispatch(getAllCourses())
    }, [])

    return (
        <>
            <Banner 
                title="Nuestros cursos"
                description="Comienza desde cero hoy mismo en tu camino a dominar la tecnología."
                classname="courses"
            />
            <div className="wrapper">
                <div className="grid-container section-padding l-90 m-100 center-block">
                    {courses &&
                        courses.map((course) => (
                            <Card 
                                key={course.id}
                                title={course.name}
                                image={course.picture}
                                description={course.subtitle}
                                path="/cursos"
                                id={course.id}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    courses: state.courseReducer.courses
})

export default connect(mapStateToProps, {})(Courses)
