function Header({userName, logout}){
    return(
        <div className = "app-header">
            <div className = "header-left">
                <div className = "app-brand">
                    Ontario Health
                </div>

                <div className = "app-title">
                    EMR Viewer
                </div>

            </div>

            <div className = "header-right">
                <details className = "user-menu">
                    <summary>
                        {userName}
                    </summary>
                    <div className = "user-dropdown">
                        <button onClick = {logout}>
                            Sign out
                        </button>
                    </div>
                </details>

            </div>

        </div>
    );
}

export default Header;