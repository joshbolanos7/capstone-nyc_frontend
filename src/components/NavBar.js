import { Link } from "react-router-dom";

export default function NavBar() {

    return(
        <nav>
            <div className='navLeft'>
                <Link to='/'>
                    <h1>I ❤️ NY</h1>
                </Link>
            </div>
            <div className='navRight'>
                <Link to='/landmarks'>
                    <h1>NYC Landmarks</h1>
                </Link>
            </div>
            <div className='navRight'>
                <Link to='/transportation'>
                    <h1>Transportation</h1>
                </Link>
            </div>
        </nav>
    )
}