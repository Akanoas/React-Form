import {useState} from "react"
const [username, setUsername]= useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);

export default function SignUpForm() {
    
    async function handleSubmit(event) {
        try {
            event.preventDefault();
            console.log("Hello, ..)")
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <h2>Sign Up!</h2>;
        <form onSubmit={handleSubmit}>
            <label>
                Username : <input  value={username} onChange={(e)=> setUsername(e.target.value)} />
            </label>
            <label>
                password : <input value = {password} onChange={(e)=> setPassword(e.target.value)}/>
            </label>
            <button>submit</button>
        </form>

    )
  }