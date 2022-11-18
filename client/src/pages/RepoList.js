import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useNavigate} from "react-router-dom";
import {REPOLIST_ROUTE} from "../utils/consts";

const RepoList = observer(() => {
    const {repos} = useContext(Context)
    const navigate = useNavigate()
    return (
        <div className='bg-container'>
            <div className="main-container">
                <div className="main-information">
                    {repos.repos.map(repo => {
                        return (
                            <div className="main-repo" key={repo.id} onClick={() => {
                                navigate(REPOLIST_ROUTE + '/' + repo.id)
                            }}>
                                <p>
                                    {repo.title}
                                </p>
                                <span>
                                    {repo.description}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
});

export default RepoList;