import { useNavigate } from "react-router-dom";

const DashBoard = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userData");
        navigate('/login')
    }

  return (
    <div style={{paddingTop:"100px", display:"flex", flexDirection:"column", gap:"40px", alignItems:"center" }}>DashBoard
        <button onClick={handleLogout} style={{padding:"15px", width:"fit-content", cursor:"pointer"}}>
            Logout
        </button>
    </div>
  )
}
export default DashBoard