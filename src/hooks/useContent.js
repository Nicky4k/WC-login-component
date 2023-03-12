import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const useContent = (isLoading, showToast, isError) => {
  let content = "";

  if (isLoading)
    content = {
      message: "Please wait",
      icon: (
        <FontAwesomeIcon
          icon={faSpinner}
          className="text-blue-700 w-7 h-7 text-xl animate-spin"
        />
      ),
    };

  if (isError)
    content = {
      message: "Something went wrong",
      icon: (
        <FontAwesomeIcon
          icon={faExclamationTriangle}
          className="text-red-500  text-xl animate-ping"
        />
      ),
    };

  if (showToast)
    content = {
      message: "Login successful",
      icon: (
        <FontAwesomeIcon icon={faCheck} className="text-green-500 text-5xl " />
      ),
    };

  return content;
};

export default useContent;
