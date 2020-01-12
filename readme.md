#### 1° Dia - Proof of Concept

- Criei uma POC para definir a arquitetura da aplicação, onde haverá um Stage
  que controlará os Steps, cada Step terá seu próprio Controller;

- Para testar rápidamente utilizei o atributo type com o novo valor module para utilizar ES6 Modules e deixar o mais próximo para implementar com Webpack;

#### 2° Dia - Layout

- Criei 3 dominios no surge.sh, um para produção, outro para staging e outro para QA. Todos
  com HTTPS habilitado.

  - Production: https://greenthumb-prod.surge.sh

  - Desenvolvimento: https://greenthumb-staging.surge.sh

  - Testes: https://greenthumb-qa.surge.sh

- Iniciei o desenvolvimento do layout utilizando custom properties ao invés de trabalhar
  com um pre-processador, apenas para organizar as cores do tema do projeto.


### Roadmap

- Unit Test
- Performance (lazy-load, audits, gtmetrix)
- Integration Test (Cypress)
- CI / CD
- PWA
- Acessibilidade e SEO (WAI-ARIA e JSON-LD);
