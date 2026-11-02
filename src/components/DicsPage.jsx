import {useState, useEffect} from 'react';
import {getDicsStudies} from '../services/dicsService';
import {formatDate} from '../utils/dateUtils';

function DicsPage({patient}){
    const [studies,setStudies] = useState([]);

    useEffect(() => {
        async function loadStudies(){
            const results = await getDicsStudies(patient.fhirId);

            setStudies(results);
        }
        loadStudies();
    }, []);

    return(
        <div className="detail-page">
            <h2>DICS</h2>

            <p>
                {studies.length}{' '} Results
            </p>
            
            <p>
                Source: FHIR Imaging Study
            </p>


            {studies.map((study,index) => (
                <div
                    className="detail-card"
                    key={index}
                >
                    <strong>{study.imageTitle}</strong>

                    <p>
                        Modality:
                        {' '}
                        {study.modality}
                    </p>

                    <p>Study Date: {' '}{formatDate(study.studyDate)}</p>
                </div>
            ))}
        </div>

    );
}

export default DicsPage;