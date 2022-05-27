import {auth, logout } from "./firebase"

function Login(){
    const logoutaction=()=>{
        console.log("logging!!!");
        logout();
    }
    return(<button onClick={logoutaction}>Logout</button>)
}

export default Login