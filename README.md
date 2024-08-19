# O que é Jest
- É um framework de teste muito famoso da linguagem JavaScript.
- Desenvolvida pelo facebook.

## O objetivo geral do Jest
- O jest ele permite o desenvolvedor a realizar testes no código.
- Esses testes são essenciais para descobrir se um código ele tem algum bug ou não.

## Adicionar o jest + TypeScript:
- Iniciar um arquivo package.json usando o comando ``` npm init -y ```
- Adicionar as dependências usando o comando: ``` npm i -D typescript jest ts-jest @types/jest ts-node ```
- Agora basta criar um arquivo de configuração do jest: jest.config.ts, e usaar a seguinte estrutura:
``` import type {Config} from '@jest/types' ```
``` const config:Config.InitialOptions = { ```
``` preset:'ts-jest', ```
``` testEnviroment:'node', ```
``` verbose:true, ```
```}```
``` export default config ```
