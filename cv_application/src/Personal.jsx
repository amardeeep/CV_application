import Input from "./Input.jsx"
function Personal(){
    return(
        <div>
            <h2>Personal Details :</h2>
        <Input type="text" name="Name" />
        <Input type="email" name="E-Mail" />
        <Input type="number" name="Phone" />
        </div>
    )
}
export default Personal