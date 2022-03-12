import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Header() {
	return (
		<div className="header">
			<h1>This is the Header</h1>

			<div className="header__left">
				<div className="logo">
					<LinkedInIcon fontSize="large" color="primary" />
				</div>

				<div className="header__search">
					<SearchIcon />
					<input type="text" />
				</div>
			</div>

			<div className="header__right"></div>
		</div>
	);
}

export default Header;
