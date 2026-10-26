function OlisTile(){
    const labResults = [
        {
            test: 'Hemoglobin',
            value: '13.7'
        },
        {
            test: 'Glucose',
            value: '5.4'
        },
        {
            test: 'AIC',
            value: '5.8'
        }
    ];
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