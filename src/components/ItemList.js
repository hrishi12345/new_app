
import Card from './UI/Card'
function Items(props){
    return(
        <Card>
        <ul>
            {props.user.map((user)=>
            <li>{user.name} {user.age}</li>)}
        </ul>
        </Card>
    )
}
export default Items