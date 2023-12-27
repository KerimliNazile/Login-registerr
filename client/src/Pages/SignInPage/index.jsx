import React, { useState } from "react";
import "./index.scss";
import axios from "axios";

const SignIn = () => {
    const [newUsername, setNewUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");

    async function userRegister(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/register", {
                userName: newUsername,
                password: newPassword,
            });
            console.log(response.data);
            console.log("fgsdjak");
            setNewUsername("");
            setNewPassword("");
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="page2">
            <form  onSubmit={userRegister}>
                <input
                    type="text"
                    placeholder="username..."
                    value={newUsername} onChange={(e) => setNewUsername(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="password..."
                    value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
                />
                <button >Register</button>
            </form>
        </div>
    );
};

export default SignIn;