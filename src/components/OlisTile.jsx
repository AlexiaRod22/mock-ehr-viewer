import {useState, useEffect} from 'react';
import {getOlisResults} from '../services/olisService';

function OlisTile({patient}){
    const [labResults, setLabResults] = useState([]);

    useEffect(() => {
        async function loadResults(){
            const results = await getOlisResults(patient.fhirId);
            setLabResults(results);
        }

        loadResults();
    }, [])

    return(
        <div className="tile">
            <h3>OLIS</h3>

            {labResults.map((result,index) => (
                <p key = {index}>
                    {result.testName}: {result.value}
                    {' '}
                    {result.unit}
                    {' '}
                    ({result.date})
                </p>
            ))}
        </div>
    );
}

export default OlisTile;