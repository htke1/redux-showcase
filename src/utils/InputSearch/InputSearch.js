
const InputSearch = (props) =>{



    return(
        <div> <input type="text" className="searchInput" onChange={(event)=>{let val = event.target.value; props.handleChange(val)}} value={props.text}></input>
        <button className="searchBTN" onClick={props.handleClick}>search</button>
        <h2>{props.value}</h2>
        </div>
       )
}
export default InputSearch;