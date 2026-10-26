import olisData from '../mockData/olisData';
function OlisTile(){
    const labResults = olisData;
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