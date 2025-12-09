# Stock Market Prediction React App

A full-stack machine learning application for stock market predictions with an interactive React frontend and FastAPI backend.

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com)

## 🚀 Features

- 📈 Real-time stock data fetching using Yahoo Finance
- 🤖 Machine learning predictions with scikit-learn and XGBoost
- 📊 Interactive data visualization using Plotly
- ⚡ Fast and modern React UI with Vite
- 🎨 Responsive design for all devices
- 🔄 REST API with FastAPI

## 🛠️ Tech Stack

### Frontend
- **React** - UI Framework
- **Vite** - Build tool
- **Plotly** - Data visualization
- **Tailwind CSS** - Styling

### Backend
- **FastAPI** - Python web framework
- **Uvicorn** - ASGI server
- **scikit-learn** - Machine learning
- **XGBoost** - Gradient boosting
- **yfinance** - Stock data API
- **pandas** & **numpy** - Data processing

## 📦 Installation

### Prerequisites
- Python 3.11+
- Node.js 16+
- npm or yarn

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

# Run the FastAPI server
uvicorn server:app --reload
```
The backend will be available at `http://localhost:8000`

3. **Frontend Setup** (in a new terminal)
```bash
cd frontend
npm install
npm run dev
```
The frontend will be available at `http://localhost:5173`

## 🌐 Deployment on Render

### Quick Deploy Steps:

1. **Fork/Push to GitHub**
   - Ensure your code is pushed to GitHub

2. **Create Web Service on Render**
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository

3. **Configure Service**
   ```
   Name: stock-market-prediction
   Environment: Python 3
   Build Command: chmod +x build.sh && ./build.sh
   Start Command: uvicorn server:app --host 0.0.0.0 --port $PORT
   ```

4. **Deploy**
   - Click "Create Web Service"
   - Render will automatically build and deploy your app

### Important Notes:
- The `build.sh` script handles both backend and frontend builds
- Frontend is built into `frontend/dist` and served by FastAPI
- Free tier on Render may have cold starts

## 📁 Project Structure

```
Stock_Market_prediction_React/
├── frontend/              # React application
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── App.jsx       # Main App component
│   │   └── main.jsx      # Entry point
│   ├── package.json
│   └── vite.config.js
├── server.py             # FastAPI backend server
├── graph.py              # ML models and predictions
├── requirements.txt      # Python dependencies
├── build.sh             # Build script for Render
├── runtime.txt          # Python version specification
├── .gitignore           # Git ignore rules
└── README.md            # This file
```

## 🔧 Configuration Files

### `build.sh`
Automated build script that:
- Installs Python dependencies
- Builds the React frontend
- Prepares the application for deployment

### `requirements.txt`
Python dependencies including:
- FastAPI, uvicorn
- ML libraries (scikit-learn, xgboost)
- Data processing (pandas, numpy, yfinance)

### `runtime.txt`
Specifies Python version: `python-3.11.0`

## 🧪 API Endpoints

- `GET /` - Serves the React frontend
- `POST /predict` - Stock prediction endpoint
- `GET /health` - Health check endpoint

## 📝 Usage

1. Open the application in your browser
2. Enter a stock ticker symbol (e.g., AAPL, GOOGL, MSFT)
3. View historical data and predictions
4. Analyze the interactive charts

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Abhinav Teja**
- GitHub: [@abhinavteja123](https://github.com/abhinavteja123)

## 🙏 Acknowledgments

- Yahoo Finance for stock data API
- Render for hosting platform
- FastAPI and React communities

---

⭐ Star this repo if you find it helpful!
