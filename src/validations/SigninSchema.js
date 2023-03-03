import * as Yup from "yup";

const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Too Short!")
    .max(16, "Too Long!"),
});

export default SigninSchema;
