import { useEffect, useState } from "react";
import {
  getGuessSessionID,
  getLoginToken,
  getSessionID,
  postSignIn,
} from "../../../requests/auth";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [token, setToken] = useState<any>("");

  const fetchReqToken = async () => {
    setLoading(true);
    const resToken: any = await getLoginToken();

    setTimeout(() => {
      setToken(resToken.request_token);
      setLoading(false);
    }, 1500);
  };

  const fetchGuessSession = async () => {
    setLoading(true);
    const resGuess: any = await getGuessSessionID();

    if (resGuess?.status || resGuess?.guest_session_id) {
      localStorage.setItem("guest_session_id", resGuess?.guest_session_id);

      setTimeout(() => {
        navigate(`/guest-profile`);
        setLoading(false);
      }, 1500);
    } else {
      return;
    }
  };

  const fetchsignIn = async (params?: any) => {
    setLoading(true);

    if (token) {
      const resToken: any = await postSignIn({
        ...params,
        request_token: token,
      });

      if (resToken?.status || resToken?.request_token) {
        const resSession: any = await getSessionID({
          request_token: resToken?.request_token,
        });

        localStorage.setItem("session_id", resSession?.session_id);

        setTimeout(() => {
          navigate(`/profile`);
          setLoading(false);
        }, 1500);
      } else {
        return;
      }
    }
  };

  useEffect(() => {
    fetchReqToken();
  }, []);

  return {
    fetchGuessSession,
    fetchsignIn,
    token,
    loading,
  };
};

export default Index;
