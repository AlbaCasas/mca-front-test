# Technical Assessment for MCA

This is a technical assessment developed by Alba Casas Arzúa as part of the interviewing process for MCA

It consists on a Podcast Player with the following features:

- Lists the top 100 podcasts from itunes
- Allows users to filter these podcasts by name and author
- Provides access to each podcast and displays available episodes
- Enables users to play the episodes

## Tech Stack

This webapp has been developed with the following technologies:

- React
- React-Router for SPA navigation
- React-Query as a solution for data fetching and caching (24 hours local cache requeriments)
- TailwindCSS as a solution for inline styling
- Webpack for bundling the application in different modes

All the code has been written in TypeScript to ensure type safety

## Running the Application

### Development Mode

In development mode, assets are served without minification.

To run the application in development mode, follow these steps:

1. Clone this repository to your local machine.
2. Open a terminal in the project's root directory.
3. Run the following command to install dependencies:

```bash
npm install
```

4. After installing dependencies, run the following command to start the development server:

```bash
npm start
```

This will start the development server and automatically open the application in your default browser.

### Production Mode

In production mode, assets are served minified for better efficiency.

To run the application in production mode, follow these steps:

1. Clone this repository to your local machine.
2. Open a terminal in the project's root directory.
3. Run the following command to install dependencies:

```bash
npm install
```

4. After installing dependencies, run the following command to generate optimized files:

```bash
npm run start:prod
```

This will start the production server and automatically open the application with minified assets in your default browser.

## Other Available Commands

- `npm build`: This command builds the app into minified assets so it can get deployed to a web server
