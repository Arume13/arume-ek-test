import { useEffect, useState } from "react";
import { getAccountDetail, postDeleteSessionID } from "../../requests/auth";
import { getFavouriteMovie } from "../../requests/profile";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [account, setAccount] = useState<any>({});
  const [favouriteMovie, setFavouriteMovie] = useState<any>([]);
  const session: any = localStorage.getItem("session_id");

  const fetchDetailAccount = async () => {
    setLoading(true);
    const resAccountDetail: any = await getAccountDetail({
      session_id: session,
    });

    setAccount(resAccountDetail);
  };

  const fetchFavourite = async () => {
    setLoading(true);
    const resFavouriteMovie: any = await getFavouriteMovie({
      account_id: account?.account_id,
    });

    setFavouriteMovie(resFavouriteMovie);
    setLoading(false);
  };

  const fetchSignout = async () => {
    setLoading(true);
    const resSignout: any = await postDeleteSessionID({ session_id: session });

    if (resSignout?.success) {
      localStorage.removeItem("session_id");
      navigate(`/`)
    } else return;

    setLoading(false);
  };

  useEffect(() => {
    if (!account?.account_id) {
      fetchDetailAccount();
    }

    fetchFavourite();
  }, []);

  return {
    fetchSignout,
    loading,
    account,
    favouriteMovie,
  };
};

export default Index;
