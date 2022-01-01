import React from "react";

const Validation=(values)=>{
    let errors={};

    if(!values.firstName){
        errors.firstName="name is required"
    }

    return errors;
        
    
}

export default Validation;