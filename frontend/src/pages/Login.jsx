
import { Link } from "react-router-dom";
import { useState } from "react";
import { login } from "../api/userApi";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";


function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

      const res = await login(formData);

      console.log(res.data);

      alert(res.data.message);

      localStorage.setItem("username", res.data.username);

      navigate("/home");;
    }

    catch (error) {

      alert(error.response.data.message);

    }

  };

  return (

<div className="auth-container">

    <div className="auth-card">

        <div className="auth-title">
            Welcome Back 👋
        </div>

        <div className="auth-subtitle">
            Login to continue
        </div>

        <form onSubmit={handleSubmit}>

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
                Login
            </button>

        </form>

        <div className="switch-text">

            Don't have an account?

            <Link to="/signup">

                <button className="switch-btn">

                    Sign Up

                </button>

            </Link>

        </div>

    </div>

</div>

);
}

export default Login;