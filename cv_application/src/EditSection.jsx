import Buttons from "./Buttons.jsx"
import Personal from "./Personal.jsx"
import EduExperience from "./EduExperience.jsx"
import WorkExperience from "./WorkExperience.jsx"
function EditSection(){
    return (
        <div className="Editseciton">
            <h1>Eidt Section :</h1>
            <Buttons/>
            <Personal/>
            <EduExperience/>
            <WorkExperience/>
        </div>
    )
}
export default EditSection