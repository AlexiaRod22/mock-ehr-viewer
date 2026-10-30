function Login({login}){
    return(
        <div className="login-container">
            <h1>Ontario Health EHR Viewer</h1>
            <br/>
            <p>Please sign in to continue</p>
            <br/>
            <button 
            onClick = {login}>
                Sign in
            </button>

        </div>
    );
}

export default Login;