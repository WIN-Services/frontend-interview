# WIN Front End Engineering Interview

## Assumptions made:

1. Mobile number format is a US mobile number in the format given in the design -> (123) 456-7890
2. Zipcode is a valid 5 digit zip code
3. The submit button shall remain disabled until all the five fields are filled
4. A success popup should be shown on the submission of the form


## If given more time

1. Unit tests could be added for the component


### Note:

In Node.js v17 a security vulnerability was fixed which resulted in a breaking change in the SSL packages available on NPM. Attempting to run the project as it is results in the following error with Node.js >=v17:

`Error: error:0308010C:digital envelope routines::unsupported`

There are multiple options to fix it. One way to quickly make a change to start local development is to run the following command which enforces all vulnerability fixes for the packages.

`npm audit fix --force`
