# Dating-App 
This app takes a mocked up API and renders a list of users in format of cards sorted by two options: distance and activity. By clicking on the card you get further details about the user. The app also implements a simple dark/light mode toggling feature.

## Installation
```
npm install
npm run dev
```

In another tab, run the server:  `npm start`

The app will be available on http://localhost:1234

## Built With
* **React**: I was initially planning to use of Hooks for the task, but after a first try I realised I was not yet comfortable with it. Therefore I ended up turning to the “old school” classes for the job.
* **CSS**: I haven’t used any framework or preprocessor scripting language. Just pure CSS (with variables, Flexbox, Grid and some media queries).
* **Parcel**: Considering the relative simplicity of the project, I chose to work with Parcel as a code bundler — instead of Webpack, which takes much more time to configure.
* **React-TimeAgo**: A simple time-ago component for React. I used this package for getting the time the user is logged on the app. 
* **React Icons**: A package that allows you to include only the icons your project is making use of. For the task, I used its Font Awesome library.

### React API
* **Context**: I took advantage of the Context API to build that simple dark/light mode functionality on the navigation bar. 
* **Portals**: For the modal/dialog with the user’s details, I turned to Portals, which permit to insert a child into a different location in the DOM. 
(You will notice that the dark/light feature don’t apply for the modal. That’s because of the complexity to manage Context and Portals together. It’s totally feasible, but considering I didn’t have much time, I let it go)

### Tooling
Regarding quality code — formatting and style —, I resorted to the combination of **Prettier** and **ESLint**. 