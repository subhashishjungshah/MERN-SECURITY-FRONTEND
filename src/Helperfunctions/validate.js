import { toast } from "react-hot-toast";
// validate login page username
export async function usernameValidate(values) {
  const errors = usernameVerify({}, values);
  return errors;
}

//validate password
export async function passwordValidate(values) {
  const errors = passwordVerify({}, values);
  return errors;
}

// validate reset password
export async function resetPasswordValidation(values) {
  const errors = passwordVerify({}, values);
  if (values.password !== values.confirmPassword) {
    errors.notMatchPassword = toast.error("Password didn't Match..");
  }
  return errors;
}

// validate register page
export async function registerValidate(values) {
  const errors = usernameVerify({}, values);
  passwordVerify(errors, values);
  emailVerify(errors, values);
  return errors;
}

//function to validate password
function passwordVerify(error = {}, values) {
  const specialCharacter = /^[a-zA-Z0-9!@#$%\^&*)(+=._-]*$/;
  if (!values.password) {
    error.password = toast.error("Password Required...");
  } else if (values.password.includes(" ")) {
    error.password = toast.error("Invalid Password...");
  } else if (values.password.length < 4) {
    error.password = toast.error("Password Must be more than 3 characters");
  } else if (specialCharacter.test(values.password)) {
    error.password = toast.error("Password Must contain special character");
  }
  return error;
}

// validate username
function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("Username is required");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid Username...");
  }
  return error;
}

function emailVerify(error = {}, values) {
  if (!values.email) {
    error.email = toast.error("Email is empty...");
  } else if ((values.email.includes = " ")) {
    error.email = toast.error("Invalid email address...");
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
  ) {
    error.email = toast.error("Email format doesn't match..");
  }
}
