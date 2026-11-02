function MessagesPage({notifications}){

    return(
        <div className = "detail-page">
            <h2>
                Notifications
            </h2>


            {notifications.map((notifications) =>(
                <div 
                className = "card mb-3"
                key = {notifications.id}
                >
                    <div className = "card-body">
                        <h5 className="card-title">{notifications.title}</h5>

                        <p className = "card-text">
                            <strong>Patient:</strong>
                            {' '}
                            {notifications.patient}
                        </p>
                    </div>

                    <div className="card-footer text-body-secondary">
                        {notifications.date}
                    </div>
                        
                </div>
            ))}
        </div>
    );
}

export default MessagesPage;