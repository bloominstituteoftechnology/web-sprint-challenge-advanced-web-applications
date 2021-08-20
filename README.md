# Advanced Web Applications Sprint Challenge

- [Advanced Web Applications Sprint Challenge](#advanced-web-applications-sprint-challenge)
  - [Overview](#overview)
  - [Introduction](#introduction)
  - [Instructions](#instructions)
    - [Task 1: Project Setup](#task-1-project-setup)
    - [Task 2: CodeGrade Setup](#task-2-codegrade-setup)
    - [Task 3: Project Requirements](#task-3-project-requirements)
      - [Authentication](#authentication)
      - [Consuming the API](#consuming-the-api)
      - [Testing](#testing)
    - [Reference Materials](#reference-materials)
      - [API Documentation](#api-documentation)
      - [Hex Color Examples](#hex-color-examples)
  - [Submission format](#submission-format)
  - [Interview Questions](#interview-questions)
  - [Rick Mansfield's push/pull trail for Advanced Web Apps Sprint](#rick-mansfields-pushpull-trail-for-advanced-web-apps-sprint)

## Overview

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **advanced web applications**. During this sprint, you studied **React testing, client-side auth, HTTP methods, and Vercel**.

In your challenge this week, you will demonstrate your mastery of these skills by creating **a login page** and **basic CRUD application.**

This is an individual assessment. All work must be your own. All projects will be submitted to codegrade for automated review. You will also be given feedback by code reviewers the Monday after challenge submissions. For more information on the review process [click here.](https://www.notion.so/lambdaschool/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support by dropping a :wave: in your help channel when needed.

## Introduction

In this project you will create a login page and request a token from the server that you'll use to send all other requests to the server. You will then be able to fetch the color data array, update data, and delete data, and watch the fun happen!

## Instructions

### Task 1: Project Setup

* [ ] Fork and clone this repository.
* [ ] Create a new branch with the 
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.
* [ ] **RUN** `npm install` to install your dependencies.
* [ ] **RUN** `npm start` to start your application.

### Task 2: CodeGrade Setup

* [ ] Open the assignment in Canvas and click on the "Set up git" option.
* [ ] Follow instructions to set up Codegrade's Webhook and Deploy Key, making sure your deployment is set to your `<firstName-lastName>`.
* [ ] Push your first commit: `git commit --allow-empty -m "first commit" && git push`
* [ ] Check to see that Codegrade has accepted your git submission.

### Task 3: Project Requirements

Your finished project must include all of the following requirements. **Unlike other projects, the local server used here can not be accessed through the browser. It is started automatically and without the need for starting a server.js file. Feel free to ignore any messages related to MSW or mock service workers. For this and the rest of your sprint challenges, test the functioning of the server directly through your http calls.**

**See reference materials at the bottom of the this document for details on use the API.**

#### Authentication
> *Build a login form to authenticate your users along with all the components and utilities needed to support authentication.*

* [ ] In `Login.js`, build all UI and state functionality needed to capture a username and password.
* [ ] Add in two routes that display the login component, one for the default path '/' and one for the login path '/login'.
* [ ] **Make sure that the input for your username and password includes the id="username" and id="password" attributes. Codegrade autotests will fail without them.**
* [ ] Build in functionality that would allow an error to be displayed in the provided p tag if either the username or password is incorrect.
* [ ] **Make sure your error p tag has an id="error" attribute attached. Codegrade autotests will fail without them.**
* [ ] Construct an http request that retrieves an auth token from the server when the username `Lambda` and the password `School` is passed into the request.
* [x] Save the token to localStorage.
* [x] Build a `axiosWithAuth` module within the helpers folder to create an instance of axios with the authentication header.
* [x] Build a `PrivateRoute` component within the components folder and use it to protect the route that renders the `BubblesPage` component.
* [x] In `App.js`, build the backend to the logout button. When pressed, send an http request to the logout endpoint and remove the authentication token from localStorage. Use window.location.href to redirect to the login page.

#### Consuming the API
> *Add in the http requests and state changes needed to connect our api to the web application. Consider the effect of authentication on your api requests.*

* [x] In `services/fetchColorServices.js`, build out fetchColorService function to make a GET request to fetch the color data for your bubbles.
* [x] When `BubblePage` mounts, call fetchColorServices and save it's result in state.
* [x] In `BubblePage.js`, complete `saveEdit`, and `deleteColor` functions to make API requests for to editing and delete data.
* [x] Watch and enjoy as your app responds to updates in the data. Check out `Bubbles.js` to see how this is built.

#### Testing
* [ ] Finish the test in `Color.test.js`, `ColorList.test.js`, `BubblePage.test.js`. You will need to use rerendering, function mocking and spies in order to complete.
* [ ] * [ ] Note to self ... I used this data 
  ![res.data for colors](src\assets\Capture1.JPG)
  view in readme.md preview mode to see pic

**Notes:**
* You are welcome to create additional files but **do not move or rename existing files** or folders.
* Do not change your `package.json` file except to install additional libraries.
* In your solution, it is essential that you follow best practices and produce clean and professional results.
* Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work.
* It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Reference Materials

#### API Documentation
* **[POST]** * to `http://localhost:5000/api/login`: returns a token to be added to the header of all other requests. Pass in the following credentials as the `body` of the request: `{ username: 'Lambda', password: 'School' }`
* **[POST]** * to `http://localhost:5000/api/logout`: returns a token to be added to the header of all other requests.
* **[GET]** to `http://localhost:5000/api/colors`: returns the list of colors and their hex codes. This endpoint canYeah only be accessed by an autheticated user.
* **[POST]** to `http://localhost:5000/api/colors`: creates a new color object. Pass the color as the `body` of the request (the second argument passed to `axios.post`). This endpoint can only be accessed by an autheticated user.
* **[PUT]** to `http://localhost:5000/api/colors/:id`: updates the color using the `id` passed as part of the URL. Send the color object with the updated information as the `body` of the request (the second argument passed to `axios.put`). This endpoint can only be accessed by an authenticated user.
* **[DELETE]** to `http://localhost:5000/api/colors/123`: removes the color using the `id` passed as part of the URL (123 in example). This endpoint can only be accessed by an autheticated user.

#### Hex Color Examples
**Note** You can use the sites like the following to get color hex codes:
* [Color-Hex](https://www.color-hex.com/)

## Submission format

* [ ] Submit via Codegrade by committing and pushing any new changes.
* [ ] Submit a pull-request to merge <firstName-lastName> branch into main. **Please don't merge your own pull request and make sure you are on your own repo**
* [ ] Check codegrade for automated feedback.
* [ ] Check codegrade on Monday following the Sprint Challenge for reviewer feedback.
* [ ] Any changes pushed to your <firstName-lastName> branch will resubmitted to codegrade if pushed before the sprint challenge deadline. Changes after the deadline will not be reviewed.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. Add your answers to the questions within `interview_answers.md` file. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. Explain what a token is used for.
2. What steps can you take in your web apps to keep your data secure?
3. Describe how web servers work.
4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

## Rick Mansfield's push/pull trail for Advanced Web Apps Sprint

- [Link for convenience](https://github.com/LambdaSchool/web-sprint-challenge-advanced-web-applications/pull/141) 