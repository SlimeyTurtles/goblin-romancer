'use client'

import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Data from "./data";

import {useState} from 'react';

export default function Home() {
  const [goblinArray, setGoblinArray] = useState(Data);

  const cardArray = goblinArray.map(object => (<Card key={object.id} item={object} buttonHandler={handleGoblinArray} />))

  function handleGoblinArray(id, incrementAmount) {
    setGoblinArray(prevArr => {

      const newArr = [...prevArr];

      var newLikes = prevArr[id]["likes"] + incrementAmount;

      newArr[id] = {
        ...newArr[id],
        likes: newLikes
      }

      return newArr
    })
  }

  return (
    <main>
      <Navbar />
      <section className="cards">
        {cardArray}
      </section>
    </main>
  )
}
