import {useState, useEffect} from 'react';
import {getDicsStudies} from '../services/dicsService';
import {formatDate} from '../utils/dateUtils';

function DicsTile({patient}){
    const [studies,setStudies] = useState([]);

    useEffect(() => {
        async function loadStudies(){
            const results = await getDicsStudies(patient.fhirId);

            setStudies(results);
        }
        loadStudies();
    }, []);

    return(
        <div className="tile">
            <h3>DICS</h3>

            <p>
                {studies.length}{' '} Results
            </p>
            
            <p>
                Source: FHIR Imaging Study
            </p>


            {studies.map((study,index) => (
                <div
                    className="result-card"
                    key={index}
                >
                    <strong>
                        {study.imageTitle}
                    </strong>

                    <p>
                        Modality:
                        {' '}
                        {study.modality}
                    </p>

                    <small>
                        {formatDate(study.studyDate)}
                    </small>
                </div>
            ))}
        </div>

    );
}

export default DicsTile;