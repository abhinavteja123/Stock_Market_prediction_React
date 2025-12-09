# 📈 Stock Market Prediction App

A full-stack machine learning application for stock market analysis and predictions with an interactive React frontend and FastAPI backend.

🔗 **Live Demo:** https://stock-market-prediction-frontend.onrender.com/

![Python](https://img.shields.io/badge/Python-3.11-blue)
![React](https://img.shields.io/badge/React-18-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-Latest-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

## ✨ Features

- 📊 **Real-time Stock Analysis** - Fetch and analyze stock data using Yahoo Finance
- 🤖 **ML Predictions** - Multiple machine learning models (LSTM, XGBoost, Random Forest)
- 📈 **Interactive Charts** - Beautiful visualizations with Plotly
- ⚡ **Fast & Modern** - React + Vite for lightning-fast UI
- 🎨 **Responsive Design** - Works seamlessly on all devices
- 🔒 **REST API** - Secure and scalable FastAPI backend

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite 5
- Plotly.js
- Tailwind CSS
- Framer Motion

### Backend
- FastAPI
- Python 3.11
- scikit-learn
- XGBoost
- TensorFlow/Keras
- yfinance
- pandas & numpy

## 🚀 Quick Start

### Prerequisites
- Python 3.11+
- Node.js 18+
- npm

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/abhinavteja123/Stock_Market_prediction_React.git
cd Stock_Market_prediction_React
```

2. **Backend Setup**
```bash
# Install Python dependencies
pip install -r requirements.txt

# Run the server
uvicorn server:app --reload
```
Backend runs at `http://localhost:8000`

3. **Frontend Setup**
```bash
cd frontend
npm install
npm run dev
```
Frontend runs at `http://localhost:5173`

## 🌐 Deployment on Render

Deploy using the included `render.yaml` blueprint:

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com)

### Manual Deployment

**Backend (Web Service):**
```bash
Build: pip install -r requirements.txt
Start: uvicorn server:app --host 0.0.0.0 --port $PORT
```

**Frontend (Static Site):**
```bash
Root Directory: frontend
Build: rm -rf package-lock.json node_modules && npm install --legacy-peer-deps && npx vite build
Publish: dist
Env Variable: VITE_API_URL=<your-backend-url>
```

## 📁 Project Structure

```
Stock_Market_prediction_React/
├── frontend/              # React application
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── App.jsx       # Main App
│   │   └── main.jsx      # Entry point
│   └── package.json
├── server.py             # FastAPI backend
├── graph.py              # ML models & predictions
├── requirements.txt      # Python dependencies
├── runtime.txt          # Python version
├── render.yaml          # Render deployment config
└── README.md
```

## 🎯 Usage

1. Open the app in your browser
2. Enter a stock symbol (e.g., `AAPL`, `GOOGL`, `TSLA`)
3. Configure analysis parameters:
   - Date range
   - Validation split
   - Model epochs
   - Batch size
4. Click **Analyze** to view predictions and visualizations

## 🌐 Deployment

Deploy using the included `render.yaml` blueprint or manually:

**Backend (Web Service):**
```bash
Build: pip install -r requirements.txt
Start: uvicorn server:app --host 0.0.0.0 --port $PORT
```

**Frontend (Static Site):**
```bash
Build: rm -rf package-lock.json node_modules && npm install --legacy-peer-deps && npx vite build
Publish: dist
Env: VITE_API_URL=<backend-url>
```

## 📊 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Serve frontend |
| POST | `/analyze` | Stock analysis & predictions |
| GET | `/docs` | API documentation |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - see LICENSE file for details

## 👤 Author

**Abhinav Teja**
- GitHub: [@abhinavteja123](https://github.com/abhinavteja123)

---

⭐ **Star this repo if you find it helpful!**
- Render for hosting platform
- FastAPI and React communities

---

⭐ Star this repo if you find it helpful!
