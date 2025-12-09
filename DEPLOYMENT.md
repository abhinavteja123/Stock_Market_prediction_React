# 🚀 Render Deployment Guide - Separate Frontend & Backend

## ✅ Pre-Deployment Steps Completed

- [x] Removed legacy `static/` folder
- [x] Removed `__pycache__/` directory
- [x] Updated `.gitignore` with comprehensive rules
- [x] Created deployment configuration files
- [x] All changes committed and pushed to GitHub

---

## 📋 Deployment Architecture

This project requires **TWO separate deployments**:
1. **Backend Service** - FastAPI (Python)
2. **Frontend Service** - React (Static Site)

### Quick Deploy Options:

**Option A: One-Click Deploy with Blueprint**
- Use the included `render.yaml` file
- Click "New" → "Blueprint" in Render Dashboard
- Connect your repository
- Both services deploy automatically!

**Option B: Manual Deploy (Detailed Below)**
- Deploy backend and frontend separately
- More control over configuration

---

## 🔧 PART 1: Deploy Backend (FastAPI)

### 1. Create Backend Web Service
   - Go to https://dashboard.render.com/
   - Click **"New +"** → **"Web Service"**

### 2. Connect Repository
   - Select **GitHub** as source
   - Search for: `Stock_Market_prediction_React`
   - Click **Connect**

### 3. Configure Backend Service

**Basic Settings:**
```
Name: stock-market-api
Environment: Python 3
Region: Choose your preferred region
Branch: main
Root Directory: (leave empty - use repository root)
```

**Build & Deploy:**
```
Build Command: pip install -r requirements.txt
Start Command: uvicorn server:app --host 0.0.0.0 --port $PORT
```

**Instance Type:**
```
Free (or select your preferred tier)
```

### 4. Environment Variables (if needed)
```
PYTHON_VERSION=3.11.0
```

### 5. Deploy Backend
   - Click **"Create Web Service"**
   - Wait for build to complete (~3-5 minutes)
   - **Copy the backend URL**: `https://stock-market-api-xxxx.onrender.com`
   - Keep this URL - you'll need it for frontend configuration!

---

## 🎨 PART 2: Deploy Frontend (React)

### 1. Create Frontend Static Site
   - Go to https://dashboard.render.com/
   - Click **"New +"** → **"Static Site"**

### 2. Connect Same Repository
   - Select **GitHub** as source
   - Search for: `Stock_Market_prediction_React`
   - Click **Connect**

### 3. Configure Frontend Service

**Basic Settings:**
```
Name: stock-market-frontend
Branch: main
Root Directory: frontend
```

**Build & Deploy:**
```
Build Command: rm -rf package-lock.json node_modules && npm install --legacy-peer-deps && npx vite build
Publish Directory: dist
```

**Important:** Removing `package-lock.json` and `node_modules` before install fixes npm's optional dependency bug with rollup.

**Alternative Build Commands (if above fails):**
```
Option 1: npm ci --legacy-peer-deps && npx vite build
Option 2: rm -rf node_modules && npm install && npx vite build
Option 3: npm install --legacy-peer-deps && npm run build
Option 4: npm install && node ./node_modules/vite/bin/vite.js build
```

### 4. Environment Variables
Add these environment variables for the frontend:
```
VITE_API_URL=https://stock-market-api-xxxx.onrender.com
NODE_VERSION=22 (optional, to specify Node version)
```
*(Replace with your actual backend URL from Part 1)*

### 5. Deploy Frontend
   - Click **"Create Static Site"**
   - Wait for build to complete (~2-3 minutes)
   - Your frontend will be live at: `https://stock-market-frontend.onrender.com`

---

## 🔗 Connect Frontend to Backend

### Update Frontend API Configuration

The frontend needs to know where the backend is. Update the API base URL in your frontend code:

**In `frontend/src/` (wherever you make API calls):**
```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
```

Make sure your API calls use this base URL:
```javascript
const response = await fetch(`${API_URL}/analyze`, {
  method: 'POST',
  // ...
});
```

---

## ⚙️ Backend CORS Configuration

The backend must allow requests from the frontend domain. Update `server.py`:

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://stock-market-frontend.onrender.com",  # Your frontend URL
        "http://localhost:5173",  # Local development
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```


## 🔍 Post-Deployment Verification

### Backend Checks:
- [ ] Backend service builds successfully
- [ ] Visit `https://your-backend-url.onrender.com/docs` (FastAPI docs)
- [ ] Health check endpoint responds
- [ ] CORS is properly configured

### Frontend Checks:
- [ ] Frontend site builds successfully
- [ ] Frontend loads correctly in browser
- [ ] Can connect to backend API
- [ ] Stock analysis functionality works
- [ ] Charts display properly

---

## 🐛 Troubleshooting

### Backend Issues:

**Build Fails?**
- Check build logs in Render dashboard
- Verify all dependencies in `requirements.txt`
- Ensure Python version matches `runtime.txt`

**CORS Errors?**
- Update `allow_origins` in `server.py` with your frontend URL
- Redeploy backend after CORS changes

**API Not Responding?**
- Check backend logs in Render
- Verify start command is correct
- Test endpoints using `/docs` page

### Frontend Issues:

**Build Fails with "vite: Permission denied"?**
- Change build command to: `npm install --legacy-peer-deps && npx vite build`
- Use `npx` instead of `npm run` to execute vite directly
- Alternative: `npm ci --legacy-peer-deps && npx vite build`
- Clear build cache and retry deployment

**Build Fails?**
- Check build logs
- Verify Node version compatibility
- Try `npm install --legacy-peer-deps`

**Can't Connect to Backend?**
- Verify `VITE_API_URL` environment variable
- Check browser console for CORS errors
- Ensure backend URL is correct and accessible

**Blank Page?**
- Check browser console for errors
- Verify `dist` folder is being published
- Check if assets are loading correctly

---

## 📊 Monitoring

### Backend Monitoring:
- Response times for `/analyze` endpoint
- Error rates in FastAPI logs
- Resource usage (RAM, CPU)

### Frontend Monitoring:
- Page load times
- Asset loading
- API call success rates

---

## 🔄 Updates & Redeployment

### For Backend Updates:
1. Make changes to Python files
2. Commit and push to GitHub
3. Render auto-deploys (if enabled)
4. Or manually redeploy from dashboard

### For Frontend Updates:
1. Make changes to `frontend/` files
2. Commit and push to GitHub
3. Render auto-rebuilds static site
4. Clear browser cache to see changes

---

## 💡 Pro Tips

1. **Free Tier Limitations:**
   - Backend may sleep after inactivity (cold starts)
   - First request after sleep takes ~30 seconds
   - Consider upgrading for production use

2. **Custom Domains:**
   - Add custom domains in Render dashboard
   - Update CORS origins after adding domains

3. **Environment Management:**
   - Use different branches for staging/production
   - Set up preview deployments for PRs

4. **Performance:**
   - Monitor build times
   - Optimize frontend bundle size
   - Consider caching strategies

---

## 📱 URLs Summary

After deployment, you'll have:

- **Frontend**: `https://stock-market-frontend.onrender.com`
- **Backend API**: `https://stock-market-api-xxxx.onrender.com`
- **API Docs**: `https://stock-market-api-xxxx.onrender.com/docs`

---

**Need help?** 
- Check the main README.md
- Visit https://render.com/docs
- Check FastAPI docs: https://fastapi.tiangolo.com
- Check Vite docs: https://vitejs.dev
