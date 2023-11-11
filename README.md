# Currency Exchange Calculator
Welcome to my simple currency calculator that I've created for learing purpuses.
This project is a part of entry level online course for Frontend developers that I'm participating in.
This project is in polish.

Thank You for stopping by.

## Demo

https://bedicooper.github.io/currency-exchange/

## Used technologies 
|   HTML        |   CSS           |   JavaScript        | ReactJS          |
| :---:         | :---:           | :---:               | :---:            |
| Google Fonts  | Normalize CSS   | ES6                 | create-react-app |
| BEM           | grid            | JSON                | Webpack          |
|               | media queries   | date handling       | Babel            |
|               | transformations | **API request**     | React DOM        |
|               |                 | fetch & **axios**  | State, Effect and Ref hooks    |
|               |                 | **async / await**   | Custom hooks     |
|               |                 |                     | setInterval      |
|               |                 |                     | Styled Components |
|               |                 |                     | **{keyframes} from styled** |

## What's inside?
My calculator is build on a simple form, for clarity, with just a few currencies to choose from. Current exchange rates come from app.currencyapi.com.

Take a look (v.0.1.0):
![looping GIF showing interaction with the app.](https://github.com/bedicooper/currency-exchange/blob/main/src/img/currExchAnimation.gif?raw=true)

### What's new? _v.0.3.1_
**0.3.1:**
Currencies and rates now updated with API requests.

**0.3.0:**
App structure overhall, custom hooks and Style Components.

**0.2.0:**
I've added a Clock component to display current date and time in one second intervals.

### How to use my App?
0. Loading screen will appear while the App waits for server response.
1. In case of data corruption or connection problem, an error message will appear.
2. If the App loaded please, enter the amount of money You want to convert,
3. Select the currency You want to convert from the first list,
4. Select the currency you are converting to, form the second list,
5. Click the button to convert,
6. The resut is displayed under the button.

### Currencies
So far I'm using requesting app.currencyapi.com's API for rates of those currencies:
- PLN
- EUR
- GBP
- USD
- CHF
- JPY

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
