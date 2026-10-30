import {formatDate} from '../utils/dateUtils';
function PatientCard({patient}) {
    return(
        <div className = "patient-card">
            <h2>Current Patient</h2>

            <div className="patient-details">
                <div>
                    <strong>Name</strong>
                    <p>{patient.name}</p>
                </div>

                <div>
                    <strong>FHIR ID</strong>
                    <p>{patient.fhirId}</p>
                </div>

                <div>
                    <strong>Date of Birth</strong>
                    <p>{formatDate(patient.dob)}</p>
                </div>

                <div>
                    <strong>Gender</strong>
                    <p>{patient.gender}</p>
                </div>
            </div>
        </div>
    );
}

export default PatientCard;