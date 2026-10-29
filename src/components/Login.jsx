function Login({login}){
    return(
        <div>
            <h1>Ontario Health EHR Viewer</h1>

            <p>Please sign in to continue</p>

            <button 
            onClick = {login}>
                Sign in
            </button>

        </div>
    );
}

export default Login;