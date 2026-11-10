import {useState} from 'react';
import {useOktaAuth} from '@okta/okta-react';
import Header from './Header';
import Sidebar from './Sidebar';

import PcrPage from './PcrPage';
import OlisPage from './OlisPage';
import DicsPage from './DicsPage';
import MessagesPage from './MessagesPage';
import HelpPage from './HelpPage';

import PatientCard from './PatientCard';
import Dashboard from './Dashboard';

import {getPatientByIdentifier, mapPatient} from '../services/fhirService';

function EhrApp({oktaAuth}){
    const {authState} = useOktaAuth();
    const userClaims = authState?.idToken?.claims;

    const [healthCardNumber,setHealthCardNumber] = useState('');
    const [patient, setPatient] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState('dashboard');
    const [hasUnreadNotifications, setHasUnreadNotifications] = useState(true);
    
    const notifications = [
        {
            id: 1,
            title: 'New lab results available',
            patient: 'Emmett Delgado',
            date: 'November 1, 2026'
        },
        {
            id: 2,
            title: 'Imaging study ready for review',
            patient: 'Sylvia Fairbanks',
            date: 'October 31, 2026'
        },
        {
            id: 3,
            title: 'New patient added',
            patient: 'Amos Calderon',
            date: 'October 30, 2026'
        }
    ];

    const showPatientSearch = 
        currentPage === 'dashboard' || currentPage === 'pcr' || currentPage ==='olis' || currentPage === 'dics';


    function openMessages(){
        setHasUnreadNotifications(false);
        setCurrentPage('messages');
    }
    async function retrievePatient(){
        setLoading(true);
        setPatient(null);
        setError('');
        try{
            const data = await getPatientByIdentifier(healthCardNumber);

            if(data.entry && data.entry.length > 0 ){
                const patient = mapPatient(data.entry[0].resource);              
                setPatient(patient);
            }else{
                setError('No patient found');
            }
        }
        catch{
            setError('FHIR patient retrieved failed');
        }

        setLoading(false);
    }

    async function logout(){
        setPatient(null);
        setError('');
        setHealthCardNumber('');

        await oktaAuth.signOut();
    }


    return(
        <div className= "ehr-container">
            <Header 
            userName = {userClaims?.name} 
            logout = {logout}
            notifications = {notifications.length}
            openMessages = {openMessages}
            hasUnreadNotifications = {hasUnreadNotifications}
            />

            <br/>
            <div className="app-layout">
                <Sidebar
                currentPage = {currentPage}
                setCurrentPage = {setCurrentPage}
                />

                <div className = "content-area">
                    {showPatientSearch &&(
                        <>
                        <h2>Patient Search</h2>
                        <div className = "search-section">
                            <input
                            type = "text"
                            placeholder = "Enter Health Card Number"
                            value = {healthCardNumber}
                            onChange = {(event) => setHealthCardNumber(event.target.value)}
                            />

                            <button
                            onClick = {retrievePatient}
                            disabled = {loading}>
                                Retrieve Patient
                            </button>

                        </div>


                        {loading &&(
                            <p>Loading patient information...</p>
                        )}
                        
                        {error && (
                            <p>{error}</p>
                        )}
                        
                        {patient && (
                            <PatientCard patient = {patient}/>
                        )}
                        </>                      
                    )}
                    

                    {patient && currentPage ==='dashboard' && (
                        <Dashboard 
                        patient = {patient}/>
                    )}

                    {patient && currentPage ==='pcr' && (
                        <PcrPage patient={patient}/>
                    )}

                    {patient && currentPage ==='olis' && (
                        <OlisPage patient={patient}/>
                    )}

                    {patient && currentPage ==='dics' && (
                        <DicsPage patient={patient}/>
                    )}

                    {currentPage ==='messages' && (
                        <MessagesPage notifications = {notifications} />
                    )}

                    {currentPage ==='help' && (
                        <HelpPage />
                    )}
                </div>
                

            </div>
            

        </div>
    );
}

export default EhrApp;
