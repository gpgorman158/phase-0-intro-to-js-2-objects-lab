const employee = {
    name: "Gerald", 
    streetAddress: "110 wall"
    };
  
  function updateEmployeeWithKeyAndValue(obj, key, value){
      return {...obj, [key]: value};
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
      obj[key] = value; 
    
      return obj;
    }
  
  function deleteFromEmployeeByKey(obj, key){
    const newObj = { ...obj };
    delete newObj[key];
    return newObj;
  }
  
  function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
  }
  
  const employee2 = updateEmployeeWithKeyAndValue(employee, "name", "G2" );
  const employee3 = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name" , "G3");
  const employee4 = deleteFromEmployeeByKey(employee, "streetAddress");
  const employee5 = destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");