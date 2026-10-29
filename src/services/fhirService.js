const FHIR_BASE_URL = 'https://hapi.fhir.org/baseR4';

async function getPatients(){
    const response = await fetch(`${FHIR_BASE_URL}/Patient?_count=5`);
    
    const data = await response.json();

    return data;
}

export {getPatients};