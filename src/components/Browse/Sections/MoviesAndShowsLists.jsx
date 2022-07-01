import { memo } from "react";
import styled from "styled-components";
import Slider from "./Slider/Slider";

const MoviesAndShowsLists = ({
  popularMovies,
  popularShows,
  trendingMovies,
  trendingShows,
  topRatedMovies,
  topRatedShows,
  upcomingMovies,
}) => {
  return (
    <StyledMoviesAndShowsLists>
      <Slider title="Popular Moives" data={popularMovies} />
      <Slider title="Popular Shows" data={popularShows} />
      <Slider title="Trending Moives" data={trendingMovies} />
      <Slider title="Trending Shows" data={trendingShows} />
      <Slider title="Top Rated Moives" data={topRatedMovies} />
      <Slider title="Top Rated Shows" data={topRatedShows} />
      <Slider title="Upcoming Movies" data={upcomingMovies} />
      <StyledCopyrigthText className="copyright-text">
        &#169; {new Date().getFullYear()}, made by Jay Kania.
      </StyledCopyrigthText>
    </StyledMoviesAndShowsLists>
  );
};

const StyledMoviesAndShowsLists = styled.div`
  background-color: #141414;
  overflow-x: hidden;
  @media only screen and (max-width: 1115px) {
    padding-top: 45px;
  }
`;

const StyledCopyrigthText = styled.p`
  color: #898989;
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

export default memo(MoviesAndShowsLists);
