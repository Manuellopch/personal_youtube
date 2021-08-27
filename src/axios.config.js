import axios from "axios";

const instance = axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		key: "AIzaSyABRIxZY58tN-L0Y0cn79vSwiiFkhdbYII",
		part: "snippet",
		type: "video"
	}
});

export default instance;

