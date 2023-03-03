const signout = ({ toast }) => {
  window.localStorage.setItem("token", "");
  toast({
    title: "Logout Successfuly!",
    status: "success",
    duration: 1500,
    position: "bottom-right",
    isClosable: true,
  });
  setTimeout(() => {
    window.location.href = "/";
  }, 1500);
};

export default signout;
