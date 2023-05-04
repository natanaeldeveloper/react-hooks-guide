# HookCallback

## Objetivo do projeto

Exemplificar o uso de algumas hooks como: `memo`, `useMemo` e `useCallback` disponibilizadas apartir do `React@1.16`
## Funcionalidades
### `memo`

* Retorna um component *memorizado* (re-renderizado apenas quando necessário)
* Evita que o component entre no fluxo de renderização do React. É utilizado quando: 
    * É um componente funcional puro
    * É um componente renderizado com muita frequência
    * Suas propriedades não mudam a cada renderização

### `useMemo`

* Retorna um valor *memorizado* (re-renderizado apenas quando necessário)
* Executado durante a renderização
* Mantem *integridade referencial*
* Utilizado para evitar recálculos complexos desnecessários (não necessariamente cálculos matemáticos)
* Retorna um valor no retorno de uma função. Exemplo:
```ts
    const valorMemoizado = useMemo(
        () => {
            return /* valor de retorno */
        },
        [/* array de dependências */],
    );
```

### `useCallback`

* Retorna um callback *memorizado* (re-renderizado apenas quando necessário)
* Executado apenas quando a função do callback é invocada
* Mantem *integridade referencial*
* Retorna um callback no retorno da função. Exemplo:
```ts
    const callbackMemoizado = useCallback(
        () => {
        // callback
        },
        [/* array de dependências */],
    );
```
