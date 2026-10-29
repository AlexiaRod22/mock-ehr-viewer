const FHIR_BASE_URL = 'https://hapi.fhir.org/baseR4';

async function getPatients(){
    const response = await fetch(`${FHIR_BASE_URL}/Patient?_count=5`);
    
    const data = await response.json();

    return data;
}

function mapPatient(patientResource){
    return{
        name: `${patientResource.name?.[0]?.given?.[0] || ''} ` + 
        `${patientResource.name?.[0]?.family || ''}`,

        dob: patientResource.birthDate,

        gender: patientResource.gender,

        fhirId: patientResource.id
    };

}

export {getPatients, mapPatient};