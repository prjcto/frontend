import API from "../../api/api";

const signin = ({ setisLoading, values, resetForm, toast }) => {
  setisLoading(true);
  API.post(`/user/signin`, values)
    .then((res) => {
      if (res.data.message === "Auth successful") {
        resetForm();
        localStorage.setItem("token", res.data.token);
        window.location.href = "/";
      }
    })
    .catch((err) => {
      setisLoading(false);
      if (err.response.data.message === "Account is not verified!") {
        toast({
          title: "Your account is not verified!",
          status: "error",
          position: "bottom-right",
          duration: 1500,
          isClosable: true,
        });
      } else {
        toast({
          title: "The account username or password is incorrect.",
          status: "error",
          position: "bottom-right",
          duration: 1500,
          isClosable: true,
        });
      }
    });
};

export default signin;
