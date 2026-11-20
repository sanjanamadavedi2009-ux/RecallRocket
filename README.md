# RecallRocket — MemoryMint Marathon

A responsive spaced-repetition flashcard app built with HTML5, CSS3, vanilla ES6 JavaScript and an Express REST API.

## Run locally
1. Install Node.js 18 or newer.
2. In this folder run `npm install`
3. Run `npm start`
4. Open http://localhost:3000

## Features
- SM-2 scheduling with adaptive ease factor (minimum 1.3).
- 3D flashcard flip; Space flips and 1–5 rate recall.
- Daily due queue, deck creation, study activity and streak badge.
- Campus leaderboard with a live local rank/points update.
- Dark/light appearance toggle.
- LocalStorage persistence; Express endpoints for decks, reviews and leaderboard.

## Demo flow
Open Overview → Start review → flip the QuickSort card → choose **5 Perfect**.
The QuickSort demo card is seeded at repetition 1, so choosing 5 Perfect calculates the next interval as 6 days (the standard second successful interval). Continue the session to complete the daily queue and view the leaderboard.

## API
- `GET /api/decks`
- `PUT /api/decks`
- `POST /api/reviews`
- `GET /api/leaderboard`
- `GET /api/stats`

The leaderboard entries are seeded demo cohort data; review/deck changes are stored in the running server process, with browser-side persistence in LocalStorage.
