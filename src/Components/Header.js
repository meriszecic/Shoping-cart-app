import { useEffect, useState } from 'react'
import '../Style/Header.css'
export default function Header(){
    const [search, setSearch] = useState('')
    const [data, setData] = useState([])

    // const handleChange = (e) => {
    //     e.preventDefault();
    //     setSearch(e.target.value);
    //   };
      
    //   if (search.length > 0) {
    //       data.filter((country) => {
    //       return country.title.match(search);
    //   });
    //   }

    //   const handleSearch = () => {
    //     const filteredData = data.filter((photo) => (photo.title.match(search)))
    //   }

    return (
        <>
        <div className='header'>
            <ul className='links'>
                <li><a href="#">PRODUCTS</a></li>
                <li><a href="#">COMPANY</a></li>
                <li><a href="#">PARTNETS</a></li>
                <li><select><option disabled>POL</option><option>Muski</option><option>Zenski</option></select></li>
                <li><a href="#">CONTACT US</a></li>
            </ul>
            <ul className='login'>
                <li className='search'><input value={search} onChange={e => setSearch(e.target.value)} placeholder='search for product'></input>
                <button >🔍</button></li>
                <li className='dugme-login'><button>Login</button></li>
            </ul>
        </div>

        {/* {data?.map((photo) => (<div key={photo.div}><p>{photo.title}</p></div>))} */}
        </>
    )
}