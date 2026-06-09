# DineSync Backend Structure

This document describes the backend structure and API contract for the DineSync frontend. It is designed so another AI or a developer can build the exact backend matching the current React app.

## Recommended stack

- Node.js + Express
- MongoDB with Mongoose, or PostgreSQL with Prisma
- JSON Web Tokens (JWT) for authentication
- dotenv for environment configuration

## Folder structure

```
backend/
├── package.json
├── .env.example
├── README.md
├── src/
│   ├── index.js
│   ├── app.js
│   ├── config/
│   │   └── db.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── restaurants.routes.js
│   │   ├── menu.routes.js
│   │   ├── orders.routes.js
│   │   └── bookings.routes.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── restaurant.controller.js
│   │   ├── menu.controller.js
│   │   ├── order.controller.js
│   │   └── booking.controller.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Restaurant.js
│   │   ├── MenuItem.js
│   │   ├── Order.js
│   │   └── Booking.js
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   └── error.middleware.js
│   └── utils/
│       └── validation.js
```

## API contract

### Authentication

#### `POST /api/auth/signup`
Create a new user and optionally a restaurant for an admin.

Request body:
```json
{
  "role": "Admin" | "Client",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "password": "string",
  "phone": "string"
}
```

Response:
```json
{
  "userId": "string",
  "role": "Admin" | "Client",
  "token": "jwt-token"
}
```

#### `POST /api/auth/login`
Log in a user.

Request body:
```json
{
  "email": "string",
  "password": "string"
}
```

Response:
```json
{
  "userId": "string",
  "role": "Admin" | "Client",
  "token": "jwt-token"
}
```

### Restaurant onboarding

#### `POST /api/restaurants`
Create or update restaurant details during credentials onboarding.

Request body:
```json
{
  "userId": "string",
  "name": "string",
  "type": "string",
  "contactPhone": "string",
  "ownerName": "string",
  "ownerEmail": "string",
  "address": "string",
  "city": "string",
  "postal": "string",
  "openTime": "string",
  "closeTime": "string"
}
```

Response:
```json
{
  "restaurantId": "string",
  "name": "string",
  "message": "Restaurant saved"
}
```

### Restaurants discovery

#### `GET /api/restaurants`
Return all restaurants for the client page.

Response:
```json
[
  {
    "id": "string",
    "name": "string",
    "imageUrl": "string"
  }
]
```

#### `GET /api/restaurants/:id/menu`
Return the menu items for one restaurant.

Response:
```json
[
  {
    "id": "string",
    "name": "string",
    "category": "string",
    "price": "string",
    "imageUrl": "string",
    "description": "string"
  }
]
```

#### `GET /api/menu-items/:id`
Return details for one menu item.

Response:
```json
{
  "id": "string",
  "name": "string",
  "category": "string",
  "price": "string",
  "imageUrl": "string",
  "description": "string",
  "restaurantId": "string"
}
```

### Cart and orders

The frontend currently navigates from `ViewItemPage` to `CartPage`. The backend should support a cart or order session.

#### `POST /api/cart/add`
Add item to a client cart (optional; can also be handled locally).

Request body:
```json
{
  "userId": "string",
  "itemId": "string",
  "quantity": number
}
```

Response:
```json
{
  "cartId": "string",
  "items": [ ... ]
}
```

#### `POST /api/orders`
Submit an order from the cart.

Request body:
```json
{
  "userId": "string",
  "restaurantId": "string",
  "items": [
    { "itemId": "string", "quantity": number }
  ],
  "total": "string"
}
```

Response:
```json
{
  "orderId": "string",
  "status": "Pending"
}
```

#### `GET /api/orders`
Admin route to list orders for the restaurant.

Response:
```json
[
  {
    "id": "string",
    "customerName": "string",
    "items": [ ... ],
    "total": "string",
    "status": "string",
    "time": "string"
  }
]
```

### Table booking

#### `POST /api/bookings`
Create a new table booking.

Request body:
```json
{
  "userId": "string",
  "restaurantId": "string",
  "date": "YYYY-MM-DD",
  "time": "string",
  "guests": number,
  "area": "string",
  "seats": [number]
}
```

Response:
```json
{
  "bookingId": "string",
  "status": "Confirmed"
}
```

## Data models

### User

```js
{
  id: String,
  firstName: String,
  lastName: String,
  email: String,
  passwordHash: String,
  phone: String,
  role: "Admin" | "Client"
}
```

### Restaurant

```js
{
  id: String,
  ownerId: String,
  name: String,
  type: String,
  contactPhone: String,
  ownerName: String,
  ownerEmail: String,
  address: String,
  city: String,
  postal: String,
  openTime: String,
  closeTime: String,
  imageUrl: String
}
```

### MenuItem

```js
{
  id: String,
  restaurantId: String,
  name: String,
  category: String,
  price: String,
  description: String,
  imageUrl: String
}
```

### Order

```js
{
  id: String,
  restaurantId: String,
  userId: String,
  items: [
    { itemId: String, quantity: Number }
  ],
  total: String,
  status: String,
  createdAt: Date
}
```

### Booking

```js
{
  id: String,
  restaurantId: String,
  userId: String,
  date: String,
  time: String,
  guests: Number,
  area: String,
  seats: [Number],
  status: String
}
```

## How to use this with another AI

Give this document to the AI and ask it to generate a backend project with:

1. Express server and route files matching the API paths.
2. Controllers that implement the request/response shapes above.
3. Models matching the defined data schemas.
4. A database connection file and a `.env.example` for secrets.

That will produce a backend that fits the React frontend we just made.
