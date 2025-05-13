# 💰 Angular Investment Calculator

A simple Angular application that allows users to input investment details and view projected growth over time. The app calculates and displays annual investment returns using compound interest logic.

## 📦 Features

- Input form for initial investment, annual contributions, expected return rate, and investment duration
- Dynamic result display in a table format
- Currency formatting for financial values
- Modular, standalone Angular components

## 🛠️ Technologies Used

- Angular (Standalone Components)
- TypeScript
- HTML & CSS
- Angular Forms
- Angular CurrencyPipe

## 📁 Project Structure

```src/
├── app/
│ ├── header/
│ │ ├── header.component.ts
│ │ ├── header.component.html
│ │ └── header.component.css
│ ├── user-input/
│ │ ├── user-input.component.ts
│ │ ├── user-input.component.html
│ │ └── user-input.component.css
│ ├── investment-results/
│ │ ├── investment-results.component.ts
│ │ ├── investment-results.component.html
│ │ └── investment-results.component.css
│ ├── investment-input.model.ts
│ └── app.component.ts (main component hosting others)

```
## ✨ Usage
1. Enter:
  - Initial investment amount
  - Annual investment amount
  - Expected return rate
  - Duration (in years)
2. Click Calculate
3. View the yearly breakdown of your investment, interest earned, and total value

📄 License
1. This project is licensed under the MIT License — see the LICENSE file for details.












