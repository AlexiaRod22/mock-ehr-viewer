import OlisTile from './OlisTile';
import DicsTile from './DicsTile';

function Dashboard({patient}){
    return(
        <div>
            <h2>Dashboard</h2>

            <div>
                <h3>PCR</h3>

                <p>Name:  {patient.name}</p>
                <p>HCN: {patient.hcn}</p>
                <p>DOB: {patient.dob}</p>
                <p>Gender: {patient.gender}</p>
            </div>

            <div>
                <OlisTile/>
            </div>

            <div>
                <DicsTile/>
            </div>
        </div>
    );
}

export default Dashboard;