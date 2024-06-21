import Input from "./Input.jsx"
function WorkExperience(){
    return(
        <div className="WorkExperience">
            <h2>Work Experience :</h2>
            <Input type="text" name="Company Name"/>
            <Input type="text" name="Position title"/>
            <Input type="date" name="Date Joining" />
            <Input type="date" name="Date Leaving" />
            <Input type="checkbox" name="Currently Working" />
            <Input type="text" name="Responsibilities"/>
        </div>
    )
}
export default WorkExperience