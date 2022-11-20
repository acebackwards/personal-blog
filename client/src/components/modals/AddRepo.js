import React from "react";
import './AddRepo.css'

export default function AddRepo({ onHide }) {
  return (
    <div className="add-repo-confirm">
      <h1 className="add-repo-h1">Add new repository</h1>
      <div className="add-repo-div">
        <label>URL</label>
        <input></input>
        <label>Title</label>
        <input></input>
        <label>Description</label>
        <input></input>
      </div>
      <button className="add-repo-button" onClick={onHide}>Cancel</button>
      <button autoFocus className="add-repo-button">Confirm</button>
    </div>
  );
}
