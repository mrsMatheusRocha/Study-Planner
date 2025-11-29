import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from "./slices/TaskSlice"
import themeReducer from './slices/ThemeSlice';
import analyticReducer from './slices/AnalyctSlice';
import { LoadState, SaveState, Throttle } from './LocalStorage';

const preLoadedState = LoadState();
console.log("Store init - preLoadedState:", preLoadedState);

export const store = configureStore({
  reducer: {
    tasks: TaskReducer,
    theme: themeReducer,
    analytics: analyticReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: preLoadedState,
});

console.log("Store created - initial state:", store.getState());

const throttleSaveState = Throttle((state) => {
  SaveState({
    tasks: state.tasks,
    theme: state.theme,
    analytics: state.analytics,
  });
}, 1000)

store.subscribe(() => { 
  console.log("Store changed, throttling save...");
  throttleSaveState(store.getState());
});