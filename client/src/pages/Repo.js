import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Context } from "../index";

const Repo = ({ repo }) => {

  const repoItem = {id: 7, url: 'url...', title: 'name', description: 'none', rating: 0, comment: ''}

  const location = useLocation();
  const repoId = parseInt(location.pathname.match(/\d+/));
  const { repos } = useContext(Context);
  return (
    <div className="repo-information">
      <div className="repo-name">{repoItem.title}</div>
      <div className="repo-description">{repoItem.description}</div>
      <div className="repo-extra">
        <a href={repoItem.url}>GitHub</a>
        <div className="repo-extra-rating">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          {repoItem.rating}
        </div>
      </div>
    </div>
  );
};

export default Repo;
