# 📰 NewsApp

NewsApp is a React-based web application that fetches and displays the latest news headlines from around the world. The application uses the News API to retrieve news articles and displays them in a user-friendly interfaces.

## 📁 Project Structure
newsapp/ ├── .gitignore ├── package.json ├── public/ │ ├── favicon.ico │ ├── image.png │ ├── index.html │ ├── logo192.png │ ├── logo512.png │ ├── manifest.json │ ├── robots.txt ├── README.md ├── sampleOutput.json ├── src/ │ ├── App.css │ ├── App.js │ ├── App.test.js │ ├── components/ │ │ ├── navbar.js │ │ ├── News.js │ │ ├── NewsItem.js │ ├── index.css │ ├── index.js │ ├── logo.svg │ ├── reportWebVitals.js │ ├── setupTests.js



## 🚀 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

## 🧩 Project Components

### `src/App.js`

The main component of the application. It renders the `Navbar` and `News` components.

### `src/components/navbar.js`

A component that renders the navigation bar of the application.

### `src/components/News.js`

A component that fetches news articles from the News API and renders them using the `NewsItem` component. It also includes pagination functionality.

### `src/components/NewsItem.js`

A component that renders individual news articles.

### `src/reportWebVitals.js`

A utility file for measuring the performance of the application.

### `public/index.html`

The HTML template for the application.

### `public/manifest.json`

The web app manifest file that provides metadata used when the web app is installed on a user's mobile device or desktop.

## 🌐 API Integration

The application uses the News API to fetch news articles. You need to replace the `apiKey` in the `src/components/News.js` file with your own API key from [News API](https://newsapi.org/).

## 📚 Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
