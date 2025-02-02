import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
    state = {
        reviews: []
    }

    getReviews = () => {
        fetch(URL)
        .then(res => res.json())
        .then(data => this.setState({reviews: data.results}))
    }

    componentDidMount() {
        this.getReviews();
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <h2>The Latest Reviews</h2>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}