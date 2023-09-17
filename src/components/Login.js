import Header from "./Header";

export default function Login(params) {
    return(
        <div>
            <h1>Login</h1>
            <form className="login">
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <button>Login</button>
            </form>
        </div>
    )
};