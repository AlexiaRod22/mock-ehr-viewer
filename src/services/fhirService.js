const FHIR_BASE_URL = 'http://localhost:8080/fhir';


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

async function getObservationsById(patientId){
    const response =await fetch(`${FHIR_BASE_URL}/Observation?subject=Patient/${patientId}`);

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

async function getMappedObservations(patientId){
    const data = await getObservationsById(patientId);

    return data.entry.map((entry) => mapObservation(entry.resource));
}

async function getImagingStudiesById(patientId){
    const response = await fetch(`${FHIR_BASE_URL}/ImagingStudy?subject=Patient/${patientId}`);
    
    const data = await response.json();

    return data
}

function mapImagingStudies(imagingStudyResource){
    return{
        studyId: imagingStudyResource.id,

        description: imagingStudyResource.description,
        
        modality: imagingStudyResource.series?.[0]?.modality?.display,
        
        seriesDescription: imagingStudyResource.series?.[0]?.description,
        
        studyDate: imagingStudyResource.started
    };
}

async function getMappedImagingStudies(patientId){
    const data = await getImagingStudiesById(patientId);

    return data.entry.map((entry) => mapImagingStudies(entry.resource));
}

export {getImagingStudiesById,getObservationsById,getMappedImagingStudies,getPatientByIdentifier, mapPatient, getMappedObservations};