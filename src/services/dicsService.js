import dicsData from '../mockData/dicsData';

function getDicsStudies(hcn){
    return dicsData[hcn] || [];
}

export {getDicsStudies};