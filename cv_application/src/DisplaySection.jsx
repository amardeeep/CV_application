import PersonalD from "./PersonalD.jsx"
import EduD from "./EducationD.jsx"
import WorkD from "./WorkD.jsx"
function DisplaySection(){
    return (
        <div className="DisplaySection">
            <PersonalD/>
            <EduD/>
            <WorkD/>
        </div>
    )    
}
export default DisplaySection