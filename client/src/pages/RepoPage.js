import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {fetchOneRepo} from "../http/repoApi";


function RepoPage () {
    const [repo, setRepo] = useState({})
    const {id} = useParams()

    useEffect(() => {
        fetchOneRepo(id)
            .then(data => setRepo(data))
        console.log(repo)
    }, [])

    return (
        <div className="repo-information">
            <div className="repo-name">{repo.title}</div>
            <div className="repo-description">{repo.description}</div>
            <div className="repo-extra">
                <a href={'#'}>GitHub</a>
                <div className="repo-extra-rating">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    {repo.rating}
                </div>
            </div>
        </div>
    );
}

export default RepoPage;