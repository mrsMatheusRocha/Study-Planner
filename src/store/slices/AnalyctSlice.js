import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  totalTasks: 0,
  completedTasks: 0,
  pendingTasks: 0,
  overdueTasks: 0,
  completionPercentage: 0,
}

const AnalyticSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    updateAnalytics: (state, action) => {
      const tasks = action.payload;
      const currentDate = new Date();
      currentDate.setHours(23, 59, 59, 999);

      state.totalTasks = tasks.length;
      state.completedTasks = tasks.filter(task => task.completed).length;
      state.pendingTasks = tasks.filter(task => !task.completed).length;

      const parseTaskDate = (dateValue) => {
        if (!dateValue) return null;
        // If already a Date
        if (dateValue instanceof Date) return dateValue;
        // If string in dd/mm/yyyy (pt-BR)
        if (typeof dateValue === 'string' && dateValue.includes('/')) {
          const parts = dateValue.split('/').map(p => p.trim());
          if (parts.length === 3) {
            const [day, month, year] = parts;
            const d = new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10));
            return isNaN(d.getTime()) ? null : d;
          }
        }
        const d = new Date(dateValue);
        return isNaN(d.getTime()) ? null : d;
      };

      state.overdueTasks = tasks.filter(task => {
        if (task.completed || !task.date) return false;
        const taskDate = parseTaskDate(task.date);
        if (!taskDate) return false;
        return taskDate < currentDate;
      }).length;

      state.completionPercentage = state.totalTasks > 0 ? Math.round((state.completedTasks / state.totalTasks) * 100) : 0;
    }
  }
})

export const { updateAnalytics } = AnalyticSlice.actions;
export const selectAnalytics = (state) => state.analytics;
export default AnalyticSlice.reducer;
