# Running the Application

## Development Setup

This project requires running **two servers** simultaneously:

### 1. Frontend Dev Server (Vite)
```bash
npm run dev
```
- Runs on: **http://localhost:5176/**
- Hot reload enabled

### 2. Mock API Server (JSON Server)
```bash
npm run api
```
- Runs on: **http://localhost:3001/**
- Watches `db.json` for changes
- Provides REST API endpoints

## API Endpoints

### Orders
- **GET** `/orders` - Get all orders
- **GET** `/orders/:id` - Get order by ID
- **POST** `/orders` - Create new order
- **PUT** `/orders/:id` - Update order
- **DELETE** `/orders/:id` - Delete order

## Database File

Order data is stored in `db.json` at the project root.

### Example Order Structure
```json
{
  "orderNumber": "ORD-1234567890",
  "customer": {
    "email": "customer@example.com",
    "phone": "123-456-7890",
    "fullName": "John Doe",
    "address1": "123 Main St",
    "city": "New York",
    "state": "NY",
    "postalCode": "10001",
    "country": "USA"
  },
  "items": [
    {
      "id": 1,
      "name": "Product Name",
      "price": 99.99,
      "quantity": 2,
      "total": 199.98
    }
  ],
  "subtotal": 199.98,
  "shipping": 0,
  "tax": 0,
  "total": 199.98,
  "timestamp": "2026-02-14T18:37:00.000Z"
}
```

## Important Notes

- **Both servers must be running** for checkout to work
- Orders are saved to `db.json` automatically
- The API server must be started **before** placing orders
- If the API server is not running, checkout will still complete but the order won't be saved

## Quick Start

Open two terminal windows:

**Terminal 1:**
```bash
npm run dev
```

**Terminal 2:**
```bash
npm run api
```

Then visit **http://localhost:5176/** in your browser.
