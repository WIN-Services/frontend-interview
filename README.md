# WIN Front End Engineering Interview

## Interview Task

Build a responsive Contact Us form using this design spec:

https://www.figma.com/file/6xNvWB4RmOb5pMT9DU6Gar/Front-End-Interview?node-id=0%3A1

Folder Structure -

- src
    - index.js #Entry point
    - components #UI components
    - screens #screen components
        - index.js #App entry point (for now contains ContactUs and Footer simply invoked, but in the future, routes will be configured here)
        - Folder name depicts screen name, eg: contactus will be for routes like "http://localhost:3000/contact-us"
    - config #app config like theme, and api
    - assets #static assets of the app

Assumptions -

1. The two sections that "Contact Us" and "Subscribe" are part of a website where the "Subscribe" section is part of the
   footer repeating across different pages.
2. The api calls have been configured so that multiple api calls can be accommodated into the project where the url is
   named so that readability is improved and base url is seperated so environment variables can be configured and used
   to manipulate api calls in different environments
3. The project's component has been configured using Material UI's theme override option assuming that all the
   components will have project specific designs

Further Improvements -

1. The first priority should be finalise all the components and create them on top mui using a combination of theme
   override and custom styles where required.
2. While styled components are compatible with MUI, tailwind would be a better and faster alternative in cases where
   overrides don't achieve the desire result.
3. Also, tailwind serves as a better alternative as it decreases the extra nodes (HTML elements) created by layout
   components MUI provides like Box, Grid,
4. The api calls for now are just written and not handled but should actually be handled properly due to their async
   nature. For example, upon completion of the api, a notification should be shown informing user of the status of the
   form submission.