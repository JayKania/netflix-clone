import { memo } from "react";
import styled from "styled-components";
import Slider from "./Slider";

const MoviesAndShowsLists = ({
  popularMovies,
  popularShows,
  trendingMovies,
  trendingShows,
  topRatedMovies,
  topRatedShows,
}) => {
  return (
    <StyledMoviesAndShowsLists>
      <Slider title="Trending Moives" data={popularMovies} />
      <Slider title="Trending Shows" data={popularShows} />
      <Slider title="Trending Moives" data={trendingMovies} />
      <Slider title="Trending Shows" data={trendingShows} />
      <Slider title="Trending Moives" data={topRatedMovies} />
      <Slider title="Trending Shows" data={topRatedShows} />
    </StyledMoviesAndShowsLists>
  );
};

const StyledMoviesAndShowsLists = styled.div`
  background-color: #141414;
  @media only screen and (max-width: 1115px) {
    padding-top: 45px;
  }
`;

export default memo(MoviesAndShowsLists);
