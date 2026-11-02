function Sidebar({currentPage, setCurrentPage}){
    return(
        <div className = "sidebar">
            <button 
            className = {currentPage==='dashboard'? 'sidebar-item active':'sidebar-item'}
            onClick = {()=>setCurrentPage('dashboard')}>
                🏠 Dashboard
            </button>

            <button 
            className = {currentPage==='pcr'? 'sidebar-item active':'sidebar-item'}
            onClick = {()=>setCurrentPage('pcr')}>
                🧬 PCR
            </button>

            <button 
            className = {currentPage==='olis'? 'sidebar-item active':'sidebar-item'}
            onClick = {()=>setCurrentPage('olis')}>
                🧪 OLIS
            </button>

            <button 
            className = {currentPage==='dics'? 'sidebar-item active':'sidebar-item'}
            onClick = {()=>setCurrentPage('dics')}>
                🖼 DICS
            </button>

            <button 
            className = {currentPage==='messages'? 'sidebar-item active':'sidebar-item'}
            onClick = {()=>setCurrentPage('messages')}>
                🔔 Messages
            </button>

            <button 
            className = {currentPage==='help'? 'sidebar-item active':'sidebar-item'}
            onClick = {()=>setCurrentPage('help')}>
                ❓ Help
            </button>
        </div>

    );
}

export default Sidebar;