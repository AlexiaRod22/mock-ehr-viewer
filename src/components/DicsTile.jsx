import {getDicsStudies} from '../services/dicsService';
function DicsTile({patient}){
    const studies = getDicsStudies(patient.hcn);

    return(
        <div className="tile">
            <h3>DICS</h3>

            {studies.map((study,index) => (
                <p key = {index}>
                    {study.study} ({study.date})
                </p>
            ))}
        </div>

    );
}

export default DicsTile;