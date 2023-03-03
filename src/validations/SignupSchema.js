import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(4, "Too Short!")
    .max(16, "Too Long!")
    .required("Required"),
  lastname: Yup.string()
    .min(4, "Too Short!")
    .max(16, "Too Long!")
    .required("Required"),
  phone: Yup.number(),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Too Short!")
    .max(16, "Too Long!"),
  confirmpassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

export default SignupSchema;
