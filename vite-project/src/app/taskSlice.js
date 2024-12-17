import { createSlice } from '@reduxjs/toolkit'



const initialState = [ 
  {
  time: "30112125",
  assignee: "Tim",
  reviewer: "Tyght",
  status: {
      disclosureSent: true,
      emailResponse: true,
      disclosureChecked: true,
      completed: true,
  },
},
{
  time: "30112125",
  assignee: "Tim",
  reviewer: "Tyght",
  status: {
      disclosureSent: true,
      emailResponse: true,
      manualIntervention: true,
      completed: false,
  },
},
{
time: "30112125",
  assignee: "Tim",
  reviewer: "Tyght",
  status: {
      disclosureSent: true,
      emailResponse: true,
      disclosureChecked: true,
      completed: true,
  },
},
{
time: "30112125",
  assignee: "Tim",
  reviewer: "Tyght",
  status: {
      disclosureSent: true,
      emailResponse: true,
      disclosureChecked: true,
      completed: true,
  },
},]

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state,action) => {
      const lastTask = state[state.length - 1];

      const allStatusFalse = Object.values(action.payload.status).every(status => status === false);

      if (allStatusFalse) {
        console.log('Task has all status as false. Not adding.');
        return; 
      }

      const isDuplicateTask = lastTask && 
        lastTask.assignee === action.payload.assignee &&
        lastTask.reviewer === action.payload.reviewer &&
        JSON.stringify(lastTask.status) === JSON.stringify(action.payload.status);

      if (isDuplicateTask) {
        console.log('Duplicate task found. Not adding.');
      } else {
        state.push(action.payload);
        console.log('Task added:', state[state.length - 1]);
      }
    },
  },
})


export const { addTask } = taskSlice.actions

export default taskSlice.reducer