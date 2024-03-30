<div align="center">
  <H1>Technical Assessment for MCA</H1>
  <a href="https://mca-front-test.vercel.app/">Live Demo</a> ·
  <a href="./README.es.md">Readme en español</a>
  <p/>
  <p/>
    
  ⚠️ **WARNING: Before running the app or using the demo, make sure to visit [CORS Anywhere](https://cors-anywhere.herokuapp.com/) and enable the demo server** ⚠️
  
  Missing this step will result in all fetches failing!
</div>

## Summary

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

## Considerations

I have had to make some changes due to limitations with iTunes and my tech stack, listed as follow:

- The loading indicator in the header is displayed when there's a fetch occurring in the background INSTEAD of when a navigation is happening. This is because the React navigation is almost immediate.
- The descriptions of the podcasts are being scraped from the `feedUrl` provided by the iTunes API. This is because at the moment of developing this app, the `/lookup` endpoint didn't return a `description` or `summary` property for a podcast entity. I still wanted to show the description, so I was able to scrape it from the podcast website.

## Running the Tests

I have included acceptance tests for the main acceptance criteria outlined in the assignment PDF.

The tests have been implemented using Vitest, React Testing Library and MSW as an API mock server.

To execute the tests, follow these steps:

1. Open a terminal in the project's root directory.
2. Run the following command to install dependencies:

```bash
npm install
```

3. Run the tests with the following command:

```bash
npm run test
```

## Running the Application

### Development Mode

In development mode, assets are served without minification.

To run the application in development mode, follow these steps:

1. Clone this repository to your local machine.
2. I'm using `CORS-Anywhere` to avoid CORS issues with the iTunes API, so you may need to visit https://cors-anywhere.herokuapp.com/ and click on the "Request temporary access to the demo server" so the app can get resutls from iTunes
3. Open a terminal in the project's root directory.
4. Run the following command to install dependencies:

```bash
npm install
```

5. After installing dependencies, run the following command to start the development server:

```bash
npm start
```

This will start the development server and automatically open the application in your default browser.

### Production Mode

In production mode, assets are served minified for better efficiency.

To run the application in production mode, follow these steps:

1. Clone this repository to your local machine.
2. I'm using `CORS-Anywhere` to avoid CORS issues with the iTunes API, so you may need to visit https://cors-anywhere.herokuapp.com/ and click on the "Request temporary access to the demo server" so the app can get resutls from iTunes
3. Open a terminal in the project's root directory.
4. Run the following command to install dependencies:

```bash
npm install
```

5. After installing dependencies, run the following command to generate optimized files:

```bash
npm run start:prod
```

This will start the production server and automatically open the application with minified assets in your default browser.

## Other Available Commands

- `npm build`: This command builds the app into minified assets so it can get deployed to a web server
