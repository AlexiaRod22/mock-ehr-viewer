function Sidebar({currentPage, setCurrentPage}){
    return(
        <div className = "sidebar">
            <button onClick = {()=>setCurrentPage('dashboard')}>
                🏠 Dashboard
            </button>

            <button onClick = {()=>setCurrentPage('pcr')}>
                🧬 PCR
            </button>

            <button onClick = {()=>setCurrentPage('olis')}>
                🧪 OLIS
            </button>

            <button onClick = {()=>setCurrentPage('dics')}>
                🖼 DICS
            </button>

            <button onClick = {()=>setCurrentPage('messages')}>
                🔔 Messages
            </button>

            <button onClick = {()=>setCurrentPage('help')}>
                ❓ Help
            </button>
        </div>

    );
}

export default Sidebar;