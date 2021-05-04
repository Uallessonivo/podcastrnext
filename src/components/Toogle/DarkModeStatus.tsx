import useDarkMode from "use-dark-mode";

const DarkModeStatus = () => {
  const { value } = useDarkMode(false);

  return value ? true : false;
};

export default DarkModeStatus;
