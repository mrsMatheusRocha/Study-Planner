export const LoadState = () => {
  try {
    const serializedState = localStorage.getItem("study-planner-state");
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (error) {
    console.warn("Erro ao carregar o LocalStorage", error);
    return undefined;
  }
}

export const SaveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('study-planner-state', serializedState);
  } catch (error) {
    console.warn("Erro ao salvar o estado no LocalStorage", error)
  }
}

export const Throttle = (func, delay) => {
  let timeoutId;
  let lastExecTime = 0;

  return function (...args) {
    const currentTime = Date.now();

    if (currentTime - lastExecTime > delay) {
      func.apply(this, args);
      lastExecTime = currentTime;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  }
} 