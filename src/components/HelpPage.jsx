import {useState} from 'react';

function HelpPage(){
    const [openSection,setOpenSection] = useState('');

    return(

        <div className = "details-page">

            <h2> Help </h2>

            <div className = "help-section">
                <button
                className = "help-button"
                onClick = {() => setOpenSection(openSection === 'search'?'':'search')}
                >
                    Patient Search
                </button>

                {openSection === 'search' && (
                    <div className="help-content">
                        Search for a patient by using a Health Card Number identifier. Put that identifier in the search box and click 'Retrieve Patient' to get information on the patient.
                    </div>
                )}
            </div>

            <div className = "help-section">
                <button
                className = "help-button"
                onClick = {() => setOpenSection(openSection === 'pcr'?'':'pcr')}
                >
                    PCR
                </button>

                {openSection === 'pcr' && (
                    <div className="help-content">
                        PCR is the Patient Client Registry that contains patient demographic information
                    </div>
                )}
            </div>
                
            <div className="help-section">
                <button
                    className="help-button"
                    onClick={() =>setOpenSection( openSection === 'olis'? '': 'olis')}
                >
                    OLIS
                </button>

                {openSection === 'olis' && (
                    <div className="help-content">
                        OLIS contains laboratory and observation data.
                    </div>
                )}

            </div>

            <div className="help-section">
                <button
                    className="help-button"
                    onClick={() => setOpenSection(openSection === 'dics'? '': 'dics')}
                >
                    DICS
                </button>

                {openSection === 'dics' && (
                    <div className="help-content">
                        DICS contains imaging study information.
                    </div>
                )}
            </div>
        </div>
    );

}

export default HelpPage;