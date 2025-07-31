import notFoundImg from '../assets/404.png' 
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <>
            <div className='d-flex flex-column vh-100 justify-content-center align-items-center'>
                <span className='fs-1 fw-bold'>Something went wrong</span>
                <img className='col-2' src={notFoundImg} alt="404 Not Found" />
                
                <Link to='/' className='btn btn-success'>Back To Home Page</Link>
            </div>
        </>
    )
}
