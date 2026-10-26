import patientData from '../mockData/patientData';

function getPatientByHcn(hcn){
    const foundPatient = patientData.find(
        (patient) => patient.hcn === hcn
    );

    return foundPatient || null;
}

export {getPatientByHcn};