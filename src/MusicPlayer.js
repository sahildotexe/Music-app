import React from 'react';

import './MusicPlayer.css';
import {useState} from 'react';

const MusicPlayer = ({ songs }) => {
  
const [play,setPlay] = useState(true)

const togglePlay = () => {
    setPlay(!play);
}
    
    
    return (
      <div className="MusicPlayer">
       {songs.map((song) => (
           <div>
           <img src={song.albumUrl} className="albumart"></img>
           <h1 key= {song.id}>{song.name}</h1>
           <h5 key= {song.id}>{song.artist}</h5>
           <br></br><br></br><br/><br/>
           <div className="btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="36.675" height="39.622" viewBox="0 0 36.675 39.622" >
  <g id="Polygon_2" data-name="Polygon 2" transform="matrix(0.017, 1, -1, 0.017, 35.995, 0)" fill="#f3ebeb">
    <path d="M 38.1605224609375 35.5 L 0.8394758105278015 35.5 L 19.5 1.049801588058472 L 38.1605224609375 35.5 Z" stroke="none"/>
    <path d="M 19.5 2.099586486816406 L 1.678939819335938 35 L 37.32106018066406 35 L 19.5 2.099586486816406 M 19.5 0 L 39 36 L 0 36 L 19.5 0 Z" stroke="none" fill="#707070"/>
  </g>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="26" height="40" viewBox="0 0 26 40">
  <g id="Rectangle_3383" data-name="Rectangle 3383" fill="#fff" stroke="#707070" stroke-width="1">
    <rect width="10" height="40" stroke="none"/>
    <rect x="0.5" y="0.5" width="9" height="39" fill="none"/>
  </g>
  <g id="Rectangle_3384" data-name="Rectangle 3384" transform="translate(16)" fill="#fff" stroke="#707070" stroke-width="1">
    <rect width="10" height="40" stroke="none"/>
    <rect x="0.5" y="0.5" width="9" height="39" fill="none"/>
  </g>
</svg> 

           <button onClick={togglePlay} className="btn">{play ? ('Play'): 'Pause'}</button>
           </div>
           </div>
       ))}
      </div>

    )
}

export default MusicPlayer
