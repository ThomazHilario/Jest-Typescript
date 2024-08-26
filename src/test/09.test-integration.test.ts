/*

    -> Teste de integração
    - É uma maneira de testar vários componentes interagindo entre eles.
    - O intuito do teste de integração é diminuir o maximo de simulação.

 */

import { InsertUser } from "../root/09.test-integration"

describe('Testing my class component', () => {

    let serverSimulation:InsertUser | null;

    beforeEach(() => {
        serverSimulation = new InsertUser()
    })

    it('Insert user in array', () => {
        const act = serverSimulation?.insertUser({
            id:'2',
            name:'Luiz',
            password:'@html!css90',
            isVerified:false
        })

        expect(act).toBe('User addding in array')
    })

    it('Return user in array', () => {
        const act = serverSimulation?.getUser('1')

        expect(act).toEqual({
            id:'1',
            name:'Thomaz',
            password:'123456789',
            isVerified:false
        })
    })

    it('Return all users in array', () => {
        const act = serverSimulation?.getAllUsers()

        expect(act).not.toBeNull()
        expect(act).not.toBeUndefined()
    })

    afterEach(() => {
        serverSimulation = null
    })
})