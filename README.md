# 📅 Study Planner

Um organizador de estudos moderno, simples e eficiente, construído com **JavaScript** e bastante foco no gerenciamento de estados usando **Redux**.

---

## 🚀 Sobre o projeto

O **Study Planner** é uma aplicação web pensada para ajudar estudantes a planejar, acompanhar e gerenciar suas atividades de estudo de forma intuitiva.  
A principal característica deste projeto é o uso extensivo do **Redux**, garantindo que o gerenciamento de estado seja centralizado, previsível e fácil de debugar.

---

## 🛠️ Tecnologias utilizadas

- **JavaScript** (97.8%) — Toda a lógica da aplicação, incluindo integração com Redux.
- **Redux** — Gerenciamento global de estado e fluxo de informações entre componentes.
- **HTML** (1.5%) — Estrutura da interface.
- **CSS** (0.7%) — Estilização visual da aplicação.

---

## 🎯 Recursos e vantagens do uso do Redux

- **Estado centralizado**: Todas as tarefas, metas, ciclos, filtros e configurações são controladas em uma única Store.
- **Ações claras e rastreáveis**: O uso do Redux permite disparar ações específicas para modificar o estado de forma previsível.
- **Facilidade para depurar**: Com Redux DevTools, todo o fluxo de dados pode ser visualizado e testado.
- **Componentes desacoplados**: Os componentes da interface interagem via Redux, sem depender do estado local excessivo.

---

## ✅ Funcionalidades

- Adicionar, editar e excluir tarefas de estudo
- Marcar tarefas como concluídas ou pendentes
- Visualizar o progresso do plano de estudo
- Filtros para organização personalizada
- Persistência do estado (opcional)
- Integração com Redux DevTools para debugging

---

## 🏁 Como executar o projeto

Clone o repositório e siga os passos abaixo:

```bash
npm install
npm run dev
```

> Recomenda-se instalar a extensão [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) para acompanhar o gerenciamento de estado em tempo real.

---

## ✍️ Como o Redux foi aplicado

Exemplo de estrutura de ações e reducers:

```js
// src/store/actions.js
export const addTask = (task) => ({ type: 'ADD_TASK', payload: task });
export const toggleTask = (id) => ({ type: 'TOGGLE_TASK', payload: id });

// src/store/reducers.js
const initialState = { tasks: [] };

function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, done: !
