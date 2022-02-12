import Vimeo from "@u-wave/react-vimeo"
import { useEffect } from "react"
import store from "../redux/store"
import { connect } from "react-redux"
import { getClass, getCourse } from "../redux/actionscreator"

const Class = ({ classVideo, course }) => {
    useEffect(() => {
        store.dispatch(getClass(123))
        store.dispatch(getCourse(1))
    }, [])

    return (
        <section className="video-info section-padding">
            <div className="wrapper">
                {(classVideo && course) &&
                    <div className="video-grid">
                        <div className="video-container">
                            <div className="video">
                                <Vimeo
                                    video={classVideo.video}
                                />
                            </div>
                            <h3 className="video-title">{classVideo.name}</h3>
                            <p className="video-description">{course.name}</p>
                        </div>
                        <div className="video-temary">
                            <h3 className="title">Temario del curso</h3>
                            {course.data.classes.map((theme) => (
                                <div 
                                    className="temary-theme"
                                    key={theme.class.id}
                                >
                                    <h3>{theme.class.title}</h3>
                                    <ul className="temary-list">
                                        {theme.subjects.map((subject) => (
                                            <li
                                                key={subject.subject.id}
                                            >
                                                {subject.subject.title}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                }
            </div>
        </section>
    )
}

const mapStateToProps = (state) => ({
    classVideo: state.classReducer.class,
    course: state.courseReducer.course
})

export default connect(mapStateToProps, {})(Class)
