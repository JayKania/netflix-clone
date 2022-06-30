import { memo } from "react";
import styled from "styled-components";
import Slider from "./Slider";

const MoviesAndShowsLists = ({ trendingMovies, trendingShows }) => {
  return (
    <StyledMoviesAndShowsLists>
      <Slider title="Trending Moives on Netflix" data={trendingMovies} />
      <Slider title="Trending Shows on Netflix" data={trendingShows} />
    </StyledMoviesAndShowsLists>
  );
};

const StyledMoviesAndShowsLists = styled.div`
  background-color: #141414;
`;

export default memo(MoviesAndShowsLists);
