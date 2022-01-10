# React Redux Starter Lab

Objective: Learn React and Redux using TypeScript and [Redux Toolkit](https://redux-toolkit.js.org/usage/usage-with-typescript) by familiarizing yourself with the file structure, redux global store, features and pages as components, and utitlizing slices to update the global store.

Please note that this activity assumes you have working knowledge of React and Redux with JavaScript. Please refer to the React and Redux documentation for more background/foundation in these areas if needed.

This activity was scaffolded out using the [React/Redux TypeScript template](https://github.com/reduxjs/cra-template-redux-typescript). Please reference this documentation for more information about Create React App and the TypeScript template.

Additional dependencies installed include:
- [React Router](https://reactrouter.com/docs/en/v6/getting-started/installation)
- [Redux-Persist](https://github.com/rt2zz/redux-persist#readme)
- [Materialize CSS](https://materializecss.com/getting-started.html)
- [React Materialize](http://react-materialize.github.io/react-materialize/?path=/story/react-materialize--welcome)

Please refer to the documentation for these dependencies, as information on their use and implementation is not included in this activity.

---

## 1. Getting Started

Begin by cloning this repository on your command line using the command `git clone https://github.com/v-walker/ts-react-redux-starter-lab.git`. All dependencies necessary to complete this activity are included in the file "package.json" at the root of your directory. To make the application run locally, begin by inputting `npm install` in the terminal. Then start the application with `npm start`.

<br>

## 2. Understand the file structure

With [Redux Toolkit](https://redux-toolkit.js.org/usage/usage-with-typescript), you can utilize createSlice() to manage your reducers and action creators. This necessitates a different file structure than what we have used previously. 

Example Directory for this activity:
![file structure](./public/images/react-redux-file-structure.png)

Please visit the [Redux Style Guide](https://redux.js.org/style-guide/style-guide#structure-files-as-feature-folders-with-single-file-logic) for more information/discussion regarding this file structure. We have a few more folders here than are included in the style guide for organiztion purposes.

<br>

## 3. Global Store
- Based on the file structure noted above, navigate to store.ts.
- Here we have already configured for you the global state (combined reducer) along with persisted state for local storage. Typing for compatability with TS has also been included here. 
- Consider: how might you access "count" from the global store? Note: you'll need to look at the counterReducer located in ./src/features/counter/counterSlice.ts to better understand how this reducer is structured.

<br>

## 4. What the Heck is a Slice?
- Slices allow you to update state and carry out actions using action types all in one! Brilliant, isn't it?
- Read more about their usage with TypeScript here: [Redux Usage with TypeScript: Application Usage](https://redux.js.org/style-guide/style-guide#structure-files-as-feature-folders-with-single-file-logic)
- Refer to ./src/features/counter/counterSlice.ts for a working example. This example includes logic for updating the counter state using thunks, slice actions, and extra actions using "builder." Please make note of the comments included in this file, as they will help you to better understand the function of each action type.

<br>

## 5. Let's Bulid Your Own Slice, Update the Global Store, and Make a Functioning Component
- Within this application, you have the basic structure of a new feature ("TestFeature") for your application, but it doesn't work... yet!
- Create your own logic for the testFeature ("Test Page" in the (VERY BASIC) navbar).
    - Refer to TestFeature.tsx for the goal of this feature: create logic that makes Santa's List work. You will need actions to add names to the list and delete names from the list. Also, consider how you can retrieve data from the global store to show the names you have added to the list.
        - Where can you implement this logic within this file?
        - Refer back to Counter.tsx and counterSlice.ts for examples of implementation.
    - Begin by creating a new slice for testFeature in ./src/features/testFeature
        - you can call this testFeatureSlice.ts
        - remember, you will need to create an initial state and actions to update the state
        - you will not need thunks or builder to implement these basic actions.
    - Add a new piece of state to the combined reducer (located in ./src/app/store.ts)

<br>

A working example of this activity can be found here if you get stuck!: [ts-react-redux-starter-demo](https://github.com/v-walker/ts-react-redux-starter-demo/blob/main/src/features/testFeature/TestFeature.tsx)