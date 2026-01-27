# Fullstack Starter – React + TypeScript & Node.js REST API

## Deskripsi

Project ini adalah **starter fullstack** yang terdiri dari **Frontend (React + TypeScript)** dan **Backend (Node.js REST API)** dengan arsitektur yang sudah disiapkan secara rapi dan konsisten.

Project ini dibuat agar developer **bisa langsung mengembangkan fitur tanpa perlu menyiapkan struktur dari awal**.  
Cocok digunakan sebagai **boilerplate fullstack** untuk aplikasi CRUD, aplikasi bisnis, sistem internal, maupun pengembangan jangka panjang.

## Teknologi yang Digunakan

### Frontend
- React
- TypeScript
- Vite
- React Router
- Zustand
- Axios

### Backend
- Node.js
- Express
- Knex
- MySQL
- Joi
- UUID
- Multer

## Struktur Project

## backend nodeJs
api/
├── src/
│   ├── app.js
│   ├── server.js
│   │
│   ├── config/
│   │   ├── database.js
│   │   └── env.js
│   │
│   ├── routes/
│   │   ├── index.js
│   │   └── user.route.js
│   │
│   ├── controllers/
│   │   └── user.controller.js
│   │
│   ├── services/
│   │   └── user.service.js
│   │
│   ├── repositories/
│   │   └── user.repository.js
│   │
│   ├── interfaces/
│   │   └── user.interface.js
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   └── error.middleware.js
│   │
│   ├── validations/
│   │   └── user.validation.js
│   │
│   ├── utils/
│   │   └── response.js
│   │
│   └── models/
│       └── user.model.js
│
├── .env
├── .env.example
├── .gitignore
├── package.json
└── README.md

## frontend reactTs
frontend/
│
├── public/
│   └── favicon.svg
│
├── src/
│   ├── assets/              
│   │   └── images/
│
│   ├── components/         
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── Button.types.ts
│   │   └── Modal/
│
│   ├── features/           
│   │   └── auth/
│   │       ├── pages/
│   │       ├── components/
│   │       ├── services/
│   │       └── types.ts
│
│   ├── hooks/              
│   │   └── useDebounce.ts
│
│   ├── layouts/             
│   │   └── MainLayout.tsx
│
│   ├── pages/              
│   │   ├── Home.tsx
│   │   └── Login.tsx
│
│   ├── routes/              
│   │   └── index.tsx
│
│   ├── services/           
│   │   ├── api.ts
│   │   └── auth.service.ts
│
│   ├── store/             
│   │   └── auth.store.ts
│
│   ├── styles/             
│   │   └── index.css
│
│   ├── types/               
│   │   └── user.ts
│
│   ├── utils/               
│   │   └── formatCurrency.ts
│
│   ├── App.tsx
│   ├── main.tsx
│
├── .env
├── tsconfig.json
├── vite.config.ts
├── package.json
└── README.md



