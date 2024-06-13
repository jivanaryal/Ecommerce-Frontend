import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import logo from "../../../assets/images/logo.jpg";
import { useNavigate } from "react-router-dom";
import signupImage from "../../../assets/images/signupimage.jpg";
import google from "../../../assets/images/google.png";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

// import Signup from "../signup/Signup";
const Signup = () => {
  const navigate = useNavigate();
  const formItems = [
    {
      name: "name",
      type: "text",
      label: "Name",
      placeholder: "Enter your Email Address",
    },
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
    {
      name: "cpassword",
      type: "password",
      label: "Confirm Password",
      placeholder: "Confirm your Password",
    },
  ];
  const schema = yup.object().shape({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
  });
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="h-fit md:block hidden">
        <img src={signupImage} />
      </div>
      <div className="bg-white p-6 px-20 h-fit w-fit ">
        <div className="flex justify-center  items-center ">
          <div className=" h-28 w-28 ">
            <img src={logo} className="h-fit w-fit" />
          </div>
          <div className="text-2xl text-mainColor font-bold">Signup</div>
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
          onSubmit={(val) => {
            console.log(val);
          }}
        >
          {({ handleSubmit }) => {
            return (
              <Form onSubmit={handleSubmit}>
                {formItems.map((val, i) => {
                  return (
                    <div
                      className="grid grid-cols-1 place-content-center p-2"
                      key={i}
                    >
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
                  <div className="text-xs  text-mainColor text-center cursor-pointer"></div>

                  <div className="bg-mainColor text-white p-2  text-sm rounded-md w-full mx-auto text-center cursor-pointer hover:bg-white hover:text-mainColor hover:border-2 hover:scale-110 ease-in-out delay-100 duration-100">
                    <button type="submit">Create Account</button>
                  </div>
                  <div className="flex items-center justify-center border-2 border-gray-400 rounded-sm cursor-pointer hover:border-black delay-200 duration-300">
                    {/* <div className="w-10 h-10">
                      <img src={google} />
                    </div> */}
                    <div className="capitalize text-xs text-thirdColor ">
                      <GoogleOAuthProvider clientId="707925617788-9b8c4r32ofbfn8t8d90in35fdepqd4ao.apps.googleusercontent.com">
                        {" "}
                        {/* sign up with google */}
                        <GoogleLogin
                          onSuccess={(credentialResponse) => {
                            const decoded = jwtDecode(
                              credentialResponse?.credential
                            );

                            console.log(decoded, "dbfkjscb");
                          }}
                          onError={() => {
                            console.log("Login Failed");
                          }}
                        />
                      </GoogleOAuthProvider>
                    </div>
                  </div>
                  <div
                    className="text-xs text-thirdColor cursor-pointer text-center"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Already have account? login
                  </div>
                  <div
                    className="text-mainColor text-xs text-center cursor-pointer"
                    onClick={() => {
                      navigate("/signup");
                    }}
                  ></div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
