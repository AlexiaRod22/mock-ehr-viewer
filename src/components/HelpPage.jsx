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

            <div className = "accordion">
                <div className = "accordion-item">
                    <h2 className = "accordion-header">
                        <button
                            className = {openSections.includes('search')?'accordion-button':'accordion-button collapsed'}
                            onClick = {() => toggleSection('search')}
                            type = "button"
                        >
                            Patient Search
                        </button>
                    </h2>
                    
                    <div 
                        className={openSections.includes('search')? 'accordion-collapse collapse show': 'accordion-collapse collapse'}
                    >
                        <div className="accordion-body">
                            Search for a patient by using a Health Card Number identifier. Put that identifier in the search box and click 'Retrieve Patient' to get information on the patient.
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div className = "accordion">
                <div className = "accordion-item">
                    <h2 className = "accordion-header">
                        <button
                            className = {openSections.includes('pcr')?'accordion-button':'accordion-button collapsed'}
                            onClick = {() => toggleSection('pcr')}
                            type = "button"
                        >
                            PCR
                        </button>
                    </h2>
                    
                    <div 
                        className={openSections.includes('pcr')? 'accordion-collapse collapse show': 'accordion-collapse collapse'}
                    >
                        <div className="accordion-body">
                            PCR is the Patient Client Registry that contains patient demographic information
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div className = "accordion">
                <div className = "accordion-item">
                    <h2 className = "accordion-header">
                        <button
                            className = {openSections.includes('olis')?'accordion-button':'accordion-button collapsed'}
                            onClick = {() => toggleSection('olis')}
                            type = "button"
                        >
                            OLIS
                        </button>
                    </h2>
                    
                    <div 
                        className={openSections.includes('olis')? 'accordion-collapse collapse show': 'accordion-collapse collapse'}
                    >
                        <div className="accordion-body">
                            OLIS contains laboratory and observation data.
                        </div>
                    </div>
                </div>
            </div>

            <br/>
            <div className = "accordion">
                <div className = "accordion-item">
                    <h2 className = "accordion-header">
                        <button
                            className = {openSections.includes('dics')?'accordion-button':'accordion-button collapsed'}
                            onClick = {() => toggleSection('dics')}
                            type = "button"
                        >
                            DICS
                        </button>
                    </h2>
                    
                    <div 
                        className={openSections.includes('dics')? 'accordion-collapse collapse show': 'accordion-collapse collapse'}
                    >
                        <div className="accordion-body">
                            DICS contains imaging study information.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default HelpPage;