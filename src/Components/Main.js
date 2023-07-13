import { useEffect, useState } from 'react'
import '../Style/Main.css'

const datas = [
    {
      "id": 1,
      "ime": "Proizvod 1",
      "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
      "cena": 19.99,
      "opis": "Elegantan kožni prsluk za muškarce sa stilom."
    },
    {
      "id": 2,
      "ime": "Proizvod 2",
      "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
      "cena": 24.99,
      "opis": "Luksuzni parfem sa senzualnim mirisom."
    },
    {
      "id": 3,
      "ime": "Proizvod 3",
      "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
      "cena": 12.99,
      "opis": "Moderna sportska kapa za zaštitu od sunca."
    },
    {
      "id": 4,
      "ime": "Proizvod 4",
      "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
      "cena": 9.99,
      "opis":  "Kvalitetan električni brijač za precizno brijanje."
    },
    {
      "id": 5,
      "ime": "Proizvod 5",
      "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
      "cena": 29.99,
      "opis":  "Stilski kaiš od prave kože."
    },
    {
      "id": 6,
      "ime": "Proizvod 6",
      "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
      "cena": 14.99,
      "opis": "Sportski ranac za nošenje opreme."
    },
    {
      "id": 7,
      "ime": "Proizvod 7",
      "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
      "cena": 17.99,
      "opis": "Praktičan novčanik sa više pregrada."
    },
    {
      "id": 8,
      "ime": "Proizvod 8",
      "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
      "cena": 11.99,
      "opis": "Sportski ranac za nošenje opreme."
    },
    {
      "id": 9,
      "ime": "Proizvod 9",
      "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
      "cena": 7.99,
      "opis": "Praktičan novčanik sa više pregrada."
    },
    {
      "id": 10,
      "ime": "Proizvod 10",
      "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
      "cena": 22.99,
      "opis": "Trendi naočare za sunce za upotpunjavanje stila."
    },
    {
      "id": 11,
      "ime": "Proizvod 11",
      "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
      "cena": 16.99,
      "opis": "Elegantan sat sa kožnim kaišem."
    },
    {
      "id": 12,
      "ime": "Proizvod 12",
      "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
      "cena": 13.99,
      "opis": "Udobne patike za trčanje i vežbanje."
    },
    {
      "id": 13,
      "ime": "Proizvod 13",
      "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
      "cena": 18.99,
      "opis": "Šik kožna torba za svakodnevnu upotrebu."
    },
    {
      "id": 14,
      "ime": "Proizvod 14",
      "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
      "cena": 9.99,
      "opis": "Moderna jakna koja će vas grejati tokom hladnih dana."
    },
    {
      "id": 15,
      "ime": "Proizvod 15",
      "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
      "cena": 25.99,
      "opis": "Klasične farmerke koje se lako kombinuju."
    },
    {
      "id": 16,
      "ime": "Proizvod 16",
      "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
      "cena": 10.99,
      "opis": "Elegantna haljina za svečane prilike."
    },
    {
      "id": 17,
      "ime": "Proizvod 17",
      "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
      "cena": 12.99,
      "opis": "Modni top pogodan za tople letnje dane."
    },
    {
      "id": 18,
      "ime": "Proizvod 18",
      "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
      "cena": 8.99,
      "opis": "Lepršava suknja za elegantan izgled."
    },
    {
      "id": 19,
      "ime": "Proizvod 19",
      "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
      "cena": 14.99,
      "opis": "Udobne i moderne tajice za trening."
    },
    {
      "id": 20,
      "ime": "Proizvod 20",
      "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
      "cena": 21.99,
      "opis": "Trendi futrola za mobilni telefon."
    },
    {
      "id": 21,
      "ime": "Proizvod 21",
      "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
      "cena": 11.99,
      "opis": "Praktična sportska torba sa više pregrada."
    },
    {
      "id": 22,
      "ime": "Proizvod 22",
      "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
      "cena": 16.99,
      "opis": "Kvalitetna upaljačica sa prelepim dezenom."
    },
    {
      "id": 23,
      "ime": "Proizvod 23",
      "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
      "cena": 9.99,
      "opis": "Stilski kaiš od veštačke kože."
    },
    {
      "id": 24,
      "ime": "Proizvod 24",
      "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
      "cena": 27.99,
      "opis": "Luksuzni parfem sa cvetnim mirisom."
    },
    {
      "id": 25,
      "ime": "Proizvod 25",
      "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
      "cena": 15.99,
      "opis": "Elegantne cipele sa visokom potpeticom za svečane trenutke."
    },
    {
      "id": 26,
      "ime": "Proizvod 26",
      "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
      "cena": 12.99,
      "opis": "Sportske šorts za udobnost tokom treninga."
    },
    {
      "id": 27,
      "ime": "Proizvod 27",
      "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
      "cena": 8.99,
      "opis": "Praktičan novčanik sa više pregrada."
    },
    {
      "id": 28,
      "ime": "Proizvod 28",
      "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
      "cena": 14.99,
      "opis": "Sportske patike za aktivnosti na otvorenom."
    },
    {
      "id": 29,
      "ime": "Proizvod 29",
      "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
      "cena": 10.99,
      "opis": "Lepršava suknja za elegantan izgled."
    },
    {
      "id": 30,
      "ime": "Proizvod 30",
      "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
      "cena": 19.99,
      "opis": "Kvalitetna ženska četkica za kosu."
    }
  ]

export default function Main (){
    const [data, setData] = useState(datas)

    return (
        <div className='main-container'>
        <div className='container'>
            {data.map((product) => (<div className='produkti' key={product.id}>
                <img src={product.slika} width='200px' height='200px' alt='slika proizvoda'></img>
                <h1>{product.ime}</h1>
                <h2>{product.cena}</h2>
                <p>{product.opis}</p>
                </div>))}
        </div>
        </div>
    )
}