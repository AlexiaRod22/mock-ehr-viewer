function Login({selectedRole,setSelectedRole,login}){
    return(
        <div>
            <h1>Ontario Health EHR Viewer</h1>

            <p>Please Sign in to continue.</p>

            <select
            value = {selectedRole}
            onChange = {(event) => setSelectedRole(event.target.value)
            }>
                <option
                value = "Clinician">
                    Clinician
                </option>

                <option
                value = "Student">
                    Student
                </option>
            </select>

            <br />
            <br />


            <button 
            onClick = {login}>
            Sign in
            </button>

        </div>
    );
}

export default Login;