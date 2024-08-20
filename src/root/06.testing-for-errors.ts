export function calcImc(weight:any, height:any){
    if(typeof weight === 'number' && typeof height === 'number'){
        return weight / (height**2)
    }else{
        throw new Error('TypeOf parameters invalid!')
    }

}