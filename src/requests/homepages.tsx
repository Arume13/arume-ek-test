import axios from "axios";

export const getTopRatedMovie = async (params?: any) => {
  const cfg = {
    method: "GET",
    url: `${import.meta.env.VITE_TMDB_ENDPOINT}/3/movie/top_rated`,
    params: {
      language: params?.language ? params?.language : "en-US",
      page: params?.page ? params?.page : "1",
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
    },
  };

  const res: any = await axios.request(cfg);

  if (res?.status === 200 || res?.data) {
    return res.data;
  } else {
    return;
  }
};

export const getNowPlayingMovie = async (params?: any) => {
  const cfg = {
    method: "GET",
    url: `${import.meta.env.VITE_TMDB_ENDPOINT}/3/movie/now_playing`,
    params: {
      language: params?.language ? params?.language : "en-US",
      page: params?.page ? params?.page : "1",
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
    },
  };

  const res: any = await axios.request(cfg);

  if (res?.status === 200 || res?.data) {
    return res.data;
  } else {
    return;
  }
};

export const getPopularMovie = async (params?: any) => {
  const cfg = {
    method: "GET",
    url: `${import.meta.env.VITE_TMDB_ENDPOINT}/3/movie/popular`,
    params: {
      language: params?.language ? params?.language : "en-US",
      page: params?.page ? params?.page : "1",
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
    },
  };

  const res: any = await axios.request(cfg);

  if (res?.status === 200 || res?.data) {
    return res.data;
  } else {
    return;
  }
};

export const getDetailMovieByID = async (params?: any) => {
  const cfg = {
    method: "GET",
    url: `${import.meta.env.VITE_TMDB_ENDPOINT}/3/movie/${params?.id}`,
    params: {
      language: params?.language ? params?.language : "en-US",
      page: params?.page ? params?.page : "1",
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
    },
  };

  const res: any = await axios.request(cfg);

  if (res?.status === 200 || res?.data) {
    return res.data;
  } else {
    return;
  }
};

export const postRatingMovieByID = async (params?: any) => {
  const cfg = {
    method: "POST",
    url: `${import.meta.env.VITE_TMDB_ENDPOINT}/3/movie/${params?.movie_id}/rating`,
    params: {
      language: params?.language ? params?.language : "en-US",
      page: params?.page ? params?.page : "1",
      session_id: params?.session_id
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
    },
    data: {
      value: params?.value
    },
  };

  const res: any = await axios.request(cfg);

  if (res?.status === 200 || res?.data) {
    return res.data;
  } else {
    return;
  }
};

export const postFavouriteMovieByID = async (params?: any) => {
  const cfg = {
    method: "POST",
    url: `${import.meta.env.VITE_TMDB_ENDPOINT}/3/account/${
      params?.account_id
    }/favorite`,
    params: {
      language: params?.language ? params?.language : "en-US",
      page: params?.page ? params?.page : "1",
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
    },
    data: {
      media_type: params?.media_type,
      media_id: params?.movie_id,
      favorite: params?.favourite,
    },
  };

  const res: any = await axios.request(cfg);

  if (res?.status === 200 || res?.data) {
    return res.data;
  } else {
    return;
  }
};
