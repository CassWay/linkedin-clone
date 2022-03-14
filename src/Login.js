import React from "react";
import "./Login.css";

function Login() {
	const loginToApp = () => {};
	const register = () => {};

	return (
		<div className="login">
			<img
				src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png"
				alt=""
			/>

			<form>
				<input placeholder="Full Name (required if registering)" type="text" />
				<input placeholder="profile pic URL (optional)" type="text" />
				<input placeholder="email" type="email" />
				<input placeholder="password" type="password" />
				<button type="submit" onClick={loginToApp}>
					Sign in
				</button>
			</form>
			<p>
				Not a member? {""}
				<span className="login__register" onClick={register}>
					Register Now
				</span>
			</p>
		</div>
	);
}

export default Login;
