import { Link } from "react-router-dom";
import { useState } from "react";
import { signup } from "../api/userApi";

function Signup() {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await signup(formData);

      alert(res.data.message);

    } catch (error) {

      alert(error.response.data.message);

    }
  };

  return (

<div className="auth-container">

    <div className="auth-card">

        <div className="auth-title">
            Join SocialSphere 🚀
        </div>

        <div className="auth-subtitle">
            Create your account
        </div>

        <form onSubmit={handleSubmit}>

            <input
                className="auth-input"
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
            />

            <input
                className="auth-input"
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
            />

            <input
                className="auth-input"
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
            />

            <button className="auth-btn">

                Create Account

            </button>

        </form>

        <div className="switch-text">

            Already have an account?

            <Link to="/login">

                <button className="switch-btn">

                    Login

                </button>

            </Link>

        </div>

    </div>

</div>

);
}

export default Signup;