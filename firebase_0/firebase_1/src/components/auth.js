import {auth} from "../config/firebase"
import {createUserWithEmailAndPassword} from "firebase/auth"

function Auth() {





    return(
        <div>
            <input placeholder="Email">
            </input>
            <input placeholder="Password...">
            </input>





            <button>Sign Up</button>
        </div>
    )
}

export default Auth;