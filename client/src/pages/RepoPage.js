import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {fetchOneRepo} from "../http/repoApi";
import AddComment from '../components/modals/AddComment';
import { Context } from '../index';
import { fetchComment } from '../http/commentApi';
import CommentItem from '../components/CommentItem';
import { observer } from 'mobx-react-lite';
import { setRating } from '../http/ratingApi';
import { checkId } from '../utils/check';
import CommentContainer from '../components/CommentContainer';
import StarSVG from '../img/star.svg'

const RepoPage = observer(() => {

    const [createComment, setCreateComment] = useState(false)
    const [repo, setRepo] = useState({})
    const {id} = useParams()
    const repo_id = +id

    useEffect(() => {
        fetchOneRepo(id)
            .then(data => setRepo(data))
    }, [])

    

    function rate(rate, repo_id, user_id) {
        setRating(rate, repo_id, user_id)
    }

    return (
        
        <div className='repo-container'>
            {createComment ? 
            <AddComment onHide={() => {setCreateComment(false)}} parent={null}/> : null}
            <div className="repo-information">
                <div className="repo-name">{repo.title}</div>
                <div className="repo-author">"Created by {repo.author}"</div>
                <div className="repo-description">{repo.description}</div>
                <div className="repo-extra">
                    <a href={repo.url} target="_blank" rel="noreferrer">GitHub</a>
                    <div className="repo-extra-rating">
                        <ul>
                            <button onClick={() => rate(1, repo_id, checkId())}></button>
                            <button onClick={() => rate(2, repo_id, checkId())}></button>
                            <button onClick={() => rate(3, repo_id, checkId())}></button>
                            <button onClick={() => rate(4, repo_id, checkId())}></button>
                            <button onClick={() => rate(5, repo_id, checkId())}></button>
                        </ul>
                        {repo.rating}
                        <img src={StarSVG}/>
                    </div>
                </div>
            </div>
            <div className="repo-comment">
                <button className="repo-item__create" onClick={() => setCreateComment(prev => !prev)}>Create comment</button>
                <CommentContainer repo_id={id}/>
            </div>
        </div>
    
    );
})

export default RepoPage;