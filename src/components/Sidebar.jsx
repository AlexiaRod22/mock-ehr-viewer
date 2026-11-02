function Sidebar({currentPage, setCurrentPage}){
    return(
        <ul className = "nav oh-sidebar">
            <li className={currentPage === 'dashboard'? 'nav-item active': 'nav-item'}>
                <a
                    href="#"
                    className= 'nav-link'
                    onClick={(event) => {event.preventDefault(); setCurrentPage('dashboard');}}
                >
                    🏠 Dashboard
                </a>
            </li>

            <li className={currentPage === 'pcr'? 'nav-item active': 'nav-item'}>
                <a
                    href="#"
                    className='nav-link'
                    onClick={(event) => {event.preventDefault(); setCurrentPage('pcr');}}
                >
                    🧬 PCR
                </a>
            </li>

            <li className={currentPage === 'olis'? 'nav-item active': 'nav-item'}>
                <a
                    href="#"
                    className='nav-link'
                    onClick={(event) => {event.preventDefault(); setCurrentPage('olis');}}
                >
                    🧪 OLIS
                </a>
            </li>

            <li className={currentPage === 'dics'? 'nav-item active': 'nav-item'}>
                <a
                    href="#"
                    className='nav-link'
                    onClick={(event) => {event.preventDefault(); setCurrentPage('dics');}}
                >
                    🖼 DICS
                </a>
            </li>

            <li className={currentPage === 'messages'? 'nav-item active': 'nav-item'}>
                <a
                    href="#"
                    className='nav-link'
                    onClick={(event) => {event.preventDefault(); setCurrentPage('messages');}}
                >
                    🔔 Messages
                </a>
            </li>

            <li className={currentPage === 'help'? 'nav-item active': 'nav-item'}>
                <a
                    href="#"
                    className='nav-link'
                    onClick={(event) => {event.preventDefault(); setCurrentPage('help');}}
                >
                    ❓ Help
                </a>
            </li>
        </ul>

    );
}

export default Sidebar;
