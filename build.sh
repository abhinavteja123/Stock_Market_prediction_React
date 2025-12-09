#!/usr/bin/env bash
# Build script for Render deployment
# This script installs dependencies and builds the React frontend

set -o errexit  # Exit on error

echo "📦 Installing Python dependencies..."
pip install -r requirements.txt

echo "🔨 Building React frontend..."
cd frontend
npm install --legacy-peer-deps
npm run build
cd ..

echo "✅ Build completed successfully!"
