import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { passwordValidate } from "../Helperfunctions/validate";
const Password = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {},
  });
  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen ">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-4xl font-bold">Welcome Again</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Connect and Explore the world
            </span>
          </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <img
                src="https://raw.githubusercontent.com/akashyap2013/MERN_Login_App_with_ResetEmail/Main/client/src/assets/profile.png"
                className={styles.profile_img}
                alt="avatar"
              />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <input
                className={styles.textbox}
                {...formik.getFieldProps("password")}
                type="password"
                placeholder="Password"
              />
              <button className={styles.btn} type="submit">
                Sign In
              </button>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                Forgot Password?
                <Link className="text-red-500" to="/recovery">
                  Recover Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Password;
