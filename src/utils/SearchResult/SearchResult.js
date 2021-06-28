import '../../App.css'
export default function SearchResult (props){
   return(
       <div className="card">
           <h3>{props.song}</h3>
           <h4>{props.artist}</h4>
           <p>{props.id}</p>
       </div>
   )
}