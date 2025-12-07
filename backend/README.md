# Rent Management Backend (Node.js + Express + SQLite)

This is a simple backend for a rent management mobile app. It exposes APIs to create and list rent records.

Each rent record includes:
- name
- amount
- rentalDate
- paymentDate

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the server (development):

```bash
npm run dev
```

Or start normally:

```bash
npm start
```

The server will run by default on `http://localhost:3000`.

## API Endpoints

### Health check

- **GET** `/`
- Response: `{ "message": "Rent Management API is running" }`

### Get all rent records

- **GET** `/api/rents`
- Response: `[
  {
    "id": 1,
    "name": "John Doe",
    "amount": 1000,
    "rentalDate": "2025-01-01",
    "paymentDate": "2025-01-05"
  },
  ...
]`

### Create a new rent record

- **POST** `/api/rents`
- Request body (JSON):

```json
{
  "name": "John Doe",
  "amount": 1000,
  "rentalDate": "2025-01-01",
  "paymentDate": "2025-01-05"
}
```

- Response (201): created record with `id`.

You can now connect your mobile app to these endpoints.
