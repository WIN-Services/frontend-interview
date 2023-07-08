# WIN Front End Engineering Interview

## Interview Task

Build a responsive Contact Us form using this design spec:

https://www.figma.com/file/6xNvWB4RmOb5pMT9DU6Gar/Front-End-Interview?node-id=0%3A1

There is no need to build any backend (api layer, server, database). For simulating form submission, you can do a POST to /api/contact

## Duration

Up to 2 hours.

## Submission

1.  Clone this repo
2.  Build Contact Us Form. Suggested libraries
    -   Material UI components - [https://material-ui.com/](https://material-ui.com/)
    -   Address lookup - [https://www.npmjs.com/package/react-places-autocomplete](https://www.npmjs.com/package/react-places-autocomplete)
3.  Submit a Pull Request (PR)
4.  In the PR, include a README that includes the following:
    -   If you made any assumptions, what are they
    -   Outline what else needs to be done if given more time

## Evaluation

We are looking for:

1. Responsive design (mobile + desktop)
2. Adherence to brand standards
3. Completeness
4. Code clarity / readability

## Assumptions

1. There is no functionality to email address and subscribe button.
2. There was no mobile design specified in the figma so I have just assumed my own mobile design where most of the flex-directions change to 'column' in mobile and are 'row' in desktop view.
3. '/api/contact' is not really an api and will give 404 everytime. I am just logging all the data on console in the way it will be sent to backend.
4. I have not integrated 'Address lookup' as it was not needed anywhere. We do not have a address field in the application.

## Outline on what can be done next

1. Backend APIs can be integrated for the contact form and the subscribe form as well.
2. Contact info on the left side could also come from the backend api.
3. Design can be enhanced to follow all standards.
4. Material UI gives very little space for customizing components and makes it a bit complicated as well. I would also suggest using Tailwind CSS. Any custom CSS we have to write can come from Tailwind and the project structure wouldn't become heavy as Tailwind only includes the classes we are using in the build.
5. We can also add validations for each field.
6. We can also make a common error page if any backend api gives error.
