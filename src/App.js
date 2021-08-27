import './App.css';
import React, {useState} from "react";
import SelectedVideo from "./SelectedVideo";
import VideoList from "./VideoList";



function App() {
  const [video, setVideo] = useState("Batman");
  const [selectedVideo, setSelectedVideo ] = useState(null);

  return (
   <>
   <div className="form">
    <form className="border">
      <label className="text">
        Search a Video
      <input className="search" value={video}  onChange={(e) => setVideo(e.target.value)} />
      </label>
      {
        !selectedVideo ?
          <VideoList list={video} select={setSelectedVideo} />
          :
          <SelectedVideo video={selectedVideo} select={setSelectedVideo} />
      }
    </form>
   </div>
   </>
  );
}

export default App;
