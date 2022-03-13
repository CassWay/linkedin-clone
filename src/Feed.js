import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { db } from "./firebase";
import "./Feed.css";

import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";

import InputOption from "./InputOption";
import Post from "./Post";

function Feed() {
	const [input, setInput] = useState("");
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		db.collection("posts").onSnapshot((snapshot) =>
			setPosts(snapshot.docs).map((doc) => ({
				id: doc.id,
				data: doc.data(),
			}))
		);
	}, []);

	const sendPost = (e) => {
		e.preventDefault();

		db.collection("post").add({
			name: "Wayne",
			description: "this is a data test",
			message: input,
			photoUrl: "",
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
	};

	return (
		<div className="feed">
			<div className="feed__inputContainer">
				<div className="feed__input">
					<CreateIcon />
					<form>
						<input
							value={input}
							onChange={(e) => setInput(e.target.value)}
							type="text"
						/>
						<button onClick={sendPost} type="submit">
							Send
						</button>
					</form>
				</div>
				<div className="feed__inputOptions">
					<InputOption Icon={ImageIcon} title="Photo" color="#4DA6FF" />
					<InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />
					<InputOption Icon={EventNoteIcon} title="Event" color="#eded00" />
					<InputOption
						Icon={CalendarViewDayIcon}
						title="Write Article"
						color="#7fc15e"
					/>
				</div>
			</div>
			{/* Posts */}
			{posts.map(({ id, data: { name, description, message, photoUrl } }) => (
				<Post
					key={id}
					name={name}
					description={description}
					message={message}
					photoUrl={photoUrl}
				/>
			))}
		</div>
	);
}

export default Feed;
