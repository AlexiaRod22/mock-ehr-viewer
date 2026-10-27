import PcrTile from './PcrTile';
import OlisTile from './OlisTile';
import DicsTile from './DicsTile';

function Dashboard({patient,user}){
    return(
        <>
        <h2 className = "dashboardTitle">Dashboard</h2>

        <div className="dashboard">

            <PcrTile patient = {patient} />

            {user.role === 'Clinician' &&(
                <OlisTile patient = {patient}/>
            )}
                
            {user.role === 'Clinician' &&(
                <DicsTile patient = {patient}/>
            )}
        </div>
        </>
    );
}

export default Dashboard;