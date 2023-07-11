import '../Style/Footer.css'
export default function Footer(){
    return (
        <div className='container-footer'>
        <div className='footer'>
        <div className='div-footer-links'>
            <ul className='footerLinks'>
                <li>Adresa, Grad, Zemlja</li>
                <li>Kontakt: 061-234-5678</li>
                <li>Adresa, Grad, Zemlja</li>
            </ul>
            </div>
            <div className='div-korisni-linkovi'>
                <p> - Korisni linkovi - </p>
        <ul className='korisni-linkovi'>
                <li><a href="#">PRODUCTS</a></li>
                <li><a href="#">COMPANY</a></li>
                <li><a href="#">PARTNETS</a></li>
                <li><a href="#">NEWS</a></li>
                <li><a href="#">CONTACT US</a></li>
            </ul>
            </div>
        </div>
        <p className='p'> @sva prava sadrzana</p>
        </div>
    )
}