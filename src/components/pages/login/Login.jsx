import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import logo from "../../../assets/images/logo.jpg";
import { useNavigate } from "react-router-dom";
import signupImage from "../../../assets/images/signupimage.jpg";
// import Signup from "../signup/Signup";
const Login = () => {
  const navigate = useNavigate();
  const formItems = [
    {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Enter your Email Address",
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Enter your Password",
    },
  ];
  const schema = yup.object().shape({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
  });
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="h-fit ">
        <img src={signupImage} />
      </div>
      <div className="bg-white p-6 px-20 h-fit w-fit ">
        <div className="flex flex-col justify-center  items-center ">
          <div className=" h-28 w-28 ">
            <img src={logo} className="h-fit w-fit" />
          </div>
          <div className="text-2xl text-mainColor font-bold">Login</div>
        </div>
        <hr className="mb-5 mt-2" />
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmpassword: "",
          }}
          validationSchema={schema}
          onSubmit={(val) => {}}
        >
          {({ handleSubmit }) => {
            return (
              <Form onSubmit={handleSubmit}>
                {formItems.map((val, i) => {
                  return (
                    <div className="grid grid-cols-1 place-content-center p-2">
                      <label
                        htmlFor={val.name}
                        className="grid grid-rows-1 text-xs"
                      ></label>
                      <div className="flex flex-col">
                        <div>
                          {" "}
                          <Field
                            type={val.type}
                            name={val.name}
                            placeholder={val.placeholder}
                            className="border-b-[1px] border-gray-400  rounded-sm outline-none p-2  pr-24 text-xs"
                          />
                        </div>
                        {/* <ErrorMessage
                            name={val.name}
                            component="div"
                            className="text-red-600 text-sm"
                          /> */}
                      </div>
                    </div>
                  );
                })}

                <div className="flex flex-col gap-3 mt-5">
                  <div className="text-xs  text-mainColor text-center cursor-pointer">
                    Forget password?
                  </div>

                  <div className="bg-mainColor text-white p-2 w-full rounded-md  mx-auto text-center cursor-pointer hover:bg-white hover:text-mainColor hover:border-2 hover:scale-110 ease-in-out delay-100 duration-100">
                    <button type="submit">Login</button>
                  </div>
                  <div
                    className="text-mainColor text-xs text-center cursor-pointer"
                    onClick={() => {
                      navigate("/signup");
                    }}
                  >
                    create a new account
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
