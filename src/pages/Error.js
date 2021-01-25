import React from "react";
import { ErrorHero } from "../components";

function Error() {
  return (
    <div className="error">
      <ErrorHero
        title="404"
        subTitle="Page Not Found"
        buttonText="Go Back To Home"
        des="/"
      />
    </div>
  );
}

export default Error;
