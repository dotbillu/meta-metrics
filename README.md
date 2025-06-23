# 📊 Meta Metrics

Meta Metrics is a **full-stack web application** designed to help you track, analyze, and visualize the performance of social media posts. It provides advanced metrics and an intuitive dashboard for marketers, influencers, and analysts to understand content impact across platforms like **Facebook, Instagram, Twitter, and LinkedIn**.

---

**🔗 Live Demo:** https://meta-metrics-abhays-projects-57d71e73.vercel.app/
**🔗 Portfolio:** https://dotbillu.github.io/Portfolio/
**👤 Author:** Abhay

---

## 🖼️ App Screenshots

<p align="center">
  <img src="images/Screenshot%20from%202025-06-23%2017-12-33.png" alt="Dashboard Screenshot 1" width="700"/>
</p>
<p align="center">
  <img src="images/Screenshot%20from%202025-06-23%2017-12-38.png" alt="Dashboard Screenshot 2" width="700"/>
</p>
<p align="center">
  <img src="images/Screenshot%20from%202025-06-23%2017-21-37.png" alt="Dashboard Screenshot 3" width="700"/>
</p>

---

## 🚀 Features

- **Smart Score Calculation**  
  Based on likes, shares, comments, and views

- **Performance Analytics**  
  Engagement, average score, top performer, and more

- **Search & Filter**  
  By author, platform, and tags

- **Modern UI**  
  Clean, animated, and fully responsive

- **Add & Delete Posts**  
  Instantly manage your analytics

- **RESTful Backend**  
  Built with Node.js + Express

- **Backend Scoring Algorithm**  
  Ensures fair and normalized scoring

---

## 🗂️ Project Structure

```
meta-metrics/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   │   └── axios.js
│   │   ├── utils/
│   │   │   └── scoring.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── index.html
│   └── package.json
│
├── server/
│   ├── models/
│   │   └── Post.js
│   ├── controllers/
│   │   └── postController.js
│   ├── routes/
│   │   └── postRoutes.js
│   ├── services/
│   │   └── scoringLogic.js
│   ├── config/
│   │   └── db.js
│   ├── app.js
│   ├── .env
│   └── package.json
│
├── docs/
│   ├── architecture.md
│   └── tech-stack.md
├── images/
│   ├── Screenshot from 2025-06-23 17-12-33.png
│   ├── Screenshot from 2025-06-23 17-12-38.png
│   └── Screenshot from 2025-06-23 17-21-37.png
├── README.md
├── .gitignore
└── vercel.json
```

---

## 🛠️ Tech Stack

### Frontend
- **React.js**
- **Tailwind CSS**
- **Lucide Icons**
- **Axios**

### Backend
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**

### Other
- **Vercel / Netlify** for frontend hosting
- **Railway / Render / MongoDB Atlas** for backend & database

---

## 🧮 Scoring Algorithm

```js
score = (likes * 2 + shares * 3 + comments * 1.5) / views
score = Math.min(Math.round(score * 100), 100)
```
> Scores are normalized and capped at 100.

---

## 🚦 Running the Project

### 1. Clone the repo

```sh
git clone https://github.com/your-username/meta-metrics.git
cd meta-metrics
```

### 2. Setup Backend

```sh
cd server
npm install
# Create a .env file with MONGO_URI
npm start
```

### 3. Setup Frontend

```sh
cd client
npm install
# Create a .env file with REACT_APP_BACKEND_URL
npm run dev
```

---

## 🤝 Contributing

Pull requests are welcome!  
If you’ve got ideas or improvements, feel free to fork and send them.

---

## 📄 License

**MIT** — Free for personal, educational, or hackathon use.