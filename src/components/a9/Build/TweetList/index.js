import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import TweetListItem from "./TweetListItem";
import {fetchAllTweets} from "../../services/twitterService";

const selectAllTweets = (state) => state.tweets.tweets;

const TweetList = () => {
    // const tweets = useSelector(selectAllTweets);
    // const dispatch = useDispatch();
    // useEffect(() => fetchAllTweets(dispatch), [])
    const [tweets, setTweets] = useState([]);

    useEffect(() =>
        fetchAllTweets()
            .then(tweets => setTweets(tweets)));
    return(
        <ul className="list-group">
            {
                tweets.map(tweet =>
                    <TweetListItem tweet={tweet}/>
                )
            }
        </ul>
    )
};

export default TweetList;
