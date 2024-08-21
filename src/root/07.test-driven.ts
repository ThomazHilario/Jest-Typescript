export function passwordCheck(passwordUser:string){
    const regexPassword = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)

    if(passwordUser.length < 8){
        return false
    } 
    
    if(!/[A-Z]/.test(passwordUser)){
        return false
    }

    if(!/[a-z]/.test(passwordUser)){
        return false
    }

    if(!/[^a-zA-Z0-9]/.test(passwordUser)){
        return false
    }

    return true
    
}