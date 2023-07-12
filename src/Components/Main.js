import { useEffect, useState } from 'react'
import '../Style/Main.css'

const datas = [
    {
      "id": 1,
      "ime": "Proizvod 1",
      "slika": "https://www.vas-sajt.com/slika1.jpg",
      "cena": 19.99,
      "opis": "Elegantan kožni prsluk za muškarce sa stilom."
    },
    {
      "id": 2,
      "ime": "Proizvod 2",
      "slika": "https://www.vas-sajt.com/slika2.jpg",
      "cena": 24.99,
      "opis": "Luksuzni parfem sa senzualnim mirisom."
    },
    {
      "id": 3,
      "ime": "Proizvod 3",
      "slika": "https://www.vas-sajt.com/slika3.jpg",
      "cena": 12.99,
      "opis": "Moderna sportska kapa za zaštitu od sunca."
    },
    {
      "id": 4,
      "ime": "Proizvod 4",
      "slika": "https://www.vas-sajt.com/slika4.jpg",
      "cena": 9.99,
      "opis":  "Kvalitetan električni brijač za precizno brijanje."
    },
    {
      "id": 5,
      "ime": "Proizvod 5",
      "slika": "https://www.vas-sajt.com/slika5.jpg",
      "cena": 29.99,
      "opis":  "Stilski kaiš od prave kože."
    },
    {
      "id": 6,
      "ime": "Proizvod 6",
      "slika": "https://www.vas-sajt.com/slika6.jpg",
      "cena": 14.99,
      "opis": "Sportski ranac za nošenje opreme."
    },
    {
      "id": 7,
      "ime": "Proizvod 7",
      "slika": "https://www.vas-sajt.com/slika7.jpg",
      "cena": 17.99,
      "opis": "Praktičan novčanik sa više pregrada."
    },
    {
      "id": 8,
      "ime": "Proizvod 8",
      "slika": "https://www.vas-sajt.com/slika8.jpg",
      "cena": 11.99,
      "opis": "Sportski ranac za nošenje opreme."
    },
    {
      "id": 9,
      "ime": "Proizvod 9",
      "slika": "https://www.vas-sajt.com/slika9.jpg",
      "cena": 7.99,
      "opis": "Praktičan novčanik sa više pregrada."
    },
    {
      "id": 10,
      "ime": "Proizvod 10",
      "slika": "https://www.vas-sajt.com/slika10.jpg",
      "cena": 22.99,
      "opis": "Trendi naočare za sunce za upotpunjavanje stila."
    },
    {
      "id": 11,
      "ime": "Proizvod 11",
      "slika": "https://www.vas-sajt.com/slika11.jpg",
      "cena": 16.99,
      "opis": "Elegantan sat sa kožnim kaišem."
    },
    {
      "id": 12,
      "ime": "Proizvod 12",
      "slika": "https://www.vas-sajt.com/slika12.jpg",
      "cena": 13.99,
      "opis": "Udobne patike za trčanje i vežbanje."
    },
    {
      "id": 13,
      "ime": "Proizvod 13",
      "slika": "https://www.vas-sajt.com/slika13.jpg",
      "cena": 18.99,
      "opis": "Šik kožna torba za svakodnevnu upotrebu."
    },
    {
      "id": 14,
      "ime": "Proizvod 14",
      "slika": "https://www.vas-sajt.com/slika14.jpg",
      "cena": 9.99,
      "opis": "Moderna jakna koja će vas grejati tokom hladnih dana."
    },
    {
      "id": 15,
      "ime": "Proizvod 15",
      "slika": "https://www.vas-sajt.com/slika15.jpg",
      "cena": 25.99,
      "opis": "Klasične farmerke koje se lako kombinuju."
    },
    {
      "id": 16,
      "ime": "Proizvod 16",
      "slika": "https://www.vas-sajt.com/slika16.jpg",
      "cena": 10.99,
      "opis": "Elegantna haljina za svečane prilike."
    },
    {
      "id": 17,
      "ime": "Proizvod 17",
      "slika": "https://www.vas-sajt.com/slika17.jpg",
      "cena": 12.99,
      "opis": "Modni top pogodan za tople letnje dane."
    },
    {
      "id": 18,
      "ime": "Proizvod 18",
      "slika": "https://www.vas-sajt.com/slika18.jpg",
      "cena": 8.99,
      "opis": "Lepršava suknja za elegantan izgled."
    },
    {
      "id": 19,
      "ime": "Proizvod 19",
      "slika": "https://www.vas-sajt.com/slika19.jpg",
      "cena": 14.99,
      "opis": "Udobne i moderne tajice za trening."
    },
    {
      "id": 20,
      "ime": "Proizvod 20",
      "slika": "https://www.vas-sajt.com/slika20.jpg",
      "cena": 21.99,
      "opis": "Trendi futrola za mobilni telefon."
    },
    {
      "id": 21,
      "ime": "Proizvod 21",
      "slika": "https://www.vas-sajt.com/slika21.jpg",
      "cena": 11.99,
      "opis": "Praktična sportska torba sa više pregrada."
    },
    {
      "id": 22,
      "ime": "Proizvod 22",
      "slika": "https://www.vas-sajt.com/slika22.jpg",
      "cena": 16.99,
      "opis": "Kvalitetna upaljačica sa prelepim dezenom."
    },
    {
      "id": 23,
      "ime": "Proizvod 23",
      "slika": "https://www.vas-sajt.com/slika23.jpg",
      "cena": 9.99,
      "opis": "Stilski kaiš od veštačke kože."
    },
    {
      "id": 24,
      "ime": "Proizvod 24",
      "slika": "https://www.vas-sajt.com/slika24.jpg",
      "cena": 27.99,
      "opis": "Luksuzni parfem sa cvetnim mirisom."
    },
    {
      "id": 25,
      "ime": "Proizvod 25",
      "slika": "https://www.vas-sajt.com/slika25.jpg",
      "cena": 15.99,
      "opis": "Elegantne cipele sa visokom potpeticom za svečane trenutke."
    },
    {
      "id": 26,
      "ime": "Proizvod 26",
      "slika": "https://www.vas-sajt.com/slika26.jpg",
      "cena": 12.99,
      "opis": "Sportske šorts za udobnost tokom treninga."
    },
    {
      "id": 27,
      "ime": "Proizvod 27",
      "slika": "https://www.vas-sajt.com/slika27.jpg",
      "cena": 8.99,
      "opis": "Praktičan novčanik sa više pregrada."
    },
    {
      "id": 28,
      "ime": "Proizvod 28",
      "slika": "https://www.vas-sajt.com/slika28.jpg",
      "cena": 14.99,
      "opis": "Sportske patike za aktivnosti na otvorenom."
    },
    {
      "id": 29,
      "ime": "Proizvod 29",
      "slika": "https://www.vas-sajt.com/slika29.jpg",
      "cena": 10.99,
      "opis": "Lepršava suknja za elegantan izgled."
    },
    {
      "id": 30,
      "ime": "Proizvod 30",
      "slika": "https://www.vas-sajt.com/slika30.jpg",
      "cena": 19.99,
      "opis": "Kvalitetna ženska četkica za kosu."
    }
  ]

export default function Main (){
    const [data, setData] = useState(datas)

    return (
        <>
        <div className='container'>
            {data.map((product) => (<div className='produkti' key={product.id}>
                <img src={product.slika} alt='slika proizvoda'></img>
                <h1>{product.ime}</h1>
                <h2>{product.cena}</h2>
                <p>{product.opis}</p>
                </div>))}
        </div>
        </>
    )
}