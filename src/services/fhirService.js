const FHIR_BASE_URL = 'https://hapi.fhir.org/baseR4';


async function getPatientByIdentifier(identifier){
    const response = await fetch(`${FHIR_BASE_URL}/Patient?identifier=${identifier}`);

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


async function getObservations(){
    const response =await fetch(`${FHIR_BASE_URL}/Observation?_count=5`);

    const data = await response.json();

    return data;
}

function mapObservation(observationResource){
    return{
        testName: observationResource.code?.text,

        value: observationResource.valueQuantity?.value,

        unit: observationResource.valueQuantity?.unit,

        date: observationResource.effectiveDateTime
    };
}

export {getPatientByIdentifier, mapPatient, getObservations, mapObservation};