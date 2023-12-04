# DevDraft- Just Another Text Editor

## Introduction 📚

DevDraft is a sophisticated, browser-based text editor application that offers both online and offline functionality. Built to run as a Progressive Web Application (PWA), it provides robust data persistence capabilities, ensuring that your notes and code snippets are saved and retrievable at any time, under any conditions.

## Project Overview 🌐

Our text editor is designed to be a single-page application that satisfies all PWA criteria, ensuring a seamless user experience akin to native applications. It leverages various data persistence techniques, allowing for redundancy to cover scenarios when certain browser features are unavailable.

### Objectives 🎯

- To provide a reliable text editing experience both online and offline.
- To implement data storage with IndexedDB for instant data persistence.
- To bundle a full-stack application deployable via Heroku for universal access.

## Technical Overview 🧩

The PWA-based application utilizes the `idb` package—a lightweight wrapper around the IndexedDB API. The app is bundled with Webpack, features service worker implementation via workbox, and includes a manifest file for PWA capabilities.

## Development Process 💻

### Step 1: IndexedDB Integration

Incorporation of `idb` for immediate database creation and storage upon application start.

### Step 2: Service Worker Activation

Creating a service worker script using Workbox to manage cache and enable offline functionality.

### Step 3: Heroku Deployment

Deploying the application to Heroku with proper build scripts for a webpack-based application.

## Code Breakdown 🧠

### Main Components:

- **Backend**: Node.js and Express.js for server-side logic.
- **Frontend**: React for a dynamic user interface.
- **Data Layer**:  IndexedDB for client-side data persistence.
- **Bundling**: Webpack for module bundling and asset optimization.

## How to Use the Project 🖥️

1. Clone the repository to your local machine.
2. Run `npm install` to install dependencies.
3. Execute `npm run build` from the root directory.
3. Execute `npm run dev:start` or  `npm run start` from the root directory to start both the backend and serve the client.
4. Access the editor via `localhost:3000` in your web browser.
5. For offline use, install the application by clicking on the 'Install' button.

## Deployment

The application is deployed to Heroku. Please find the live URL and the build scripts included in the project.

## Live Application

The live application can be found here:
[Heroku Deployed Application](https://devdraft-c05641821bcf.herokuapp.com/)

## Repository

[GitHub Repository Link](https://github.com/MrSep01/DevDraft-Editor)


## Conclusion 🏁

DevDraft brings advanced text editing capabilities to your fingertips, readily accessible from any modern web browser, with or without an internet connection. Its intuitive design and robust backend ensure your data is always at hand.

## Contribution

Contributions, issues, and feature requests are welcome!

## License 📜

Distributed under the MIT License. See `LICENSE` for more information.


## Contact 📞

Feel free to reach out for any questions or suggestions by contacting Sep through [email](mailto:sep.alamouti@sepalamouti.com).

