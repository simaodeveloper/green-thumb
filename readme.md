#### 10/01/2020 - Proof of Concept

- Criei uma POC para definir a arquitetura da aplicação, onde haverá um Stage
  que controlará os Steps, cada Step terá seu próprio Controller;

- Para testar rápidamente utilizei o atributo type com o novo valor module para utilizar ES6 Modules e deixar o mais próximo para implementar com Webpack;

#### 11/01/2020 - Layout

- Criei 2 dominios no surge.sh, um para produção, outro para QA. Ambos
  com HTTPS habilitado.

  - Production: https://greenthumb-prod.surge.sh

  - Testes: https://greenthumb-qa.surge.sh

- Iniciei o desenvolvimento do layout utilizando custom properties ao invés de trabalhar
  com um pre-processador, apenas para organizar as cores do tema do projeto.

#### 13/01/2020 - Modules

- Implementei o webpack para trabalhar com módulos, utilizar ES6 Modules no Javascript,
  Aplicar ITCSS e BEM para organizar a arquitetura CSS junto com SASS, com isso adiciono escalabilidade prevendo que o projeto cresça com o tempo
  e manutebilidade para facilitar a manutenção pela equipe ou nossos membros da equipe.

#### 14/01/2020 - Mobile First

- Adicionei um plugin para gerar o sprite dos svgs que usarei como icone, isso me dará mais flexibilidade e poderei utilizar os icones facilmente.

https://deviceatlas.com/blog/most-popular-smartphones

### Roadmap

- [ ] Javascript Consistente (ESLint, Prettier and Airbnb Style Guide)
- [X] Arquitetura CSS (ITCSS + BEM)
- [X] Modules (Webpack)
- [ ] Unit Test (Jest)
- [ ] Performance (lazy-load, Audits, gtmetrix)
- [ ] Integration Test (Cypress)
- [ ] CI / CD (Travis CI)
- [ ] PWA
- [ ] Acessibilidade e SEO (WAI-ARIA e JSON-LD);
