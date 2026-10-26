import OlisTile from './OlisTile';
import DicsTile from './DicsTile';

function Dashboard({patient}){
    return(
        <>
        <h2 className = "dashboardTitle">Dashboard</h2>

        <div className="dashboard">

            <div className="tile">
                <h3>PCR</h3>

                <p>Name:  {patient.name}</p>
                <p>HCN: {patient.hcn}</p>
                <p>DOB: {patient.dob}</p>
                <p>Gender: {patient.gender}</p>
            </div>

            <div>
                <OlisTile patient = {patient}/>
            </div>

            <div>
                <DicsTile patient = {patient}/>
            </div>
        </div>
        </>
    );
}

export default Dashboard;