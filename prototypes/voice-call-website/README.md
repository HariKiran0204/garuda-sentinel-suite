# Voice Call Prototype

This folder contains the GARUDA supporting prototype for browser-based voice communication.

## Features

- room-based voice call flow
- WebRTC and Socket.IO signaling
- host approval before participants join
- audio upload and sharing
- encrypted recording utilities and metadata storage

## Run locally

```bash
npm install
npm start
```

Default local URL: `http://localhost:3002`

## Configuration

Twilio values are now expected from environment variables instead of hardcoded credentials:

- `TWILIO_ACCOUNT_SID`
- `TWILIO_AUTH_TOKEN`
- `TWILIO_PHONE_NUMBER`

## Stack

- Node.js
- Express
- Socket.IO
- WebRTC

## Repo context

This prototype supports the main GARUDA presentation in the root `README.md`.
