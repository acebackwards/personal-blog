import React, {useContext} from 'react';
import {useLocation} from "react-router-dom";
import {Context} from "../index";

const Repo = ({repo}) => {
    const location = useLocation()
    const repoId = parseInt(location.pathname.match(/\d+/))
    const {repos} = useContext(Context)
    return (
        <div className="repo-information">
            <div className="repo-name">Name</div>
            <div className="repo-description">Description</div>
            <div className="repo-extra">
                <a>link</a>
                <div className="repo-extra-rating">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    5
                </div>
            </div>
        </div>
    );
};

export default Repo;