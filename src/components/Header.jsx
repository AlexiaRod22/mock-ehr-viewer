function Header({userName, logout, notifications, openMessages, hasUnreadNotifications}){
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
                

                <button
                    className = "notification-link"
                    onClick = {openMessages}
                >
                    <div className = "icon-circle">
                        {notifications >0 && hasUnreadNotifications &&(
                            <span className = "notification-badge">
                                {notifications}
                            </span>
                        )}
                    
                        <i className = "fa-light fa-bell"></i>
                    </div>
                    

                </button>


                <details className = "user-menu">
                    <summary>
                        <i className="fa-light fa-user"></i>
                        {' '}
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