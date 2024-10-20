import axios from "axios";

export const getLoginToken = async (_params?: any) => {
  const cfg = {
    method: "GET",
    url: `${import.meta.env.VITE_TMDB_ENDPOINT}/3/authentication/token/new`,
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

export const postSignIn = async (_params?: any) => {
  const cfg = {
    method: "POST",
    url: `${
      import.meta.env.VITE_TMDB_ENDPOINT
    }/3/authentication/token/validate_with_login`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
    },
    data: {
      username: _params?.username,
      password: _params?.password,
      request_token: _params?.request_token,
    },
  };

  const res: any = await axios.request(cfg);

  if (res?.status === 200 || res?.data) {
    return res.data;
  } else {
    return;
  }
};

export const getGuessSessionID = async (_params?: any) => {
  const cfg = {
    method: "GET",
    url: `${
      import.meta.env.VITE_TMDB_ENDPOINT
    }/3/authentication/guest_session/new`,
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

export const getSessionID = async (params?: any) => {
  const cfg = {
    method: "POST",
    url: `${import.meta.env.VITE_TMDB_ENDPOINT}/3/authentication/session/new`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
    },
    data: {
      request_token: params?.request_token,
    },
  };

  const res: any = await axios.request(cfg);

  if (res?.status === 200 || res?.data) {
    return res.data;
  } else {
    return;
  }
};

export const getAccountDetail = async (params?: any) => {
  const cfg = {
    method: "GET",
    url: `${import.meta.env.VITE_TMDB_ENDPOINT}/3/account?api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }&session_id=${params?.session_id}`,
    headers: {
      accept: "application/json",
    },
  };

  const res: any = await axios.request(cfg);

  if (res?.status === 200 || res?.data) {
    return res.data;
  } else {
    return;
  }
};

export const postDeleteSessionID = async (params?: any) => {
  const cfg = {
    method: "DELETE",
    url: `${import.meta.env.VITE_TMDB_ENDPOINT}/3/authentication/session`,
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
    },
    data: {
      session_id: params?.session_id,
    },
  };

  const res: any = await axios.request(cfg);

  if (res?.status === 200 || res?.data) {
    return res.data;
  } else {
    return;
  }
};
