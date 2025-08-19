import React from "react";

const Loading = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <div>loading</div>;
};

export default Loading;
