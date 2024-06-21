function Input(props){
    return (
        <div className="Input">
            <label htmlFor="">{props.name}</label>
            <input type={props.type} value={props.name} />
        </div>
    )
}
export default Input