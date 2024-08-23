export async function getPokemon(name:string){
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)

        if(response.status === 200){
            const data = await response.json()
            return data
        }

    } catch (error) {
        return error
    }
}

export async function showData(data:any){
    try {
        // Request
        const dataPokemon = await data

        return {
            name:dataPokemon.name
        }

    } catch (error) {
        return error
    }    
}