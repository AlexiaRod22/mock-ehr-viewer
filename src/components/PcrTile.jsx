function PcrTile({patient}){
    return(
        <div className = "tile">
            <h3>PCR</h3>

            <p>Name:  {patient.name}</p>
            <p>HCN: {patient.hcn}</p>
            <p>DOB: {patient.dob}</p>
            <p>Gender: {patient.gender}</p>

        </div>
    );
}

export default PcrTile;