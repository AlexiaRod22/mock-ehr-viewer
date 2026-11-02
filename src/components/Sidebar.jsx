function Sidebar({currentPage, setCurrentPage}){
    return(
        <ul className = "nav oh-sidebar">
            <li className={currentPage === 'dashboard'? 'nav-item active': 'nav-item'}>
                <a
                    href="#"
                    className= 'nav-link'
                    onClick={(event) => {event.preventDefault(); setCurrentPage('dashboard');}}
                >
                    <i className="fa-light fa-house-chimney"></i>
                    Dashboard
                </a>
            </li>

            <li className={currentPage === 'pcr'? 'nav-item active': 'nav-item'}>
                <a
                    href="#"
                    className='nav-link'
                    onClick={(event) => {event.preventDefault(); setCurrentPage('pcr');}}
                >
                    <i className="fa-light fa-clipboard-user"></i>
                    PCR
                </a>
            </li>

            <li className={currentPage === 'olis'? 'nav-item active': 'nav-item'}>
                <a
                    href="#"
                    className='nav-link'
                    onClick={(event) => {event.preventDefault(); setCurrentPage('olis');}}
                >
                    <i className="fa-light fa-flask-vial"></i>
                    OLIS
                </a>
            </li>

            <li className={currentPage === 'dics'? 'nav-item active': 'nav-item'}>
                <a
                    href="#"
                    className='nav-link'
                    onClick={(event) => {event.preventDefault(); setCurrentPage('dics');}}
                >
                    <i className="fa-regular fa-display-medical"></i>
                    DICS
                </a>
            </li>

            <li className={currentPage === 'messages'? 'nav-item active': 'nav-item'}>
                <a
                    href="#"
                    className='nav-link'
                    onClick={(event) => {event.preventDefault(); setCurrentPage('messages');}}
                >
                    <i className="fa-light fa-envelope"></i>
                    Messages
                </a>
            </li>

            <li className={currentPage === 'help'? 'nav-item active': 'nav-item'}>
                <a
                    href="#"
                    className='nav-link'
                    onClick={(event) => {event.preventDefault(); setCurrentPage('help');}}
                >
                    <i className="fa-light fa-circle-question"></i>
                    Help
                </a>
            </li>
        </ul>

    );
}

export default Sidebar;
