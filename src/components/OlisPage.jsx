import {useState, useEffect} from 'react';
import {getOlisResults} from '../services/olisService';
import {formatDate} from '../utils/dateUtils';

function OlisPage({patient}){
    const [labResults, setLabResults] = useState([]);

    useEffect(() => {
        async function loadResults(){
            const results = await getOlisResults(patient.fhirId);
            setLabResults(results);
        }

        loadResults();
    }, [])

    return(
        <div className="detail-page">
            <h2>OLIS</h2>

            <p>
                {labResults.length}{' '} Results
            </p>

            <p>
                Source: FHIR Observations
            </p>

            {labResults.map((result,index) => (
                <div
                    className="detail-card"
                    key={index}
                >
                    <strong>{result.testName}</strong>

                    <p>
                        {result.value}
                        {' '}
                        {result.unit}
                    </p>

                    <p>{formatDate(result.date)}</p>
                </div>
            ))}
        </div>
    );
}

export default OlisPage;