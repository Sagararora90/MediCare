# MediCare - Healthcare Management System

MediCare is a comprehensive healthcare platform featuring a patient frontend, an admin dashboard, and a robust Node.js backend with AI-powered chatbot capabilities and payment integration.

## Features

- **Patient Portal**: Book appointments, manage profile, and chat with Dr. AI.
- **Admin Dashboard**: Manage doctors, appointments, and view dashboard analytics.
- **AI Chatbot**: Virtual health assistant powered by Groq (LLaMA 3.3).
- **Payment Integration**: Supports Stripe and Razorpay for appointment fees.
- **Doctor Management**: Add, update, and manage doctor profiles and availability.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS, Axios, React Router, React Toastify.
- **Admin**: React.js, Tailwind CSS, Axios, React Router.
- **Backend**: Node.js, Express.js, MongoDB (Mongoose), Cloudinary (Image Storage).
- **AI**: Groq API (llama-3.3-70b-versatile).
- **Payments**: Stripe, Razorpay.

## Getting Started

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
   - Create a `.env` file based on `.env.example` and fill in your credentials.
   - Start the server: `npm start`

3. **Setup Frontend**:
   - Navigate to `frontend/`
   - Run `npm install`
   - Create a `.env` file and set `VITE_BACKEND_URL=http://localhost:4000`
   - Start the app: `npm run dev`

4. **Setup Admin Panel**:
   - Navigate to `admin/`
   - Run `npm install`
   - Create a `.env` file and set `VITE_BACKEND_URL=http://localhost:4000`
   - Start the admin panel: `npm run dev`

## Environment Variables

### Backend (`backend/.env`)
```env
MONGODB_URI=your_mongodb_uri
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
STRIPE_SECRET_KEY=your_stripe_secret
RAZORPAY_KEY_ID=your_razorpay_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
GROK_API_KEY=your_groq_api_key
CURRENCY=INR
PORT=4000
```

### Frontend (`frontend/.env`)
```env
VITE_BACKEND_URL=http://localhost:4000
```

### Admin (`admin/.env`)
```env
VITE_BACKEND_URL=http://localhost:4000
VITE_CURRENCY=₹
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[ISC](LICENSE)
