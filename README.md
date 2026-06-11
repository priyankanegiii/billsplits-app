# Bill Splitter App

A simple Angular application that allows users to split a bill among multiple people, optionally add a tip, calculate each person's share, and generate a detailed bill summary


# Features

-> Enter bill amount and no. of people.
-> Add or skip tip.
-> Calculate final bill amount.
-> Split bill among multiple people.
-> Generate bill summary.
-> Store calculation history for future reference.
-> Responsive UI using Tailwind CSS and Angular


# Tech Stack

Angular 18+
TypeScript
Reactive Forms
Tailwind CSS
HTML
CSS

# Project Structure

bill-splitter/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── calculator/
│   │   │       ├── calculator.component.ts
│   │   │       ├── calculator.component.html
│   │   │       ├── calculator.component.scss
│   │   │       └── calculator.component.spec.ts
│   │   │
│   │   ├── models/
│   │   │   └── model.history.ts
│   │   │
│   │   ├── services/
│   │   │   └── history.service.ts
│   │   │
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   │
│   ├── index.html
│   ├── main.ts
│   └── styles.scss


# Installation

1. Clone the Repository

git clone https://github.com/priyankanegiii/billsplits-app.git

2. Navigate to the Project Folder
cd bill-splits

3. Install Dependencies
npm install

4. Run the Application
ng serve

5. Open in Browser
https://billsplits-app.vercel.app/


