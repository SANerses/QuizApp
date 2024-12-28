# Quiz App Using JavaScript

This project is a JavaScript-based Quiz Application that allows users to answer programming-related questions in a timed environment. It features:

- Interactive UI/UX.
- Randomized questions.
- Timer-based gameplay.
- Dynamic scoring system.
- Win or loss feedback popups.

---

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Project Structure](#project-structure)
3. [Setup Instructions](#setup-instructions)
4. [Features](#features)
5. [How to Play](#how-to-play)
6. [Customization](#customization)

---

## Technologies Used

- **HTML**: For structuring the application.
- **CSS**: For styling the application.
- **JavaScript**: For logic, interactivity, and dynamic rendering.
- **Modules**: Organized JavaScript files for better maintainability.

---

## Project Structure

```
├── index.html         # Main HTML file
├── style.css          # Stylesheet
├── script.js          # Entry point for JavaScript modules
├── dom.js             # DOM manipulation and event listeners
├── logic.js           # Core quiz logic (e.g., questions, answers, timer)
├── data.js            # Question data
├── Readme.md          # Documentation (this file)
```

---

## Setup Instructions

1. Clone this repository to your local machine:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd quiz-app
   ```
3. Open the `index.html` file in your favorite browser to run the application.

---

## Features

- **Randomized Questions**: Questions are shuffled for every game session.
- **Timed Gameplay**: Each question has a time limit (default is 60 seconds).
- **Tab Tracking**: Monitors when users leave the tab and records the time away.
- **Popups**: Displays custom win/loss popups at the end of the quiz.

---

## How to Play

1. Click the **Start** button to begin the quiz.
2. Answer each question by selecting the desired choice.
3. If the timer runs out before answering, you lose that question.
4. Complete all questions to view your score.

### Scoring

- Each correct answer earns **1 point**.
- A score above **8/10** results in a win.

---
