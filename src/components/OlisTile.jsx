import {useState, useEffect} from 'react';
import {getOlisResults} from '../services/olisService';
import {formatDate} from '../utils/dateUtils';

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

            <p>
                {labResults.length}{' '} Results
            </p>

            <p>
                Source: FHIR Observations
            </p>

            {labResults.map((result,index) => (
                <div
                    className="result-card"
                    key={index}
                >
                    <strong>
                        {result.testName}
                    </strong>

                    <p>
                        {result.value}
                        {' '}
                        {result.unit}
                    </p>

                    <small>
                        {formatDate(result.date)}
                    </small>
                </div>
            ))}
        </div>
    );
}

export default OlisTile;