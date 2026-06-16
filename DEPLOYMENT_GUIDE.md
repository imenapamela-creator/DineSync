# DineSync Deployment Guide - Render.com

## 📋 Prerequisites

Before deploying, make sure:
- ✅ Your code is pushed to GitHub (Done!)
- ✅ You have a MongoDB Atlas account with database set up (Done!)
- ✅ You have a Render.com account (Free tier works!)

---

## 🚀 Step-by-Step Deployment

### Part 1: Deploy Backend to Render

#### 1. Create Render Account
- Go to https://render.com
- Sign up with GitHub (easiest option)

#### 2. Create New Web Service
1. Click "New +" button → "Web Service"
2. Connect your GitHub repository: `imenapamela-creator/DineSync`
3. Click "Connect" next to your repository

#### 3. Configure Backend Service
Fill in these settings:

**Basic Settings:**
- **Name**: `dinesync-backend` (or any name you like)
- **Region**: Choose closest to your users (e.g., Frankfurt for Europe)
- **Branch**: `main`
- **Root Directory**: `backend`
- **Environment**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `npm start`

**Instance Type:**
- Select **Free** (or paid if you prefer)

#### 4. Add Environment Variables
Click "Advanced" and add these environment variables:

```
NODE_ENV=production
PORT=10000
MONGODB_URI=mongodb+srv://Pamzy:dinesync123@cluster0.y04hpit.mongodb.net/dinesync?appName=Cluster0
JWT_SECRET=dinesync-super-secret-key-2024-change-in-production
JWT_EXPIRE=7d
CLIENT_URL=https://your-frontend-url.netlify.app
```

**Note:** You'll update `CLIENT_URL` after deploying frontend

#### 5. Deploy!
- Click "Create Web Service"
- Wait 5-10 minutes for deployment
- You'll get a URL like: `https://dinesync-backend.onrender.com`

#### 6. Test Backend
- Visit: `https://dinesync-backend.onrender.com`
- You should see: `{"message": "DineSync API is running"}`

---

### Part 2: Deploy Frontend to Netlify (Recommended) or Render

#### Option A: Netlify (Easier for React)

1. **Go to https://netlify.com and sign up**

2. **Deploy via GitHub:**
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub
   - Select your `DineSync` repository
   - Configure:
     - **Base directory**: `Frontend`
     - **Build command**: `npm run build`
     - **Publish directory**: `Frontend/dist`

3. **Add Environment Variable:**
   - Go to Site settings → Environment variables
   - Add: `VITE_API_URL` = `https://dinesync-backend.onrender.com`

4. **Deploy!**
   - Click "Deploy site"
   - You'll get a URL like: `https://dinesync-frontend.netlify.app`

5. **Update Backend CORS:**
   - Go back to Render dashboard
   - Open your backend service
   - Update environment variable:
     - `CLIENT_URL` = `https://dinesync-frontend.netlify.app`
   - Render will automatically redeploy

#### Option B: Render (Both on same platform)

1. **Create New Static Site:**
   - Click "New +" → "Static Site"
   - Connect same GitHub repository
   - Configure:
     - **Name**: `dinesync-frontend`
     - **Branch**: `main`
     - **Root Directory**: `Frontend`
     - **Build Command**: `npm run build`
     - **Publish Directory**: `dist`

2. **Add Environment Variable:**
   - Add: `VITE_API_URL` = `https://dinesync-backend.onrender.com`

3. **Deploy & Update CORS** (same as Netlify)

---

## 🔧 Required Code Changes Before Deployment

### 1. Update Frontend API Configuration

Create `Frontend/src/config/api.js`:
```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default API_URL;
```

### 2. Fix MongoDB Atlas Network Access

**IMPORTANT:** Your MongoDB is currently blocking connections!

1. Go to https://cloud.mongodb.com
2. Click "Network Access" (left sidebar)
3. Click "Add IP Address"
4. Click "Allow Access from Anywhere" (0.0.0.0/0)
5. Click "Confirm"

**Why?** Render servers use dynamic IPs, so we need to allow all IPs.

### 3. Update CORS in Backend (Already done!)
Your backend already has CORS configured - just update the `CLIENT_URL` env variable.

---

## ✅ Deployment Checklist

**Before Deploying:**
- [ ] Code pushed to GitHub
- [ ] MongoDB Atlas allows connections from anywhere (0.0.0.0/0)
- [ ] Environment variables ready

**Backend Deployment:**
- [ ] Create Render web service
- [ ] Set root directory to `backend`
- [ ] Add all environment variables
- [ ] Deploy and test API URL

**Frontend Deployment:**
- [ ] Create Netlify/Render static site
- [ ] Set root directory to `Frontend`
- [ ] Add `VITE_API_URL` environment variable
- [ ] Deploy and test site

**Post-Deployment:**
- [ ] Update backend `CLIENT_URL` with frontend URL
- [ ] Test login/signup
- [ ] Test creating restaurant (admin)
- [ ] Test viewing restaurants (client)

---

## 🐛 Common Issues & Solutions

### Issue 1: "Cannot connect to MongoDB"
**Solution:** Whitelist 0.0.0.0/0 in MongoDB Atlas Network Access

### Issue 2: "CORS error" in browser console
**Solution:** 
- Update `CLIENT_URL` in backend environment variables
- Make sure it matches your frontend URL exactly (no trailing slash)

### Issue 3: Backend takes long to respond (first request)
**Solution:** This is normal on Render free tier. The server "sleeps" after 15 minutes of inactivity and takes 30-60 seconds to wake up.

### Issue 4: "404 Not Found" when refreshing frontend pages
**Solution:** Add `_redirects` file in `Frontend/public/`:
```
/*    /index.html   200
```

### Issue 5: Environment variables not working
**Solution:** 
- For Vite, prefix with `VITE_`
- Rebuild/redeploy after changing env vars

---

## 💰 Cost Breakdown

**Free Tier (Both platforms):**
- Render Backend: Free (sleeps after 15 min inactivity)
- Netlify/Render Frontend: Free
- MongoDB Atlas: Free (512MB storage)

**Total: $0/month** ✅

**Paid Tier (Recommended for production):**
- Render Backend: $7/month (no sleep)
- Frontend: Still free
- MongoDB: Free tier sufficient

---

## 📱 Test Your Deployed App

1. **Visit Frontend URL**
2. **Sign up as Admin**
3. **Complete restaurant setup**
4. **Add menu items**
5. **Sign up as Client (new browser/incognito)**
6. **Browse restaurants**
7. **Place order**
8. **Book table**

If all these work → Your app is live! 🎉

---

## 🔗 Useful Links

- Render Dashboard: https://dashboard.render.com
- Netlify Dashboard: https://app.netlify.com
- MongoDB Atlas: https://cloud.mongodb.com
- Your GitHub Repo: https://github.com/imenapamela-creator/DineSync

---

## 🆘 If You Get Stuck

**Ask me (or any AI helper):**
"I'm deploying my DineSync app on Render and Netlify. The backend is a Node.js Express app in the `/backend` folder, and the frontend is a React Vite app in the `/Frontend` folder. I'm getting [describe the error]. Here's my current setup: [paste error message or screenshot]. Can you help?"

**Or show me the deployment logs and I'll help debug!**
