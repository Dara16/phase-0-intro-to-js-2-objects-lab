const employee = {
    name: 'Mary',
    streetAddress: '12 Estate Street',
    city: 'Gotham',
    state: 'Maine',
    zip: '12345'
};

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newEmployee1 = {...obj};

    newEmployee1[key] = value;
    return newEmployee1;

}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key]= value;
    return obj;

}

function deleteFromEmployeeByKey(obj, key){
    const newEmployee2 = {...obj};

    delete newEmployee2[key];
    return newEmployee2;

}

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;

}


