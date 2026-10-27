import PcrTile from './PcrTile';
import OlisTile from './OlisTile';
import DicsTile from './DicsTile';

function Dashboard({patient}){
    return(
        <>
        <h2 className = "dashboardTitle">Dashboard</h2>

        <div className="dashboard">

            <PcrTile patient = {patient} />

            <OlisTile patient = {patient}/>

            <DicsTile patient = {patient}/>
        </div>
        </>
    );
}

export default Dashboard;