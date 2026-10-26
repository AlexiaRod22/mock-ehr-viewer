function DicsTile(){
    const studies = [
        {
            study: 'Chest X-Ray',
            date: '2026-01-01'
        },
        {
            study:'MRI Brain',
            date: '2026-03-15'
        },
        {
            study:'CT Abdomen',
            date: '2026-05-22'
        }
    ];

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