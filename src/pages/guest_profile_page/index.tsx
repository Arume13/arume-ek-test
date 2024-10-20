import BaseLayout from "../../layouts/BaseLayout";
import Content from "./Content";

const index = () => {
  const guestSessionID: any = localStorage.getItem("guest_session_id");
  
  if (!guestSessionID) window.location.replace("/");

  return (
    <>
      <BaseLayout>
        <Content />
      </BaseLayout>
    </>
  );
};

export default index;
