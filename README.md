# 💼 Job Portal

A full-stack Job Portal that enables recruiters to post job listings and job seekers to apply, filter, and manage applications. Built using the Mern stack.

---

## 🔗 Live Demo

- 🌐 [UI Website (Netlify)](https://fluffy-clafoutis-27d262.netlify.app)
- 📁 [GitHub Repository](https://github.com/paragsewani/Job-portal)

---

## 🚀 Features

- 👨‍💼 Recruiter dashboard to post, update, and manage job listings
- 👨‍🎓 Job seeker dashboard with application tracking
- 🔍 Filter jobs by niche, location, or keywords
- 📄 Upload resume and write cover letters
- 📬 Email notifications on application
- 🔐 Secure login/register with JWT + Cookies
- ☁️ File upload support via Cloudinary
- 📰 Newsletter automation with Node Cron

---

## 🗂️ Project Structure

Job-portal/
├── backend/
│ ├── automation/  Cron jobs (e.g., newsletter) for sending email to the target user who is interested in that particular job opening niche
│ ├── config/  Environment config
│ ├── controllers/ # Route logic (user, job, application)
│ ├── database/  MongoDB connection logic
│ ├── middlewares/ It is for  error handling, authentication and also for authorization 
│ ├── models/  These contains how user,job and application is structured
│ ├── routes/  API endpoints divided into different routes for easy mapping with controllers
│ ├── utils/  Helper functions (e.g., sendToken, sendEmail)
│ └── server.js ( Entry point for backend)
│




├── frontend/
│ ├── public
│ └── src
│ ├── assets (for images,icons)
│ ├── components (This are components like navbar ,footer,jobcard so it can be used anywhere)
│ ├── pages/ # Page components (Login, Register, Dashboard)
│ ├── store/  Redux Toolkit slices for maintaing states and easy handling
│ ├── App.js  Main routing & layout
│ └── index.js ( React entry point)
