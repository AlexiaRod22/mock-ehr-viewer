import {formatDate} from '../utils/dateUtils';
function PatientCard({patient}) {
    return(
        <div className = "patient-card">
            <h2>Current Patient</h2>

            <p>Name:  {patient.name}</p>
            <p>FHIR ID: {patient.fhirId}</p>
            <p>HCN: </p>
            <p>DOB: {formatDate(patient.dob)}</p>
            <p>Gender: {patient.gender}</p>
        </div>
    );
}

export default PatientCard;