# GreenThumb

## Como rodar este projeto

##### Rodando o modo de desenvolvimento


```
  yarn run watch:dev
```

##### Gerando o pacote para deploy

```
  yarn run build:dist
```

## Link da Aplicação

https://greenthumb-prod.surge.sh

## Arquitetura da Aplicação

Foquei em criar uma arquitetura onde tudo funciona como um palco (Stage) onde executamos Passos (Steps), a cada avanço o Stage é responsável por navegar entre os Steps;

### Roadmap

- [x] Handlebars
- [x] ES Modules
- [x] ITCSS + BEMCSS para arquitetura escalavel e manutenível
- [x] PostCSS com plugin do Autoprefixer
- [x] Corrigir Validação
- [-] JEST
- [x] Lazy-load das imagens
- [ ] Animações de transição
- [ ] Cross-Browser IE 11
- [ ] JSON-LD
- [ ] WAI-ARIA
- [ ] CYPRESS

