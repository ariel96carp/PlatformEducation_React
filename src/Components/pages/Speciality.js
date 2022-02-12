import CourseBanner from "../organisms/CourseBanner"
import CourseSpeciality from "../organisms/CourseSpeciality"
import store from "../redux/store"
import { connect } from "react-redux"
import { getSpeciality } from "../redux/actionscreator"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

const Speciality = ({ speciality }) => {
    const { id } = useParams()

    useEffect(() => {
        store.dispatch(getSpeciality(id))
    }, [ id ])

    if (!speciality)
    {
        return (
            <div className="wrapper section-padding">
                <h3 className="not-found">La especialidad indicada no existe.</h3>
            </div>
        )
    }

    if(speciality)
    {
        const specialityId = parseInt(id)
        if(!(speciality.id === specialityId))
        {
            return (
                <div className="wrapper section-padding">
                    <h3 className="not-found">La especialidad indicada no existe.</h3>
                </div>
            )
        }
    }

    return (
        <>
            <div className="course-banner section-padding">
                <div className="wrapper">
                    <CourseBanner 
                        name={speciality.data.name}
                        subtitle={speciality.data.subtitle}
                        information={speciality.data.information}
                        picture={speciality.data.picture}
                    />
                </div>
            </div>
            <section className="course-info section-padding">
                <div className="wrapper">
                    <div className="info speciality">
                        <div className="knowledge">
                            <h3 className="info-title">¿Qué aprenderás?</h3>
                            <ul className="info-list">
                                {speciality.data.abilities.map((ability) => (
                                    <li
                                        key={ability.id}
                                    >{ability.description}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="requirements">
                            <h3 className="info-title">Conocimientos previos</h3>
                            <ul className="info-list">
                                {speciality.data.knowledge.map((knowledge) => (
                                    <li
                                        key={knowledge.id}
                                    >{knowledge.description}</li>
                                ))}        
                            </ul>
                        </div>
                        <div className="level">
                            <h3 className="info-title">Nivel</h3>
                            <p>{speciality.data.level}</p>
                        </div>
                        <div className="profesor">
                            <h3 className="info-title">Profesor</h3>
                            <p>Beto Quiroga</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="speciality-temary section-padding">
                <div className="wrapper">
                    <h2>Temario de la especialidad</h2>
                    {speciality.data.courses.map((course) => (
                        <CourseSpeciality
                            key={course.id}
                            title={course.name}
                            information={course.information}
                            picture={course.picture}
                        />
                    ))}            
                </div>
            </section>
        </>
    )
}

const mapStateToProps = (state) => ({
    speciality: state.specialityReducer.speciality
})

export default connect(mapStateToProps, {})(Speciality)
