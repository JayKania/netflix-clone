import axios from "axios";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/FirebseConfig";
import userStore from "../../store/UserStore";
import Nav from "./Navigation/Nav";
import Billboard from "./Sections/Billboard";
import MoviesAndShowsLists from "./Sections/MoviesAndShowsLists";

const Browse = ({ yPosition }) => {
  const { user } = userStore((state) => ({
    user: state.user,
  }));

  const [popularMoviesAndShows, setPopularMoviesAndshows] = useState([]);
  const [trendingMoviesAndShows, setTrendingMoviesAndshows] = useState([]);
  const [topRatedMoviesAndShows, setTopRatedMoviesAndshows] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState(null);

  const api_key = process.env.REACT_APP_TMDB_API_KEY;

  useEffect(() => {
    // getting reference of our document (uid)
    let docRef;
    let docSnap;

    const checkUserExistInDatabase = async () => {
      if (user) {
        docRef = doc(db, "users", user.uid);
        docSnap = await getDoc(docRef);

        // !docSnap.exists() is usefull when user comes from signup route and reloads the page
        // we dont want to overwrite the doc unnecessarily
        if (!docSnap.exists()) {
          createProfile();
        }
        getPopularMoviesAndTvShows();
        getTrendingMoviesAndTvShows();
        getTopRatedMoviesAndTvShows();
        getUpcomingMovies();
      }
    };

    const createProfile = async () => {
      // now adding emailId and profiles array as fields in our selected document
      await setDoc(docRef, {
        email: user.email,
        profiles: [{ name: user.email.split(`@`)[0], wishlist: [] }],
      });
    };

    const getPopularMoviesAndTvShows = async () => {
      // getting popular movies
      const movieRes = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
      );

      // getting popular TV shows
      const showRes = await axios.get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=1`
      );

      setPopularMoviesAndshows([movieRes.data.results, showRes.data.results]);
    };

    const getTrendingMoviesAndTvShows = async () => {
      // getting trending movies
      const moviesRes = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`
      );

      // getting trending TV shows
      const showsRes = await axios.get(
        `https://api.themoviedb.org/3/trending/tv/day?api_key=${api_key}`
      );

      // console.log(moviesRes.data, showsRes.data);
      setTrendingMoviesAndshows([
        moviesRes.data.results,
        showsRes.data.results,
      ]);
    };

    const getTopRatedMoviesAndTvShows = async () => {
      // getting trending movies
      const movieRes = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`
      );

      // getting trending TV shows
      const showRes = await axios.get(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&language=en-US&page=1`
      );

      setTopRatedMoviesAndshows([movieRes.data.results, showRes.data.results]);
    };

    const getUpcomingMovies = async () => {
      // getting upcoming movies
      const movieRes = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`
      );

      setUpcomingMovies(movieRes.data.results);
    };
    checkUserExistInDatabase();
  }, [user]);

  return (
    <>
      <Nav yPosition={yPosition} />
      <Billboard></Billboard>
      <MoviesAndShowsLists
        popularMovies={
          popularMoviesAndShows.length !== 0 ? popularMoviesAndShows[0] : null
        }
        popularShows={
          popularMoviesAndShows.length !== 0 ? popularMoviesAndShows[1] : null
        }
        trendingMovies={
          trendingMoviesAndShows.length !== 0 ? trendingMoviesAndShows[0] : null
        }
        trendingShows={
          trendingMoviesAndShows.length !== 0 ? trendingMoviesAndShows[1] : null
        }
        topRatedMovies={
          topRatedMoviesAndShows.length !== 0 ? topRatedMoviesAndShows[0] : null
        }
        topRatedShows={
          topRatedMoviesAndShows.length !== 0 ? topRatedMoviesAndShows[1] : null
        }
        upcomingMovies={upcomingMovies}
      ></MoviesAndShowsLists>
    </>
  );
};

export default Browse;
