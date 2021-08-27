import React, { useState, useEffect } from "react";
import axios from "./axios.config";

const VideoList = (video, select) => {
	const [ Lista, setLista ] = useState([]);

	useEffect(() => {
		(async () => {const result = await axios.get("/search", {params: {q: video}})
			setLista(result.data.items)})();
	}, [video]);

	return(
		<div className="section">
			{
				Lista &&
				Lista.map(video => {
					return(
						<div
							key={video.id.videoId}
							onClick={() => select(video)}
							className="content"
						>
							<img className="video" src={video.snippet.thumbnails.high.url} alt={video.snippet.title}/>
							<div className="text">
								<p className="tittle">{video.snippet.title}</p>
								<p className="chanel">{video.snippet.channelTitle}</p>
							</div>
						</div>
					)
				})
			}
		</div>
	)
}

export default VideoList;


