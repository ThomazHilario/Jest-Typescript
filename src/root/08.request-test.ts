export async function getPokemon(name:string){
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)

        if(response.status === 200){
            const data = response.json()
            return data
        }

    } catch (error) {
        return error
    }
}