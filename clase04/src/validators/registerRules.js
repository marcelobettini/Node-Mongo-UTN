const validation = new JustValidate('#registration-form')

validation
    .addField("#firstName", [
        {
            rule: "required",
            errorMessage: "First Name is required"
        },
        {
            rule: "minLength",
            value: 2,
            errorMessage: "First Name should be at least 2 characters long"
        },
        {
            rule: "maxLength",
            value: 25,
            errorMessage: "First Name should not exceed 25 characters"
        }
    ])
    .addField("#lastName", [
        {
            rule: "required",
            errorMessage: "Last Name is required"
        },
        {
            rule: "minLength",
            value: 2,
            errorMessage: "Last Name should be at least 2 characters long"
        },
        {
            rule: "maxLength",
            value: 25,
            errorMessage: "Last Name should not exceed 20 characters"
        }
    ])
    .addField("#email", [
        {
            rule: "required",
            errorMessage: "Email is required"
        },
        {
            rule: "email",
            errorMessage: "Email is not valid"
        }
    ])
    .addField("#password", [
        {
            rule: "required",
            errorMessage: "Password is required"
        },
        {
            rule: "strongPassword",
            errorMessage: "Password should be at least 8 characters long, 1 upper, 1 lower, 1 number 1 special"
        },

    ])
    .addField("#confirmPassword", [
        {
            rule: "required",
            errorMessage: "You must repeat the password"
        },
        {
            validator: (value, fields) => {
                return value === fields["#password"].elem.value
            },
            errorMessage: "Passwords do not match"
        }

    ])
//on success, send data to backend

