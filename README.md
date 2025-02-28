# Project Overview

This project is a modern web application built using Next.js, Tailwind CSS, and Framer Motion. It features five main sections: Header, Hero, Details, Sponsors, and Footer. 
The project also incorporates components from Aceternity UI, such as the Canvas Reveal Effect, Gradient Background, SparklesCore to enhance user experience with dynamic animations.

## Technologies Used

#### Next.js/React.js
A popular React framework for building server-side rendered (SSR) and statically generated websites. It was chosen for its performance, SEO benefits, and ease of development.

#### Tailwind CSS
A utility-first CSS framework that allows for rapid styling and customization. It was selected for its flexibility and responsiveness.

#### Framer Motion
A powerful animation library that simplifies adding smooth animations to components. It was chosen to enhance user interaction and engagement.

#### Aceternity UI Components
Utilized for their pre-built, customizable components that integrate well with Tailwind CSS and Framer Motion. Very helpful for implementing beautifully animated components on the go.

## Setup Instructions
To run this project locally, follow these steps:

### Clone the Repository:

```bash
git clone https://github.com/Shivansh-22866/dcodeblocks.git
```

### Navigate to the Project Directory:

```bash
cd dcodeblocks
```

### Install Dependencies:
Ensure you have Node.js installed on your system. Then, run:

```bash
npm install
```

### Start the Development Server:

```bash
npm run dev
```

Open in Browser:
Navigate to `http://localhost:3000` in your web browser to view the application.

### Environment Variables
No specific environment variables are required for this project. However, if you plan to integrate external APIs or services, you may need to set environment variables for API keys or other sensitive data.

### Dependencies

- Next.js: `next` (version 15.1.7)
  A React framework for building server-side rendered (SSR) and statically generated websites.

- Tailwind CSS: `tailwindcss` (version 3.4.1)
  A utility-first CSS framework for styling.

- Framer Motion: `framer-motion` (version 12.4.7)
  A powerful animation library for React.

- Three.js: `three` (version 0.174.0)
  A JavaScript library used for creating and rendering 3D graphics in the browser.

- @react-three/fiber: `@react-three/fiber` (version 9.0.4)
  A React renderer for Three.js.

- tsParticles: `@tsparticles/engine`, `@tsparticles/react`, `@tsparticles/slim` (versions 3.8.1, 3.0.0, 3.8.1 respectively)
  A lightweight JavaScript library for creating particles animations.

These dependencies are crucial for the core functionality and styling of the application, note that React-three is used specifically for Aceternity UI components like Canvas Reveal Effect.

## Project Structure

```
dcodeblocks/
├── src/
    ├── app/
        ├── assets/
            ├── fonts/ (...font assets)
            ├── images/ (...images and logos used across the project)
            ├── videos/ (...video assets)
        ├── components/
            ├── ui/ (...Aceternity UI components)
            ├── CustomButton.tsx
            ├── LoadingScreen.tsx
            ├── Navbar.tsx
        ├── sections/
            ├── Hero.tsx
            ├── Header.tsx
            ├── Details.tsx
            ├── Sponsors.tsx
            ├── Footer.tsx
        ├── favicon.ico
        ├── globals.css
        ├── layout.tsx
        ├── page.tsx
    ├── lib/
        ├── utils.ts
├── package.json
└── README.md
```

## Contributing
Contributions are welcome! If you have suggestions or improvements, please submit a pull request with a detailed description of your changes.
