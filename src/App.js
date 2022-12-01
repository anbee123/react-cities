// IMPORT useState
import {useState} from 'react';
import './styles.css';
import imagesArr from './imageData.js'
// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr

export default function App() {
  const [bigImage, setBigImage] = useState(imagesArr[0].img);
  // USE useState TO CREATE  [bigImage, setBigImage] 
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY
const handleClick = (imgURL)=>{
  setBigImage(imgURL);
}
  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL

  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL
  const images = imagesArr.map((image, index) => {
    return (
      <img
        className={image.class}
        src={image.img}
        alt={image.alt}
        onClick={() => handleClick(image.img)}
        key={index}
      />
    );
  });
  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
          {/* RENDER THE IMAGES ARRAY  */}
          <div id="thumbnails">{images}</div>
        </div>
        {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}
         <img src="" id="bigimage" alt='bigImage'/> 
      </div>
    </div>
  );
}
