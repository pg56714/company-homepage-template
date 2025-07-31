#!/bin/bash
echo "🧹 Removing old container..."
docker rm -f next-main-app

echo "🐳 Rebuilding Docker image..."
docker build -t my-next-app .

echo "🚀 Starting container..."
docker run -d --restart unless-stopped --name next-main-app my-next-app

echo "✅ Done! App is live on http://localhost:3000"
