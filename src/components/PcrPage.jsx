import {formatDate} from '../utils/dateUtils';
function PcrPage({patient}){
    return(
        <div className = "detail-page">
            <h2>PCR</h2>

            <div className = "detail-card">
                <h3>Patient Information</h3>

                <div className = "detail-grid">
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
        </div>
    );
}

export default PcrPage;