function Input(props){
    return (
        <div className="Input">
            <label htmlFor="">{(props.name).toUpperCase()} : </label>
            <input type={props.type} name={props.name} value={props.value} disabled={props.disabled?true:false} onChange={props.onChange} />
        </div>
    )
}
export default Input