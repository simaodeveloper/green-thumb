#### 1° Dia - Proof of Concept

- Criei uma _POC_ para definir a arquitetura da aplicação, onde haverá um _Stage_
  que controlará os _Steps_, cada _Step_ terá seu próprio _Controller_;

- Para testar rápidamente utilizei o atributo _type_ com o novo valor _module_ para utilizar ES6 Modules e deixar o mais próximo para implementar com _Webpack_;

#### 2° Dia - Mobile First

- interface de transição entre cada _Step_ implementada, agora consigo trocar classes e deixar a animação por conta do _CSS_ utilizando _transitions_ e _keyframes_.

- Configuração do _Webpack_ para configurar a arquitetura do _CSS_ com _SASS_.

- Escolhi fazer o design da aplicação _Mobile First_ e codifiquei todo o _HTML_ sem desacoplar para agilizar o processo visual, provavelmente vou utilizar _Handlebars_ para modularizar.

#### 3° Dia - Unit Test

- Adicionando testes unitários para prevenir possíveis bugs na aplicação e identificar pontos para refatoração;

#### 4° Dia - Performance

- Adicionando lazy-load nas imagens;

- Avaliando a Performance da Aplicação com os programas: Audits do Google Chrome e GTMetrix;


#### 5° Dia - Manual Deploy

- Realizei Deploy da Aplicação via _Surge_, para poder realizar testes com protocolo _HTTPS_ e teste de integração.

#### 6° Dia - Integration Test

- Realizei teste de integração com _Cypress_;

#### 7° Dia - CI / CD
- Configurei o Travis CI para realizar integração
  continua e deploy continuo;
