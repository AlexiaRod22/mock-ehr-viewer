function formatDate(dateString){
    return new Date(dateString).toLocaleDateString('en-CA',
        {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }
    );
}

export {formatDate};