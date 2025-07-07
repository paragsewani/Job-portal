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

```
Job-portal/
├── backend/
│   ├── automation/         # Cron jobs (e.g., newsletter) for sending email to users interested in specific job niches
│   ├── config/             # Environment configuration
│   ├── controllers/        # Route logic for user, job, and application
│   ├── database/           # MongoDB connection logic
│   ├── middlewares/        # Error handling, authentication, and authorization
│   ├── models/             # Structure definitions for User, Job, and Application
│   ├── routes/             # API endpoints organized by feature for easy controller mapping
│   ├── utils/              # Helper functions like sendToken and sendEmail
│   └── server.js           # Entry point for the backend
│
├── frontend/
│   ├── public/             # Public assets
│   └── src/
│       ├── assets/         # Images, icons, etc.
│       ├── components/     # Reusable components like Navbar, Footer, JobCard
│       ├── pages/          # Pages such as Login, Register, and Dashboard
│       ├── store/          # Redux Toolkit slices for managing global state
│       ├── App.js          # Main app layout and routing
│       └── index.js        # React entry point
```
