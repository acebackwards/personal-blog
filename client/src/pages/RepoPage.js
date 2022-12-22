import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {fetchOneRepo} from "../http/repoApi";
import AddComment from '../components/modals/AddComment';
import { Context } from '../index';
import { fetchComment } from '../http/commentApi';
import CommentItem from '../components/CommentItem';
import { observer } from 'mobx-react-lite';
import { getRating, setRating } from '../http/ratingApi';
import { checkId } from '../utils/check';
import CommentContainer from '../components/CommentContainer';
// import {ReactComponent as StarSVG} from '../img/star.svg'
import StarSVG from '../img/star.svg'

const RepoPage = observer(() => {

    const [createComment, setCreateComment] = useState(false)
    const [repo, setRepo] = useState({})
    const {id} = useParams()
    const repo_id = +id
    const userId = checkId()

    useEffect(() => {
        fetchOneRepo(id)
            .then(data => setRepo(data))
        .then(() => getRating(repo_id, userId))
        .then(data => console.log(data))
    }, [])

    

    function rate(rate, repo_id, user_id) {
        setRating(rate, repo_id, user_id)
    }

    return (
        
        <div className='repo-container'>
            <div className="repo-information">
                <div className="repo-name">{repo.title}</div>
                <div className="repo-author">"Created by {repo.author}"</div>
                <div className="repo-description">{repo.description}</div>
                <div className="repo-extra">
                    <a href={repo.url} target="_blank" rel="noreferrer">GitHub</a>
                    <div className="repo-extra-rating">
                        <ul>
                            <img onClick={() => rate(1, repo_id, checkId())} src={StarSVG}></img>
                            <img onClick={() => rate(2, repo_id, checkId())} src={StarSVG}></img>
                            <img onClick={() => rate(3, repo_id, checkId())} src={StarSVG}></img>
                            <img onClick={() => rate(4, repo_id, checkId())} src={StarSVG}></img>
                            <img onClick={() => rate(5, repo_id, checkId())} src={StarSVG}></img>
                            {/* <StarSVG className='starObject'></StarSVG> */}
                        </ul>
                        {repo.rating}
                        <img src={StarSVG}/>
                    </div>
                </div>
            </div>
            <div className="repo-comment">
                <CommentContainer repo_id={id}/>
            </div>
        </div>
    
    );
})

export default RepoPage;