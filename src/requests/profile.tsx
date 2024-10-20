import axios from "axios";

export const getFavouriteMovie = async (params?: any) => {
  const cfg = {
    method: "GET",
    url: `${import.meta.env.VITE_TMDB_ENDPOINT}/3/account/${params?.account_id}/favorite/movies`,
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
    },
  };

  const res: any = await axios.request(cfg);

  if (res?.status === 200 || res?.data) {
    return res.data;
  } else {
    return;
  }
};