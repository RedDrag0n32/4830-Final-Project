# FinalBookBlog

# Running the app
## Locally (without Docker):

In one terminal:

Navigate to `backend` folder and run `node server.js` to start the backend server.

In another terminal:

Navigate to `frontend` folder and run `ng serve` to start Angular.

Go to `localhost:4200` in your browser to access the website.

## Locally with Docker:
You need to have Docker installed.

If you have `node_modules` in the `frontend` folder, for some reason the Docker build may not work.

Run `docker compose build` and wait for Docker to finish building the three containers.

Run `docker compose up` to start the containers.

Go to `localhost:4200` in your browser to access the website.

# Reference(s):
Chris Scully's Docker lecture, slides, and the example MeanStack code.

Changing where Angular generated files go. "how to change the dist-folder path in angular-cli after 'ng build'" - Stack Overflow
[https://stackoverflow.com/questions/37348045/how-to-change-the-dist-folder-path-in-angular-cli-after-ng-build](https://stackoverflow.com/questions/37348045/how-to-change-the-dist-folder-path-in-angular-cli-after-ng-build)how to change the dist-folder path in angular-cli after 'ng build'

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
