import {getOlisResults} from '../services/olisService';
function OlisTile({patient}){
    const labResults = getOlisResults(patient.hcn);
    return(
        <div className="tile">
            <h3>OLIS</h3>

            {labResults.map((result,index) => (
                <p key = {index}>
                    {result.test}: {result.value}
                </p>
            ))}
        </div>
    );
}

export default OlisTile;