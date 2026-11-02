import {formatDate} from '../utils/dateUtils';

function PcrTile({patient}){
    return(
        <div className = "tile">
            <h3>PCR</h3>

            <p>
                Source: FHIR Patient
            </p>
            <p>Name:  {patient.name}</p>
            <p>FHIR ID: {patient.fhirId}</p>
            <p>DOB: {formatDate(patient.dob)}</p>
            <p>Gender: {patient.gender}</p>

        </div>
    );
}

export default PcrTile;