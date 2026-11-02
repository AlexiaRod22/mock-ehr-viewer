function MessagesPage({notifications}){

    return(
        <div className = "detail-page">
            <h2>
                Notifications
            </h2>


            {notifications.map((notifications) =>(
                <div 
                className = "detail-card"
                key = {notifications.id}>
                    <h3>{notifications.title}</h3>

                    <strong>Patient</strong>
                    <p>{notifications.patient}</p>

                    <strong>Date</strong>
                    <p>{notifications.date}</p>
                </div>
            ))}
        </div>
    );
}

export default MessagesPage;