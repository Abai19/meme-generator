import React, { useState } from "react";
import {dataMemes}  from './../memesData.js'

function Meme() {
  let [stateVar, setStateVar] = React.useState(0);
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText:'',
    randomImage:'http://i.imgflip.com/1bij.jpg'
});

let [allMemeImages, setAllMemeImages]= React.useState(dataMemes);


  function plus() {
    setStateVar((oldVar) => oldVar + 1);
  }

  // function minus() {
  //   setStateVar((oldVar) => oldVar - 1);
  // }
  function getData(){
    const memesArray= allMemeImages.data.memes;
   const randomNumber= Math.floor(Math.random()* memesArray.length);
   const url= memesArray[randomNumber].url;
   setMeme(prevMeme =>({
     ...prevMeme,
        randomImage:url
   }));
  }
// function makeDecision(){
//     setDecision((val) => !val);
// }

  // fetchData();
  return (
    <div>
      <div className="container">
        {/* <div className="blockState">
          <button onClick={minus}>-</button>

          <span> {stateVar}</span>
          <button onClick={plus}>+</button>
        </div> */}
        <div className="blockState">
          <p>
        {stateVar}
          </p>

        </div>
        <div className="inputGroup">
          <input />
          <input />
        </div>
        <div className="btnBlock">
          <input type="button" value="Get a new meme image" className="btn" onClick={()=>{
            getData();
            plus();
          }
            } />
        </div>
        <div className="imgBlock">
         <img src={meme.randomImage} alt="" />
        </div>
     
      </div>
    </div>
  );
}
export default Meme;
