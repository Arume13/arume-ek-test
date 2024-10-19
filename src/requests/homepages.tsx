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
