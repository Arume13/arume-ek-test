import { useEffect, useState } from "react";
import {
  getPopularMovie,
  getNowPlayingMovie,
  getTopRatedMovie,
} from "../../requests/homepages";

const Index = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingNowPlaying, setLoadingNowPlaying] = useState<boolean>(false);
  const [loadingPopular, setLoadingPopular] = useState<boolean>(false);
  const [topRated, setTopRated] = useState<any>([]);
  const [nowPlaying, setNowPlaying] = useState<any>([]);
  const [popular, setPopular] = useState<any>([]);
  const [popularPage, setPopularPage] = useState<number>(1);

  const fetchTopRated = async () => {
    setLoading(true);
    const resTopRated: any = await getTopRatedMovie();

    setTimeout(() => {
      setTopRated(resTopRated.results.slice(0, 10));
      setLoading(false);
    }, 1500);
  };

  const fetchNowPlaying = async () => {
    setLoadingNowPlaying(true);
    const resNowPlaying: any = await getNowPlayingMovie();

    setTimeout(() => {
      setNowPlaying(resNowPlaying.results.slice(0, 6));
      setLoadingNowPlaying(false);
    }, 1500);
  };

  const fetchPopular = async () => {
    setLoadingPopular(true);
    let newArr: any = [];
    const resPopular: any = await getPopularMovie({ page: popularPage });

    if (resPopular.results) {
      resPopular.results.slice(0, 6)?.map((i: any, _k: number) => {
        newArr.push(i);
      });

      setTimeout(() => {
        setPopular([...popular, ...newArr]);
        setLoadingPopular(false);
      }, 1500);
    }
  };

  useEffect(() => {
    if (popularPage === 1) {
      fetchTopRated();
      fetchNowPlaying();
    }

    fetchPopular();
  }, [popularPage]);
  return {
    setPopularPage,
    popularPage,
    loading,
    loadingNowPlaying,
    loadingPopular,
    topRated,
    nowPlaying,
    popular,
  };
};

export default Index;
