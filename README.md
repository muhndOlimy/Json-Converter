# JSON-Converter

## Overview
This is JSON Re-presentaion platform allows users to convert JSON to data-table and be able to paginate, filter, providing a convenient displaying experience.

## Up & Going

#### install node modules
```
npm i
```
#### run the app in dev mode
```
ng s
```
## Authentication approach
Given the absence of an authentication API, I opted for a local storage approach to manage user credentials. I also utilized the ‘Forgot Password’ feature to display the list of existing users, allowing them to authenticate.

I didn’t find many design options to differentiate screens based on user roles. However, I created a getter in the authentication service that effectively handles role identification and ensures the correct interface is displayed for each user.

## Validation approach
I opted for the FormBuilder approach with custom validators due to the simplicity of the project. However, when dealing with larger datasets, a more efficient solution would be to employ a Web Worker. This involves sending a message containing the JSON data for validation, allowing the Web Worker to handle the intensive processing. The main thread can then listen for messages from the worker, ensuring optimal performance.

## File & structure
Pages: Contains all component that get routed (views) and have postfix -page.component.ts to extingush them from buildup components

Components:contains all build components for the pages components.

Interfaces: Contains all interfaces for the app

Services: Contains all fetching services for the app.

And contains other folder like: pipes, guards, etc...

```
├── app
│   ├── app.component.ts
│   ├── app.config.ts
│   ├── app.routes.ts
│   ├── components
│   │   ├── data-table
│   │   │   ├── data-table.component.html
│   │   │   ├── data-table.component.scss
│   │   │   └── data-table.component.ts
│   │   ├── filter
│   │   │   ├── filter.component.html
│   │   │   ├── filter.component.scss
│   │   │   └── filter.component.ts
│   │   ├── json-textarea
│   │   │   ├── json-textarea.component.html
│   │   │   ├── json-textarea.component.scss
│   │   │   └── json-textarea.component.ts
│   │   └── navbar
│   │       ├── navbar.component.html
│   │       ├── navbar.component.scss
│   │       └── navbar.component.ts
│   ├── guards
│   │   └── auth.guard.ts
│   ├── helpers
│   │   └── extractKeysForTable.ts
│   ├── interfaces
│   │   └── common.ts
│   ├── pages
│   │   ├── login-page
│   │   │   ├── login-page.component.html
│   │   │   ├── login-page.component.scss
│   │   │   └── login-page.component.ts
│   │   └── main-page
│   │       ├── main-page.component.html
│   │       ├── main-page.component.scss
│   │       └── main-page.component.ts
│   ├── pipes
│   │   └── filter-by-fields.pipe.ts
│   ├── services
│   │   ├── JsonState.service.ts
│   │   └── authentication.service.ts
│   └── validators
│       └── jsonArrayValidator.ts
├── index.html
├── main.ts
└── styles.scss
```


# Management state
I choosed signals in a shared service to manage the application’s state, as its simplicity negates the need for a more complex solution. Additionally, this approach ensures optimal performance.
