import '../Style/Header.css'
export default function Header(){
    return (
        <>
        <div className='header'>
            <ul className='links'>
                <li><a href="#">PRODUCTS</a></li>
                <li><a href="#">COMPANY</a></li>
                <li><a href="#">PARTNETS</a></li>
                <li><a href="#">NEWS</a></li>
                <li><a href="#">CONTACT US</a></li>
            </ul>
            <ul className='login'>
                <li><input placeholder='search for prodict'></input></li>
                <li><button>Login</button></li>
            </ul>
        </div>
        </>
    )
}