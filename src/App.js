
import { useState } from 'react'
import MusicPlayer from './MusicPlayer'

function App() {
  const play = true;

  
  const [songs,setSong] = useState([
    {
      id:1,
      name: 'Asli Independent',
      artist: 'Fotty Seven',
      albumUrl : 'https://c.saavncdn.com/117/Asli-Independent-Hindi-2020-20210113092017-500x500.jpg'
    },
  ])
  
  return (
    <div className="App">
      <MusicPlayer songs = {songs} />
     
    </div>
  );
}

export default App;
