import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { registerValidate } from "../Helperfunctions/validate";
import avatar from "../assets/avatar.png";
import imageConvertorBase64 from "../Helperfunctions/imageConvertor";
const Register = () => {
  const [file, setFile] = useState();
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validate: registerValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || "" });
      console.log(values);
    },
  });

  // upload image function
  const onImgUpload = async (e) => {
    console.log(e.target.files);
    const base64 = await imageConvertorBase64(e.target.files[0]);
    setFile(base64);
  };

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen ">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-4xl font-bold">Register</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Happy to join you
            </span>
          </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <label htmlFor="profile">
                <img
                  src={file || avatar}
                  className={styles.profile_img}
                  alt="avatar"
                />
              </label>
              <input
                onChange={onImgUpload}
                type="file"
                name="profile"
                id="profile"
              />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <input
                className={styles.textbox}
                {...formik.getFieldProps("email")}
                type="email"
                placeholder="Email*"
              />
              <input
                className={styles.textbox}
                {...formik.getFieldProps("username")}
                type="text"
                placeholder="Username*"
              />
              <input
                className={styles.textbox}
                {...formik.getFieldProps("password")}
                type="password"
                placeholder="Password*"
              />
              <button className={styles.btn} type="submit">
                Sign In
              </button>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                Already have an account?
                <Link className="text-red-500" to="/">
                  Login Here
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
