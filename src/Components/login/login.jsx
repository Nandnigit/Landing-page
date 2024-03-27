import { useState } from "react"
import { IoEye, IoEyeOff } from "react-icons/io5"
import { Link, useNavigate } from 'react-router-dom'
import { apiConnector } from "../../services/apiconnector"
import Login_Img from './login-img.png'
import './login.css'
import Logo from './logobg.png'


const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
      })
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();

    const { email, password } = formData
    
    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }

    const login = async(email, password) => {
        try {
            const response = await apiConnector("POST", 'http://localhost:3000/api/auth/login', {
                email,
                password,
              })

            console.log("LOGIN API RESPONSE............", response)

            if (!response.data.success) {
                throw new Error(response.data.message)
            }

            localStorage.setItem("token", JSON.stringify(response.data.token))
            localStorage.setItem("userData", JSON.stringify(response.data.userData))
            navigate("/dashboard")

        } catch (error) {
            console.log("LOGIN API ERROR............", error)
        }
    }
    
    const handleOnSubmit = (e) => {
        e.preventDefault()
        login(email, password);
        
    }
  return (
    <div className='login-div'>
        <div className="login-left">
            <div className="login-left-main">
                <Link to='/'>
                    <img src={Logo} alt='logo' width='250px' height="150px" className='logo' />
                </Link>

                <form className='login-form' onSubmit={handleOnSubmit}>
                    <h4>Sign In</h4>

                    <p className="create-account">Need a Ten Marketing account? <Link to='/register' style={{color: 'rgb(0, 41, 255)', textDecoration:"none"}}>Create one</Link></p>

                    {/* input form  */}

                    <label className="form-label">
                        <p className="label-name">
                        Email Address
                        </p>
                        <input
                        required
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleOnChange}
                        // placeholder="Enter email address"
                        className="form-input-field"
                        />
                    </label>
                    <label className="form-label-2">
                        <p className="label-name">
                        Password
                        </p>
                        <input
                        required
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={password}
                        onChange={handleOnChange}
                        // placeholder="Enter Password"
                        
                        className="form-input-field"
                        />
                        <span
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="form-label-2-span"
                        >
                        {showPassword ? (
                            <IoEyeOff fontSize={24} fill="#ffffff" />
                        ) : (
                            <IoEye fontSize={24} fill="#ffffff" />
                        )}
                        </span>
                        <Link to="/forgot-password" className="forgot-link">
                        <p>
                            Forgot Password?
                        </p>
                        </Link>
                    </label>
                    <button type="submit"
                        className="form-button"
                    > SIGN IN </button>

                </form>

                <p className='terms'>These are our <a href='#'>Terms and Conditions.</a></p>
            </div>
        </div>

        <div className="login-right">
            <img src={Login_Img} alt="login-img" className="login-img"/>
        </div>
    </div>
  )
}
export default Login