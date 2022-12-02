export default function customFormValidator(tempState, checkObj) {
    let isError = false;
    Object.keys(checkObj).forEach(x => {
        const objVal = checkObj[x] ? checkObj[x].toString().trim() : '';
        const xformObj = tempState[x];
        let objHasError = false;
        xformObj.checkParams.forEach(param => {
            if (!objHasError) {
                xformObj.error.message = '';
                xformObj.error.isError = false;
                // eslint-disable-next-line default-case
                switch (param) {
                    case 'required':
                        if (!objVal.length) {
                            isError = true;
                            objHasError = true;
                            xformObj.error.message = 'Required Field';
                            xformObj.error.isError = true
                        }
                        break;
                    case 'regexValidation':
                        const regex = new RegExp(xformObj.validation)
                        if (!regex.test(objVal) && objVal !== null && objVal !== "") {
                            isError = true;
                            objHasError = true;
                            xformObj.error.message = 'Invalid input.';
                            xformObj.error.isError = true
                        }
                        break;
                }
            }
        })
    });
    return { isError, tempState };
}