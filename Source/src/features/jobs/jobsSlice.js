import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: [
    {
      id: 0,
      employerImage:
        'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png',
      employerName: 'Google',
      title: 'Lead Product Manager',
      salary: '2500',
      location: 'Toronto, Canada',
    },
    {
      id: 1,
      employerImage:
        'https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-1/269880734_147518434299318_4668439159381340733_n.jpg?stp=dst-jpg_p200x200&_nc_cat=100&ccb=1-7&_nc_sid=c6021c&_nc_ohc=NS2CbbokcKUAX_BZ5He&tn=kgSeFU-Ev1-nugyD&_nc_ht=scontent-hbe1-1.xx&oh=00_AfAsAIS8sPX5RAzjZhXPGtFbjwlumYHmg_0Z4U1y3lbIEQ&oe=63659156',
      employerName: 'Vekelz',
      title: 'Senior UI Designer',
      salary: '4500',
      location: 'Cairo, Egypt',
    },
  ],
};

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
});

export const selectJobs = state => state.jobs.value;

export default jobsSlice.reducer;
