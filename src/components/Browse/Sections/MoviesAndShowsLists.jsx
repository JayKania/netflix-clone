import { memo } from "react";
import Slider from "./Slider";

const MoviesAndShowsLists = ({ trendingMovies, trendingShows }) => {
  return (
    <>
      <Slider trendingMovies={trendingMovies} trendingShows={trendingShows} />
    </>
  );
};

export default memo(MoviesAndShowsLists);
