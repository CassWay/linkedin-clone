import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [profilePic, setProfilePic] = useState("");
	const dispatch = useDispatch();

	const loginToApp = (e) => {
		e.preventDefault();
	};
	const register = () => {
		if (!name) {
			return alert("Please enter your Full Name");
		}

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((userAuth) => {
				userAuth.user
					.updateProfile({
						displayName: name,
						photoURL: profilePic,
					})
					.then(() => {
						dispatch(
							login({
								email: userAuth.user.email,
								uid: userAuth.user.uid,
								displayName: name,
								photoUrl: profilePic,
							})
						);
					});
			})
			.catch((error) => alert(error));
	};

	return (
		<div className="login">
			<img
				src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png"
				alt=""
			/>

			<form>
				<input
					value={name}
					onChange={(e) => setName(e.target.value.value)}
					placeholder="Full Name (required if registering)"
					type="text"
				/>
				<input
					value={profilePic}
					onChange={(e) => setProfilePic(e.target.value.value)}
					placeholder="profile pic URL (optional)"
					type="text"
				/>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value.value)}
					placeholder="email"
					type="email"
				/>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value.value)}
					placeholder="password"
					type="password"
				/>
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
