import {useState} from 'react';

function HelpPage(){
    const [openSections,setOpenSections] = useState([]);

    function toggleSection(section){
        if(openSections.includes(section)){
            setOpenSections(openSections.filter(item => item !==section));
        }else{
            setOpenSections([...openSections, section]);
        }
    }

    return(

        <div className = "details-page">

            <h2> Help </h2>

            <div className = "help-section">
                <button
                className = {openSections.includes('search')?"help-button active":"help-button"}
                onClick = {() => toggleSection('search')}
                >
                    Patient Search
                </button>

                {openSections.includes('search') && (
                    <div className="help-content">
                        Search for a patient by using a Health Card Number identifier. Put that identifier in the search box and click 'Retrieve Patient' to get information on the patient.
                    </div>
                )}
            </div>

            <div className = "help-section">
                <button
                className = {openSections.includes('pcr')?"help-button active":"help-button"}
                onClick = {() => toggleSection('pcr')}
                >
                    PCR
                </button>

                {openSections.includes('pcr') && (
                    <div className="help-content">
                        PCR is the Patient Client Registry that contains patient demographic information
                    </div>
                )}
            </div>
                
            <div className="help-section">
                <button
                    className={openSections.includes('olis')?"help-button active":"help-button"}
                    onClick={() => toggleSection('olis')}
                >
                    OLIS
                </button>

                {openSections.includes('olis') && (
                    <div className="help-content">
                        OLIS contains laboratory and observation data.
                    </div>
                )}

            </div>

            <div className="help-section">
                <button
                    className= {openSections.includes('dics')?"help-button active":"help-button"}
                    onClick={() => toggleSection('dics')}
                >
                    DICS
                </button>

                {openSections.includes('dics') && (
                    <div className="help-content">
                        DICS contains imaging study information.
                    </div>
                )}
            </div>
        </div>
    );

}

export default HelpPage;