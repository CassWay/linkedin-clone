import React from "react";
import "./Feed.css";

import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";

import InputOption from "./InputOption";
import Post from "./Post";

function Feed() {
	return (
		<div className="feed">
			<div className="feed__inputContainer">
				<div className="feed__input">
					<CreateIcon />
					<form>
						<input type="text" />
						<button type="submit">Send</button>
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
			<Post
				name="Wayne"
				description="test post"
				message="This is a Test Post"
			/>
		</div>
	);
}

export default Feed;
