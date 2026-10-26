import {getDicsStudies} from '../services/dicsService';
function DicsTile(){
    const studies = getDicsStudies();

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