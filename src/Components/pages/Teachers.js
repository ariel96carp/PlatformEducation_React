import Banner from "../organisms/Banner"
import Teacher from "../organisms/Teacher"
import { useEffect } from "react"
import { getAllTeachers } from "../redux/actionscreator"
import store from "../redux/store"
import { connect } from "react-redux"

const Teachers = ({ teachers }) => {
    useEffect(() => {
        store.dispatch(getAllTeachers())
    }, [])

    return (
        <>
            <Banner 
                title="Nuestros profesores"
                description="Este plantel está altamente certificado para guiarte en tu educación."
                classname="teachers"
            />
            <div className="wrapper">
                <div className="grid-container section-padding l-80 m-100 center-block">
                    {teachers && 
                        teachers.map((teacher) => (
                            <Teacher 
                                key={teacher.id}
                                name={teacher.name}
                                country={teacher.country}
                            />
                        ))
                    }
                </div>  
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    teachers: state.teacherReducer.teachers
})

export default connect(mapStateToProps, {})(Teachers)
