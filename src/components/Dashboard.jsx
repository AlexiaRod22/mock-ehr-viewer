import PcrTile from './PcrTile';
import OlisTile from './OlisTile';
import DicsTile from './DicsTile';

function Dashboard({patient}){
    return(
        <>
        <h2 className = "dashboard-title">Dashboard</h2>

        <div className="dashboard">

            <div className="dashboard-pcr">
                <PcrTile patient={patient} />
            </div>

            <div className="dashboard-olis">
                <OlisTile patient={patient}/>
            </div>

            <div className="dashboard-dics">
                <DicsTile patient={patient}/>
            </div>
            
        </div>
        </>
    );
}

export default Dashboard;