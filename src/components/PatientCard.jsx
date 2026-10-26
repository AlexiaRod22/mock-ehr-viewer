function PatientCard({patient}) {
    return(
        <div className = "patient-card">
            <h2>Patient Information</h2>

            <p>Name:  {patient.name}</p>
            <p>HCN: {patient.hcn}</p>
            <p>DOB: {patient.dob}</p>
            <p>Gender: {patient.gender}</p>
        </div>
    );
}

export default PatientCard;