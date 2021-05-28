# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


UI Exercise
Create a single dashboard webpage where you can:
* See user profiles in a main panel (thumbnail, name, location(country), phone, email)
* Search by name (really basic free text search)
* Order by either name or location
* Click on any item to see additional details (any data of your choice)

Additional rules
* Use a random data REST API to get the data (https://random-data-api.com/documentation - Users or any similar)
* Additional details should appear animated (e.g., 3d fold-out) in a new panel next to the main panel
* Additional details panel should show a skeleton loading for at least 2 seconds before displaying actual data (even if REST call responds faster)
* You can use any framework/library for this task