import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
	const recentItem = (topic) => (
		<div className="sidebar__recentItem">
			<span className="sidebar__hash">#</span>
			<p>{topic} </p>
		</div>
	);

	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<img
					src="https://images.unsplash.com/photo-1643135163906-ff2dd0017e6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
					alt=""
				/>
				<Avatar className="sidebar__avatar" />
				<h2>Wayne Cassity</h2>
				<h4>wayne@wc.com</h4>
			</div>
			<div className="sidebar__stats">
				<div className="sidebar__stat">
					<p>Who viewed You</p>
					<p className="sidebar__statNumber">2,348</p>
				</div>
				<div className="sidebar__stat">
					<p>Views on Posts</p>
					<p className="sidebar__statNumber">2,348</p>
				</div>
			</div>
			<div className="sidebar__bottom">
				<p>Recent</p>
				{recentItem("react js")}
				{recentItem("programming")}
				{recentItem("softwareengineering")}
				{recentItem("design")}
				{recentItem("developer")}
			</div>
		</div>
	);
}

export default Sidebar;
