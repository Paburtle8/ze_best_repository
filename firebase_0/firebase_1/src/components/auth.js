import {auth} from "../config/firebase"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import {useState} from "react";
function Auth() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");



    async function signUp() {
        try {
            createUserWithEmailAndPassword(auth, email, password)
        } catch(err) {
            console.log("error")
        }
    }
    async function signIn() {
        try {
            signInWithEmailAndPassword(auth, email, password)
            alert("You are signed in!!111!!!!!")
        } catch(err) {
            console.log("error")
        }
    }

    return(
        <div>
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)}>
            </input>
            <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}>
            </input>

            <button onClick={signUp}>Sign Up</button>
            <button onClick={signIn}>Sign In</button>
        </div>
    )
}

export default Auth;