const express = require("express");
const app = express();
const port = 3000;

const jobInfo = {
  employerImage:
    "https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png",
  employerName: "Spotify",
  title: "UI Design Lead",
  salary: "1200",
  jobType: "Full Time",
  location: "Toronto, Canada",
  description: {
    qualifications: [
      "Exceptional communication skills and team working skill",
      "Creative with an eye for shape and colour",
      "Know the principal of animation and you can create high prtotypes",
      "Figma,Xd & Sketch must know about this apps",
    ],
  },
  company:
    "Vekelz is the best platform ever in the automotive worldVekelz applications was created by 'Vekelz Technology', a limited liability company,Vekelz intends to connect car owners and car service providers in all their forms and make communication between them better, easier and more effectively.",
  reviews: [],
};

const jobs = [
  {
    employerImage:
      "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png",
    employerName: "Google",
    title: "Lead Product Manager",
    salary: "2500",
    location: "Toronto, Canada",
  },
  {
    employerImage:
      "https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-1/269880734_147518434299318_4668439159381340733_n.jpg?stp=dst-jpg_p200x200&_nc_cat=100&ccb=1-7&_nc_sid=c6021c&_nc_ohc=NS2CbbokcKUAX_BZ5He&tn=kgSeFU-Ev1-nugyD&_nc_ht=scontent-hbe1-1.xx&oh=00_AfAsAIS8sPX5RAzjZhXPGtFbjwlumYHmg_0Z4U1y3lbIEQ&oe=63659156",
    employerName: "Vekelz",
    title: "Senior UI Designer",
    salary: "4500",
    location: "Cairo, Egypt",
  },
];

const posts = [
  {
    employerImage:
      "https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19750.png",
    employerName: "Facebook",
    title: "Lead Product Manager",
    jobType: "Full Time",
    salary: "4500",
  },
  {
    employerImage:
      "https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png",
    employerName: "Spotify",
    title: "Product Designer",
    jobType: "Full Time",
    salary: "4500",
  },
  {
    employerImage:
      "https://www.freepnglogos.com/uploads/netflix-logo-app-png-16.png",
    employerName: "Netflix",
    title: "Visual Designer",
    jobType: "Full Time",
    salary: "4500",
  },
  {
    employerImage:
      "https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19750.png",
    employerName: "Facebook",
    title: "Lead Product Manager",
    jobType: "Full Time",
    salary: "4500",
  },
  {
    employerImage:
      "https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png",
    employerName: "Spotify",
    title: "Product Designer",
    jobType: "Full Time",
    salary: "4500",
  },
  {
    employerImage:
      "https://www.freepnglogos.com/uploads/netflix-logo-app-png-16.png",
    employerName: "Netflix",
    title: "Visual Designer",
    jobType: "Full Time",
    salary: "4500",
  },
];

const users = [
  {
    email: "alexmorgan@gmail.com",
    password: "12345",
    firstName: "Alex",
    lastName: "Morgan",
    image: "https://avatars.githubusercontent.com/u/1?v=4",
  },
  {
    email: "sarahossam@gmail.com",
    password: "12345",
    firstName: "Sara",
    lastName: "Hossam",
    image: "https://avatars.githubusercontent.com/u/2?v=4",
  },
  {
    email: "louislit@gmail.com",
    password: "12345",
    firstName: "Luis",
    lastName: "Lit",
    image: "https://avatars.githubusercontent.com/u/3?v=4",
  },
  {
    email: "harveyspectere@gmail.com",
    password: "12345",
    firstName: "Harvey",
    lastName: "Spectere",
    image: "https://avatars.githubusercontent.com/u/4?v=4",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/jobsInfo", (req, res) => {
  res.send(jobInfo);
});

app.get("/jobs", (req, res) => {
  res.send(jobs);
});

app.get("/posts", (req, res) => {
  res.send(posts);
});
app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
