// interface
interface MessageError{
    valid:boolean;
    message:string
}

const casesError = {
    validityLength:{
        valid:false,
        message:'Password length invalid'
    },
    validityLetterUpperCase:{
        valid:false,
        message:'This Password not one letter upperCase'
    },
    validityLetterLowerCase:{
        valid:false,
        message:'This Password not one letter LowerCase'
    },
    validitySpecialCharacters:{
        valid:false,
        message:'This Password not special characteres'
    }
}

export function passwordCheck(passwordUser:string):MessageError{
    const regexPassword = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)

    if(passwordUser.length < 8){
        return casesError.validityLength
    } 
    
    if(!/[A-Z]/.test(passwordUser)){
        return casesError.validityLetterUpperCase
    }

    if(!/[a-z]/.test(passwordUser)){
        return casesError.validityLetterLowerCase
    }

    if(!/[^a-zA-Z0-9]/.test(passwordUser)){
        return casesError.validitySpecialCharacters
    }

    return {
        valid:true,
        message:'This password is valid!'
    }
    
}