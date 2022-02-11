import CourseBanner from "../organisms/CourseBanner"
import CourseTemary from "../organisms/CourseTemary"
import store from "../redux/store"
import { connect } from "react-redux"
import { getCourse } from "../redux/actionscreator"
import { useEffect } from "react"

const Course = ({ course }) => {
    useEffect(() => {
        store.dispatch(getCourse(1))
    }, [])

    return (
        <>
            <div className="course-banner section-padding">
                <div className="wrapper">
                    {course &&
                        <CourseBanner
                            name={course.name}
                            subtitle={course.subtitle}
                            information={course.information}
                            speciality={course.data.specialities[0].name}
                            picture={course.picture}
                        />
                    }
                </div>
            </div>
            <section className="course-info section-padding">
                <div className="wrapper">
                    {course && 
                        (
                            <div className="info">
                                <div className="knowledge">
                                    <h3 className="info-title">¿Qué aprenderás?</h3>
                                    <ul
                                        className="info-list"
                                        dangerouslySetInnerHTML={{__html: course.you_learn}}
                                    />
                                </div>
                                <div className="requirements">
                                    <h3 className="info-title">Conocimientos previos</h3>
                                    <ul
                                        className="info-list"
                                        dangerouslySetInnerHTML={{__html: course.requirements}}
                                    />
                                </div>
                                <div className="level">
                                    <h3 className="info-title">Nivel</h3>
                                    <p>{course.level}</p>
                                </div>
                                <div className="profesor">
                                    <h3 className="info-title">Profesor</h3>
                                    <p>Beto Quiroga</p>
                                </div>
                            </div>
                        )
                    }
                    <div className="temary">
                        <h2 className="course-title">Temario del curso</h2>
                        {course &&
                            course.data.classes.map((level) => (
                                <CourseTemary 
                                    key={level.class.id}
                                    title={level.class.title}
                                    description={level.class.description}
                                    subjects={level.subjects}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

const mapStateToProps = (state) => ({
    course: state.courseReducer.course
})

export default connect(mapStateToProps, {})(Course)