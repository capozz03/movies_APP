import React from 'react';
import s from './MovieCard.module.css'
import { BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import image from './../../assets/undefined_img.png'

const MovieCard = (props) => {

    const redirectToPage = () => {
        const moviedData = {
          source: props.movieData.source,
          name: props.movieData.name,
          releaseYear: props.movieData.releaseYear,
          genres: props.movieData.genres,
          synopsis: props.movieData.synopsis,
          id: props.movieData.id,
        };
        props.onSaveMovieData(moviedData);
      };

    return (
        <div className={s.MovieCardContainer}>
            <div div className={s.MovieCard}>
                <div className={s.ImageContainer}>
                    <img className={s.Image} src={props.src != null ? props.src : image} alt="" />
                </div>
            <div className={s.HoverInfo}>
                <div className={s.Rating}>
                    <div className={s.IconContainer}>
                        <BsFillStarFill />
                    </div>
                    <p className={s.RatingNum}>{props.rating}</p>
                </div>
                <div className={s.Genres}>
                    {props.genres.map((genre) => {
                        return (
                            <p
                            className={s.Genre}
                            key={props.rating * Math.random() + Math.random()}
                            >
                                {genre}
                            </p>
                        );
            })}
          </div>

          <Link
            to="single_movie"
            className={s.Button}
            onClick={redirectToPage}
          >
            <p className={s.LinkMore}>More</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;