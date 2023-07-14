import { useEffect, useState } from 'react'
import '../Style/Main.css'

const datas = 
    [
      {
        "id": 1,
        "ime": "Kožni prsluk",
        "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
        "cena": 19.99,
        "opis": "Elegantan kožni prsluk za muškarce sa stilom.",
        "dodatanOpis": "Ovaj kožni prsluk je izrađen od visokokvalitetne kože, savršen za dodavanje elegancije i sofisticiranosti vašem izgledu."
      },
      {
        "id": 2,
        "ime": "Parfem",
        "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
        "cena": 24.99,
        "opis": "Luksuzni parfem sa senzualnim mirisom.",
        "dodatanOpis": "Ovaj luksuzni parfem kombinuje note cvetnih mirisa sa notama egzotičnog voća, stvarajući senzualnu i elegantnu aromu koja traje tokom čitavog dana."
      },
      {
        "id": 3,
        "ime": "Sportska kapa",
        "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
        "cena": 12.99,
        "opis": "Moderna sportska kapa za zaštitu od sunca.",
        "dodatanOpis": "Ova sportska kapa je napravljena od visokokvalitetnih materijala koji pružaju odličnu zaštitu od sunčevih zraka i istovremeno omogućavaju dobru ventilaciju."
      },
      {
        "id": 4,
        "ime": "Električni brijač",
        "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
        "cena": 9.99,
        "opis": "Kvalitetan električni brijač za precizno brijanje.",
        "dodatanOpis": "Ovaj električni brijač ima oštre noževe koji obezbeđuju glatko i precizno brijanje, bez iritacija kože."
      },
      {
        "id": 5,
        "ime": "Kaiš od prave kože",
        "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
        "cena": 29.99,
        "opis": "Stilski kaiš od prave kože.",
        "dodatanOpis": "Ovaj stilski kaiš je izrađen od visokokvalitetne prave kože, što ga čini dugotrajnim i otpornim na habanje."
      },
      {
        "id": 6,
        "ime": "Sportski ranac",
        "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
        "cena": 14.99,
        "opis": "Sportski ranac za nošenje opreme.",
        "dodatanOpis": "Ovaj sportski ranac ima više pregrada i džepova za organizaciju i praktičnost prilikom nošenja vaše opreme."
      },
      {
        "id": 7,
        "ime": "Novčanik",
        "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
        "cena": 17.99,
        "opis": "Praktičan novčanik sa više pregrada.",
        "dodatanOpis": "Ovaj novčanik je dizajniran sa više pregrada za kartice, novac i druge sitnice, pružajući vam praktičnost i organizaciju."
      },
      {
        "id": 8,
        "ime": "Sportski ranac",
        "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
        "cena": 11.99,
        "opis": "Sportski ranac za nošenje opreme.",
        "dodatanOpis": "Ovaj sportski ranac je lagan, ali izdržljiv, sa ergonomskim dizajnom koji pruža udobnost prilikom nošenja."
      },
      {
        "id": 9,
        "ime": "Novčanik",
        "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
        "cena": 7.99,
        "opis": "Praktičan novčanik sa više pregrada.",
        "dodatanOpis": "Ovaj novčanik ima više pregrada za organizaciju vašeg novca, kartica i drugih sitnica, pružajući vam praktičnost i stil."
      },
      {
        "id": 10,
        "ime": "Naočare za sunce",
        "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
        "cena": 22.99,
        "opis": "Trendi naočare za sunce za upotpunjavanje stila.",
        "dodatanOpis": "Ove trendi naočare za sunce kombinuju moderan dizajn sa kvalitetnom zaštitom od sunčevih zraka, čineći ih savršenim dodatkom za svaki outfit."
      },
      {
        "id": 11,
        "ime": "Sat sa kožnim kaišem",
        "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
        "cena": 16.99,
        "opis": "Elegantan sat sa kožnim kaišem.",
        "dodatanOpis": "Ovaj elegantan sat ima kućište od nerđajućeg čelika i kožni kaiš, kombinujući stil i funkcionalnost na savršen način."
      },
      {
        "id": 12,
        "ime": "Patike",
        "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
        "cena": 13.99,
        "opis": "Udobne patike za trčanje i vežbanje.",
        "dodatanOpis": "Ove udobne patike su dizajnirane za sportske aktivnosti, pružajući podršku, udobnost i stabilnost tokom trčanja i vežbanja."
      },
      {
        "id": 13,
        "ime": "Šik kožna torba",
        "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
        "cena": 18.99,
        "opis": "Šik kožna torba za svakodnevnu upotrebu.",
        "dodatanOpis": "Ova šik kožna torba ima dovoljno prostora za vaše svakodnevne potrebe i istovremeno pruža stilski izgled koji će privlačiti poglede."
      },
      {
        "id": 14,
        "ime": "Jakna",
        "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
        "cena": 9.99,
        "opis": "Moderna jakna koja će vas grejati tokom hladnih dana.",
        "dodatanOpis": "Ova moderna jakna je izrađena od kvalitetnih materijala koji pružaju toplotu i udobnost, čineći je savršenim izborom za hladne dane."
      },
      {
        "id": 15,
        "ime": "Klasične farmerke",
        "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
        "cena": 25.99,
        "opis": "Klasične farmerke koje se lako kombinuju.",
        "dodatanOpis": "Ove klasične farmerke su dizajnirane sa fokusom na udobnost i stil, pružajući vam svestrani komad odeće koji se može kombinovati na različite načine."
      },
      {
        "id": 16,
        "ime": "Haljina",
        "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
        "cena": 10.99,
        "opis": "Elegantna haljina za svečane prilike.",
        "dodatanOpis": "Ova elegantna haljina je savršen izbor za svečane prilike, sa svojim sofisticiranim dizajnom i kvalitetnim materijalom koji pruža udobnost tokom nošenja."
      },
      {
        "id": 17,
        "ime": "Modni top",
        "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
        "cena": 12.99,
        "opis": "Modni top pogodan za tople letnje dane.",
        "dodatanOpis": "Ovaj modni top je izrađen od laganih materijala koji omogućavaju dobru ventilaciju i udobnost, čineći ga idealnim izborom za tople letnje dane."
      },
      {
        "id": 18,
        "ime": "Lepršava suknja",
        "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
        "cena": 8.99,
        "opis": "Lepršava suknja za elegantan izgled.",
        "dodatanOpis": "Ova lepršava suknja će vam pružiti ženstven i elegantan izgled, uz udobnost koju ćete ceniti."
      },
      {
        "id": 19,
        "ime": "Tajice za trening",
        "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
        "cena": 14.99,
        "opis": "Udobne i moderne tajice za trening.",
        "dodatanOpis": "Ove udobne i moderne tajice su savršen izbor za vaše treninge, pružajući vam slobodu kretanja i podršku tokom vežbanja."
      },
      {
        "id": 20,
        "ime": "Futrola za mobilni telefon",
        "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
        "cena": 21.99,
        "opis": "Trendi futrola za mobilni telefon.",
        "dodatanOpis": "Ova trendi futrola je dizajnirana da zaštiti vaš mobilni telefon od ogrebotina, udaraca i pruži mu moderan izgled."
      },
      {
        "id": 21,
        "ime": "Sportska torba",
        "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
        "cena": 11.99,
        "opis": "Praktična sportska torba sa više pregrada.",
        "dodatanOpis": "Ova praktična sportska torba ima više pregrada i džepova za organizaciju i nošenje vaše sportske opreme, čineći je idealnom za vaše treninge."
      },
      {
        "id": 22,
        "ime": "Upaljačica",
        "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
        "cena": 16.99,
        "opis": "Kvalitetna upaljačica sa prelepim dezenom.",
        "dodatanOpis": "Ova kvalitetna upaljačica ima prelep dezen koji će privući pažnju, dok istovremeno pruža pouzdanu funkcionalnost."
      },
      {
        "id": 23,
        "ime": "Kaiš od veštačke kože",
        "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
        "cena": 9.99,
        "opis": "Stilski kaiš od veštačke kože.",
        "dodatanOpis": "Ovaj stilski kaiš je izrađen od visokokvalitetne veštačke kože, pružajući vam elegantan izgled uz održavanje etičkih vrednosti."
      },
      {
        "id": 24,
        "ime": "Parfem sa cvetnim mirisom",
        "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
        "cena": 27.99,
        "opis": "Luksuzni parfem sa cvetnim mirisom.",
        "dodatanOpis": "Ovaj luksuzni parfem kombinuje note cvetnih mirisa sa dubokim i senzualnim notama, stvarajući miris koji očarava i traje tokom čitavog dana."
      },
      {
        "id": 25,
        "ime": "Cipele sa visokom potpeticom za svečane trenutke",
        "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
        "cena": 15.99,
        "opis": "Elegantne cipele sa visokom potpeticom za svečane trenutke.",
        "dodatanOpis": "Ove elegantne cipele sa visokom potpeticom će vam pružiti samopouzdanje i stil tokom svečanih trenutaka, uz udobnost koju cijenite."
      },
      {
        "id": 26,
        "ime": "Sportski šorts",
        "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
        "cena": 12.99,
        "opis": "Sportski šorts za udobnost tokom treninga.",
        "dodatanOpis": "Ovi sportski šortsi su napravljeni od laganih i prozračnih materijala, pružajući vam udobnost i slobodu kretanja tokom vaših treninga."
      },
      {
        "id": 27,
        "ime": "Novčanik",
        "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
        "cena": 8.99,
        "opis": "Praktičan novčanik sa više pregrada.",
        "dodatanOpis": "Ovaj praktičan novčanik ima više pregrada za organizaciju vašeg novca, kartica i drugih sitnica, čineći ga savršenim za svakodnevnu upotrebu."
      },
      {
        "id": 28,
        "ime": "Sportske patike",
        "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
        "cena": 14.99,
        "opis": "Sportske patike za aktivnosti na otvorenom.",
        "dodatanOpis": "Ove sportske patike su dizajnirane za aktivnosti na otvorenom, pružajući vam udobnost, podršku i izdržljivost tokom vaših sportskih aktivnosti."
      },
      {
        "id": 29,
        "ime": "Lepršava suknja",
        "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
        "cena": 10.99,
        "opis": "Lepršava suknja za elegantan izgled.",
        "dodatanOpis": "Ova lepršava suknja će vam pružiti ženstven i elegantan izgled, uz udobnost koju ćete ceniti."
      },
      {
        "id": 30,
        "ime": "Ženska četkica za kosu",
        "slika": "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
        "cena": 19.99,
        "opis": "Kvalitetna ženska četkica za kosu.",
        "dodatanOpis": "Ova kvalitetna ženska četkica za kosu je dizajnirana da omogući jednostavno raščešljavanje i oblikovanje kose, ostavljajući je mekom i sjajnom."
      }
    ]

export default function Main (){
    const [data, setData] = useState(datas)
    const [showMore, setShowMore] = useState(false)

    // const handleShowMore = (e) => {
    //   if(showMore){
    //     setShowMore(false)
    //     return (
    //       <>
    //       <p>{e}</p>
    //       <button>Show Less</button>
    //       </>
    //     )
    //   }else{
    //     setShowMore(true)
    //     return (
    //       <>
    //       <button>Show More</button>
    //       </>
    //     )
    //   }
    // }

    return (
        <div className='main-container'>
        <div className='container'>
            {data.map((product) => (<div className='produkti' key={product.id}>
                <img src={product.slika} width='200px' height='200px' alt='slika proizvoda'></img>
                <h1>{product.ime}</h1>
                <h2>{product.cena}</h2>
                <p>{product.opis}</p>
                {/* <button onClick={() => handleShowMore(product.dodatanOpis)}>Show More</button> */}
                {showMore ? <div key={product.id}>{product.dodatanOpis}<button onClick={() => setShowMore(!showMore)}>Show Less</button></div> : <div><button onClick={() => setShowMore(!showMore)}>Show More</button></div>}
                </div>))}
        </div>
        </div>
    )
}