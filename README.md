# Words2Number.js (pt-br)
Converte números escritos por extenso em dados no tipo number. Em português-br.

## Características

-   Números até quadrilhão.
-   Números negativos.
-   Números decimais.
-   Reconhece palavras como "dúzia" e "meia".
-   Reconhece números sequenciais.
-   Sistema de numeração (Centenas, dezenas, milhares...)
-   Preferências de gênero.

##### Exemplo

```
words2num('quarenta e dois') // 42
words2num('duas dúzias e meia') // 30
words2num('quinhentos e sessenta milhões e quinhentos e sessenta mil') // 560560000
words2num('um zero zero oito') // 1008
```