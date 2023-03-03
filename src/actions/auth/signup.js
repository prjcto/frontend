import API from "../../api/api";

const signUp = ({ values, resetForm, toast, setisLoading }) => {
  setisLoading(true);
  API.post(`/user/signup`, values)
    .then(() => {
      setisLoading(false);
      resetForm();
      toast({
        title: "Account created.",
        description: "Go check your email to verify your account.",
        status: "success",
        duration: 1500,
        position: "bottom-right",
        isClosable: true,
      });
      setTimeout(() => {
        window.location.href = "/login";
      }, 1500);
    })
    .catch(() => {
      toast({
        title: "Account already exists",
        status: "error",
        position: "bottom-right",
        duration: 1500,
        isClosable: true,
      });
      setisLoading(false);
    });
};

export default signUp;
