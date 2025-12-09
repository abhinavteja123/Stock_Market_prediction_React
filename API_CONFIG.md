# Frontend API Configuration Guide

## Setting Up API Connection

The frontend needs to know the backend API URL. This differs between local development and production.

## Environment Variables

Create these files in the `frontend/` directory:

### `.env.development` (for local development)
```env
VITE_API_URL=http://localhost:8000
```

### `.env.production` (for production deployment)
```env
VITE_API_URL=https://your-backend-api.onrender.com
```

## Using in Code

In your React components or API utility files:

```javascript
// Get API URL from environment variable with fallback
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

// Example API call
const analyzeStock = async (symbol) => {
  const response = await fetch(`${API_BASE_URL}/analyze`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      symbol: symbol,
      validation_split: 20,
      lstm_epochs: 50,
      lstm_batch_size: 32,
      lstm_window_size: 60,
    }),
  });
  
  return await response.json();
};
```

## Render Environment Variable Setup

When deploying the frontend as a **Static Site** on Render:

1. Go to your Static Site settings
2. Navigate to "Environment" tab
3. Add environment variable:
   - **Key**: `VITE_API_URL`
   - **Value**: `https://stock-market-api-xxxx.onrender.com` (your actual backend URL)

## Backend CORS Configuration

Update `server.py` to allow your frontend domain:

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://stock-market-frontend.onrender.com",  # Production frontend
        "http://localhost:5173",  # Local development
        "http://localhost:3000",  # Alternative local port
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

## Verification

After deployment, verify the connection:

1. Open browser DevTools (F12)
2. Go to Network tab
3. Trigger an API call from frontend
4. Check:
   - Request goes to correct URL
   - No CORS errors
   - Response is received

## Common Issues

### "Failed to fetch" error
- Check if backend URL is correct
- Verify backend is running and accessible
- Check browser console for CORS errors

### CORS errors
- Update `allow_origins` in backend
- Redeploy backend after CORS changes
- Clear browser cache

### Environment variable not working
- Ensure variable name starts with `VITE_`
- Rebuild frontend after adding env vars
- Check that env file is in `frontend/` directory
- For Render: Add env var in dashboard and trigger redeploy
