## Prerequisites

Before running the project, make sure you have the following installed:

1. **Node.js and npm**: [Installation guide](https://nodejs.org/en/download/)
2. **Angular CLI**: Run `npm install -g @angular/cli` in your terminal.
3. **Git**: [Installation guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
4. **JSON Server**: Run `npm install -g json-server` for setting up a mock backend.
5. **Code Editor**: Download and install [Visual Studio Code](https://code.visualstudio.com/) or any editor of your choice.
6. **Web Browser**: Ensure you have a modern web browser installed.

(Optional) For Angular development, consider installing Angular DevTools on Chrome for better debugging.

## Cloning the Repository

```
git clone [your-repository-url]
cd [repository-name]
```

## Installing Dependencies

```
npm install
```

## Running the JSON Server

```
npm install -g json-server # If not installed
json-server --watch db.json # Assuming 'db.json' is your file
```

## Running the Angular Application

```
ng serve
```

After running the above command, the application should be accessible at http://localhost:4200/.
You can use `--open` flag to automatically open the app in the browser.

## Branches explained:

This project has multiple branches, as I decided to provide two solutions for the assigment.

- **master branch:** Includes a solution with NgRx for state management
- **frontend:** this is my starting branch that I always use to setup the project before adding functionality to the project
- **no-ngrx:** A branch with a solution for the assigment that does not include NgRx for state management. Please be aware that no-ngrx branch uses Angular 15, and the master branch is updated to Angular 17 due to the usage of NgRx. This is because I did the no NgRx solution first, and when I wanted to do the NgRx solution Angular had to be updated for NgRx to work properly. I did not go back and update this branch because it is not needed for the solution to work.

## Project Structure

- **src/app:** Main application code,
- **src/app/components:** Angular components. In this case only the data-form component,
- **src/assets:** Static assets like images, icons, etc.,
- **src/app/state:** NgRx actions, effects, reducers and selectors,
- **src/app/services:** services like crud and auth,
- **src/app/models:** Angular models/classes,
- **data/temps.json:** Mock database file for JSON server.

## Features

Form for adding the data (temperatures on a specific date) and a chart that displays the data. The chart is updated with relevant data once the user adds new data with the 'Submit the Data' button. The user can not input multiple temperatures for the same date and the data on the chart always displays in the chronological order, no matter how the user adds the data via form.

# Explaining my NgRx solution

Due to me not working with NgRx before I helped myself with [this tutorial](https://www.youtube.com/watch?v=kx0VTgTtSBg&ab_channel=JoshuaMorony) and the [documentation](https://ngrx.io/).

## Implementation of NgRx

To implement NgRx into the application I Installed the needed dependencies and defined appropriate actions, effects, reducers and selectors.

### Actions

Actions in NgRx represent discrete events or intentions in your application. They are objects that describe what should happen.

- `loadTemperatures`, `addTemperature`, `addTemperatureSuccess`, and `addTemperatureFailure` are action creators. They create actions that are dispatched to initiate state changes.
- `loadTemperatures` is used to request temperature data.
- `addTemperature` is used to add a new temperature to the state.
- `addTemperatureSuccess` is dispatched when adding a temperature is successful.
- `addTemperatureFailure` is dispatched when adding a temperature encounters an error.

[More on actions](https://ngrx.io/guide/store/actions).

### Effects

Effects in NgRx allow you to handle side effects, such as making HTTP requests, in a centralized and declarative way.

- `loadTemperatures$` is an effect that listens for the `loadTemperatures` action. When this action is dispatched, the effect triggers and fetches temperature data from the `dataService`. If the data is successfully fetched, it dispatches the `loadTemperaturesSuccess` action with the retrieved data. If there's an error during the fetch operation, it dispatches the `loadTemperaturesFailure` action with an error message.

- `addTemperature$` is another effect that listens for the `addTemperature` action. It checks if a temperature for the selected date already exists in the state. If it exists, it dispatches `addTemperatureFailure`. If it doesn't exist, it makes an HTTP request to add the temperature and dispatches `addTemperatureSuccess` on success or `addTemperatureFailure` on failure.

[More on effects](https://ngrx.io/guide/effects).

### Reducers

Reducers in NgRx are responsible for managing and updating the state based on dispatched actions. They define how the state should change.

- `temperaturesReducer` is responsible for handling actions related to temperature data. It defines how the temperatures array in the state should be updated. When `loadTemperaturesSuccess` is dispatched, it updates the temperatures array with the fetched data. Similarly, when `addTemperatureSuccess` is dispatched, it appends the newly added temperature to the temperatures array.

[More on reducers](https://ngrx.io/guide/store/reducers).

### Selectors

Selectors are used to query the state.

- `selectAllTemperatures` is a selector that extracts the temperatures array from the state.

[More on selectors](https://ngrx.io/guide/store/selectors).

## Testing NgRx

To test the NgRx setup it is best to perform integration testing, which means that you create testing scenarios that involve multiple components interacting with each other. As I have no experience writing such test, this application has none. It can still be tested by interacting with the application, trying to insert different data into the chart via form and seeing the results.
