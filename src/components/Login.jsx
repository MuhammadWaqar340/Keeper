import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const Login = () => {
  return (
    <>
      <Formik
        initialValues={{ name: "", password: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("User Name is required"),
          password: Yup.string().required("Password is required"),
        })}
        onSubmit={() => console.log("Form Submitted")}
      >
        <Form>
          <label htmlFor="name">User Name</label>
          <Field name="name" placeholder="User Name" />

          <ErrorMessage name="name" />
          <label htmlFor="password">Password</label>
          <Field name="password" placeholder="Password" />

          <ErrorMessage name="password" />
          <button
            type="submit"
            className="btn btn-lg  btn-primary me-3"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Login"
            id="liveToastBtn"
          >
            Login
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
