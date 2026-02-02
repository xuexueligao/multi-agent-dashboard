#!/bin/bash

# Vercel build script for multi-agent dashboard

echo "Preparing build for Vercel..."
echo "Current directory: $(pwd)"

# Install dependencies
npm install

# Build the application
npm run build

# Ensure index.html is in the root for Vercel
if [ -f "dist/index.html" ]; then
  echo "Build successful!"
  echo "Files in dist/:"
  ls -la dist/
else
  echo "Build failed - no index.html in dist/"
  exit 1
fi