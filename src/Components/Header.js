import { useEffect, useState } from 'react'
import '../Style/Header.css'
export default function Header(){
    const [search, setSearch] = useState('')

    return (
        <>
        <div className='header'>
            <ul className='links'>
                <li><a href="#"></a></li>
                <li><a href="#">COMPANY</a></li>
                <li><a href="#">PARTNETS</a></li>
                <li><select><option selected disabled>POL</option><option>Muski</option><option>Zenski</option><option>Uniseks</option></select></li>
                <li><a href="#">CONTACT US</a></li>
            </ul>
            <ul className='login'>
                <li className='search'><input value={search} onChange={e => setSearch(e.target.value)} placeholder='search for product'></input>
                <button >🔍</button></li>
                <li className='dugme-login'><button>Login</button></li>
            </ul>
        </div>

        </>
    )
}