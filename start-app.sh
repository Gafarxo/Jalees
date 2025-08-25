#!/bin/bash

echo "Starting Jalees Booklist App..."
echo

echo "Starting Backend Server..."
cd backend && npm start &
BACKEND_PID=$!

echo "Waiting 3 seconds for backend to start..."
sleep 3

echo "Starting Frontend Server..."
cd ../frontend && npm start &
FRONTEND_PID=$!

echo
echo "Both servers are starting..."
echo "Backend: http://localhost:4000"
echo "Frontend: http://localhost:3000"
echo
echo "Press Ctrl+C to stop both servers..."

# Wait for user to stop
wait
