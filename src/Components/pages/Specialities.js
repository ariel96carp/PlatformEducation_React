import Banner from "../organisms/Banner"
import Card from "../organisms/Card"
import { useEffect } from "react"
import store from "../redux/store"
import { connect } from "react-redux"
import { getAllSpecialities } from "../redux/actionscreator"

const Specialities = ({ specialities }) => {
    useEffect(() => {
        store.dispatch(getAllSpecialities())
    }, [])

    return (
        <>
            <Banner 
                title="Especialidades"
                description="Domina una tecnología con las rutas de aprendizaje que te ofrecemos."
                classname="specialities"
            />
        <div className="wrapper">
            <div className="grid-container section-padding l-90 m-100 center-block">
                {specialities &&
                    specialities.map((speciality) => (
                        <Card 
                            key={speciality.id}
                            title={speciality.name}
                            image={speciality.picture}
                            description={speciality.subtitle}
                            path="/especialidades"
                            id={speciality.id}
                        />
                    ))
                }
            </div>
        </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    specialities: state.specialityReducer.specialities
})

export default connect(mapStateToProps, {})(Specialities)
