import {Link, Route, Routes} from 'react-router-dom'
import Projects from '../Projects/Projects'

function Menu(){ 
    return (
        <div>
            <div>
                <ul>
                <li> <link to="/projects"> Projects </link></li>
                <li> <link to="/task"> Task entries </link></li>
                <li> <link to="/graph"> Time spent in each project by client </link></li>
                </ul>
            </div>

<div>
    <Routes>
        <Route path="/projects" elemnent={<Projects/>}/>
    </Routes>
</div>
        </div>
    )

}
export default Menu