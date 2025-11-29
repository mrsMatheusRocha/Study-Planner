# Redux Study Project

Este projeto tem como objetivo principal o estudo das principais funcionalidades do **Redux** e a integração com a extensão **Redux DevTools**.

## Objetivo

- Aprender e praticar os conceitos fundamentais do Redux: **Store**, **Actions**, **Reducers** e **Middleware**.
- Integrar o Redux à uma aplicação React utilizando o pacote `react-redux`.
- Utilizar o **Redux DevTools** para inspecionar, debugar e analisar o fluxo de estado da aplicação.

## Estrutura do Projeto

```
redux-study/
├── public/
├── src/
│   ├── store/
│   │   ├── actions.js
│   │   ├── reducers.js
│   │   └── index.js
│   ├── components/
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Como executar

1. **Instale as dependências**:

   ```bash
   npm install
   ```

2. **Execute a aplicação**:

   ```bash
   npm start
   ```

3. **Certifique-se de ter a extensão [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) instalada no seu navegador.**

## Como o Redux está integrado

- A Store foi criada com o suporte ao Redux DevTools usando:
  ```js
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  ```
- Sempre que uma Action é disparada, você consegue visualizar e debugar usando a Extension Redux DevTools.

## Exemplos de código

**Actions**

```js
export const increment = () => ({ type: 'INCREMENT' });
export const decrement = () => ({ type: 'DECREMENT' });
```

**Reducer**

```js
const initialState = { count: 0 };

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}
```

**Store**

```js
import { createStore } from 'redux';
import { counterReducer } from './reducers';

export const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

## Aprendizados Esperados

- Manipulação do estado global com Redux
- Integração e uso do Redux DevTools na rotina de desenvolvimento
- Compreensão do fluxo unidirecional de dados em aplicações React/Redux

---

Sinta-se à vontade para modificar, criar novas Actions, Reducers, e explorar todo o potencial do Redux e do DevTools!
