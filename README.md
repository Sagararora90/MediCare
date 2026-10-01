# MediCare - Healthcare Management System

![Project Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-ISC-green.svg)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)

MediCare is a comprehensive healthcare platform featuring a patient frontend, an admin dashboard, and a robust Node.js backend with AI-powered chatbot capabilities and payment integration.

---

## 🚀 Features

- **🛡️ Patient Portal**: Book appointments, manage profile, and chat with Dr. AI.
- **⚙️ Admin Dashboard**: Manage doctors, appointments, and view dashboard analytics.
- **🤖 AI Chatbot**: Virtual health assistant powered by Groq (LLaMA 3.3).
- **💳 Payment Integration**: Supports Stripe and Razorpay for appointment fees.
- **👨‍⚕️ Doctor Management**: Add, update, and manage doctor profiles and availability.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS, Axios, React Router, React Toastify.
- **Admin**: React.js, Tailwind CSS, Axios, React Router.
- **Backend**: Node.js, Express.js, MongoDB (Mongoose), Cloudinary (Image Storage).
- **AI**: Groq API (llama-3.3-70b-versatile).
- **Payments**: Stripe, Razorpay.

---

## 📦 Getting Started

### Prerequisites

- Node.js & npm
- MongoDB Atlas account
- Cloudinary account
- Groq API Key (for chatbot)

### Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd MediCare
   ```

2. **Setup Backend**:
   - Navigate to `backend/`
   - Run `npm install`
   - Create a `.env` file based on `.env.example`.
   - Start the server: `npm start`

3. **Setup Frontend**:
   - Navigate to `frontend/`
   - Run `npm install`
   - Create a `.env` file and set `VITE_BACKEND_URL`.
   - Start the app: `npm run dev`

4. **Setup Admin Panel**:
   - Navigate to `admin/`
   - Run `npm install`
   - Start the admin panel: `npm run dev`

---

## 🔑 Environment Variables

Refer to the `.env.example` files in `backend/`, `frontend/`, and `admin/` for details.

---

## 🌟 Future Improvements

- [ ] Mobile Application for Patients.
- [ ] Multi-language support (i18n).
- [ ] Push notifications for appointment reminders.
- [ ] Integration with wearable health devices.

---

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

---

## 📜 License

Distributed under the ISC License. See `LICENSE` for more information.
