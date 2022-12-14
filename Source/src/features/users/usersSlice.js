import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: [
    {
      email: 'alexmorgan@gmail.com',
      password: '12345',
      firstName: 'Alex',
      lastName: 'Morgan',
      image: 'https://avatars.githubusercontent.com/u/1?v=4',
    },
    {
      email: 'sarahossam@gmail.com',
      password: '12345',
      firstName: 'Sara',
      lastName: 'Hossam',
      image: 'https://avatars.githubusercontent.com/u/2?v=4',
    },
    {
      email: 'louislit@gmail.com',
      password: '12345',
      firstName: 'Luis',
      lastName: 'Lit',
      image: 'https://avatars.githubusercontent.com/u/3?v=4',
    },
    {
      email: 'harveyspectere@gmail.com',
      password: '12345',
      firstName: 'Harvey',
      lastName: 'Spectere',
      image: 'https://avatars.githubusercontent.com/u/4?v=4',
    },
  ],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
});

export const selectUsers = state => state.users.value;

export default usersSlice.reducer;
