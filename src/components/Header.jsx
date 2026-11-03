function Header({userName, logout, notifications, openMessages, hasUnreadNotifications}){
    return(
        <header className = "oh-header">
                <div className = "header-left">
                    <a className = "navbar-brand"> Ontario Health </a>
                    <a className = "app-title" > EMR Viewer </a>
                </div>

                <ul className="nav">
                    <li className="nav-item">        
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
                    </li>

                    <li className="nav-item dropdown">    
                        <details>
                            <summary className="nav-link dropdown-toggle">
                                <i className="fa-light fa-user"></i>
                                <span className= "link-label">{userName}</span>
                            </summary>
                            
                            <ul className="oh-menu-list dropdown-text text-body dropdown-menu-end dropdown-menu show">
                                <li>
                                    <button
                                        className = "dropdown-item"
                                        onClick={logout}
                                    >
                                        <i className="fa-light fa-right-from-bracket"></i>
                                        {' '}
                                        Sign out

                                    </button>
                                </li>    
                            </ul>                                
                        </details>     
                    </li>         
                </ul> 
        </header>
    );
}

export default Header;