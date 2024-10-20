import { useEffect, useState } from "react";
import {
  getDetailMovieByID,
  postFavouriteMovieByID,
  postRatingMovieByID,
} from "../../requests/homepages";
import { useParams } from "react-router-dom";
import { getAccountDetail } from "../../requests/auth";

const Index = () => {
  let { id } = useParams();
  const session: any = localStorage.getItem("session_id");
  const [loading, setLoading] = useState<boolean>(false);
  const [detail, setDetail] = useState<any>({});

  const fetchMovieByID = async () => {
    setLoading(true);
    const resDetail: any = await getDetailMovieByID({ id: id });

    setTimeout(() => {
      setDetail(resDetail);
      setLoading(false);
    }, 1500);
  };

  const fetchRating = async (params?: any) => {
    setLoading(true);

    const mediaID: string = params?.id;

    await postRatingMovieByID({
      session_id: session,
      movie_id: mediaID,
      value: params?.value,
    });

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  const fetchFavourite = async (params?: any) => {
    setLoading(true);

    const mediaID: string = params?.id;
    const favourite: string = params?.favourite;

    const getAuthenticatedUser: any = await getAccountDetail({
      session_id: session,
    });

    if (getAuthenticatedUser?.id && mediaID && favourite) {
      await postFavouriteMovieByID({
        account_id: getAuthenticatedUser?.id,
        media_type: "movie",
        movie_id: mediaID,
        favourite: favourite,
      });

      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  };

  useEffect(() => {
    fetchMovieByID();
  }, []);
  return {
    fetchRating,
    fetchFavourite,
    detail,
    loading,
  };
};

export default Index;
