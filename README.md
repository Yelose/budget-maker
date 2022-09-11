# BudgetMaker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.4.

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

```mermaid

%%{init: {'theme': 'base', 
'themeVariables': { 
    'primaryColor': 'lightblue', 
    'edgeLabelBackground':'', 
    'tertiaryColor': '#fff0f0',
    "actorTextColor": "#fff",
    "textColor": "#712E3D",
    "actorBorder": "blue"
    }}}%%
erDiagram
    ClientModel{
        id number
        name string
        surname string
        phone number
        email string
        adress string
            }

    ProductModel{
        id number
        name string
        price number
        img stringarray
        waterproof boolean
        color string
        class number
        floorheating boolean
        warranty number
        ref string
        collection string
        length number
        width number
        height number
        planks number
        type number
        tittle string

    }

```
