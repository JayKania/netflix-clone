import axios from "axios";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../../firebase/FirebseConfig";
import userStore from "../../store/UserStore";
import Nav from "./Navigation/Nav";
import Billboard from "./Sections/Billboard";

const Browse = ({ yPosition }) => {
  const { user } = userStore((state) => ({
    user: state.user,
  }));

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
      }
    };

    const createProfile = async () => {
      // now adding emailId and profiles array as fields in our selected document
      await setDoc(docRef, {
        email: user.email,
        profiles: [{ name: user.email.split(`@`)[0], wishlist: [] }],
      });
    };

    const getPopularMoviesAndTvShows = () => {
      // getting popular movies
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

      // getting popular TV shows
      axios
        .get(
          `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=1`
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const getTrendingMoviesAndTvShows = () => {
      // getting trending movies
      axios
        .get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

      // getting trending TV shows
      axios
        .get(`https://api.themoviedb.org/3/trending/tv/day?api_key=${api_key}`)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const getTopRatedMoviesAndTvShows = () => {
      // getting trending movies
      axios
        .get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

      // getting trending TV shows
      axios
        .get(
          `https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&language=en-US&page=1`
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    checkUserExistInDatabase();
  }, [user]);

  return (
    <>
      <Nav yPosition={yPosition} />
      <Billboard></Billboard>
    </>
  );
};

export default Browse;
