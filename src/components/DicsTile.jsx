import {useState, useEffect} from 'react';
import {getDicsStudies} from '../services/dicsService';

function DicsTile({patient}){
    const [studies,setStudies] = useState([]);

    useEffect(() => {
        async function loadStudies(){
            const results = await getDicsStudies();

            setStudies(results);
        }
        loadStudies();
    }, []);

    return(
        <div className="tile">
            <h3>DICS</h3>

            {studies.map((study,index) => (
                <p key = {index}>
                    {study.modality}
                    {' - '}
                    {study.imageTitle}
                    {' '} 
                    ({study.studyDate})
                </p>
            ))}
        </div>

    );
}

export default DicsTile;