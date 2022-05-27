import {auth, signInWithGoogle } from "./firebase"

function Login(){
    const loginaction=()=>{
        console.log("logging!!!");
        signInWithGoogle();
    }
    return(<button onClick={loginaction}>Login</button>)
}

export default Login