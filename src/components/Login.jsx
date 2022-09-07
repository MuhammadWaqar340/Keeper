import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const Login = () => {
  return (
    <>
      <div>
        <Formik
          initialValues={{ name: "", password: "" }}
          validationSchema={Yup.object({
            name: Yup.string().required("User Name is required"),
            password: Yup.string().required("Password is required"),
          })}
          onSubmit={() => console.log("Form Submitted")}
        >
          <Form>
            <div>
              <div className="required">
                <label htmlFor="name">User Name</label>
                <Field name="name" placeholder="User Name" />
                <div>
                  <ErrorMessage name="name" />
                </div>
              </div>
              <div className="required">
                <label htmlFor="password">Password</label>
                <Field type="password" name="password" placeholder="Password" />
                <div>
                  <ErrorMessage name="password" />
                </div>
              </div>
            </div>
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
      </div>
    </>
  );
};

export default Login;
