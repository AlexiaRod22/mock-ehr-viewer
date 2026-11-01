function PcrPage({patient}){
    return(
        <div>
            <h2>PCR</h2>

            <p>Name: {' '}{patient?.name}</p>
            <p>FHIR ID: {' '}{patient?.fhirId}</p>
            <p>DOB: {' '}{patient?.dob}</p>
            <p>Gender: {' '}{patient?.gender}</p>
        </div>
    );
}

export default PcrPage;