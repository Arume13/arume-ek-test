import BaseLayout from "../../layouts/BaseLayout";
import Content from "./Content";

const index = () => {
  const sessionID: any = localStorage.getItem("session_id");
  
  if (!sessionID) window.location.replace("/");

  return (
    <>
      <BaseLayout>
        <Content />
      </BaseLayout>
    </>
  );
};

export default index;
