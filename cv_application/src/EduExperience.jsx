import Input from "./Input.jsx"
function EduExperience(){
    return(
        <div className="EduExperience">
            <h2>Education Experience :</h2>
            <Input type="text" name="School Name" />
            <Input type="text" name="Title of study"/>
            <Input type="date" name='Date of joining' />
            <Input type="number" name="Duration"/>
        </div>
    )
}
export default EduExperience