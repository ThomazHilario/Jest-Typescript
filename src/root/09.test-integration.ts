interface PropsUser{
    id:string,
    name:string,
    password:string,
    isVerified:boolean
}


export class InsertUser{
    userList:PropsUser[] = [{
        id:'1',
        name:'Thomaz',
        password:'123456789',
        isVerified:false
    }]

    public insertUser(user:PropsUser){
        this.userList = [...this.userList, user]
        return 'User addding in array'
    }

    public getUser(id:string){
        return this.userList.find(user => user.id === id)
    }

    public getAllUsers(){
        return this.userList
    }
}