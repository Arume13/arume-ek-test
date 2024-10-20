import { useEffect, useState } from "react";
import { postDeleteSessionID } from "../../requests/auth";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [favouriteMovie, _setFavouriteMovie] = useState<any>([]);
  const session: any = localStorage.getItem("guest_session_id");

  const fetchSignout = async () => {
    setLoading(true);
    const resSignout: any = await postDeleteSessionID({ session_id: session });

    if (resSignout?.success) {
      localStorage.removeItem("guest_session_id");
      navigate(`/`)
    } else return;

    setLoading(false);
  };

  useEffect(() => {

  }, []);

  return {
    fetchSignout,
    loading,
    session,
    favouriteMovie,
  };
};

export default Index;
