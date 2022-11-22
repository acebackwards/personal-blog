import React, {useState} from "react";
import './AddRepo.css'
import {createRepo} from "../../http/repoApi";
import {observer} from "mobx-react-lite";

const AddRepo = observer(({ onHide }) => {

    const [url, setUrl] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const addNewRepo = () => {
        createRepo({title: title}, {description: description}, {url: url})
            .then(data => {
                setUrl('')
                setTitle('')
                setDescription('')
                onHide()
            }).catch(e => {
                alert(e.message)
        })
    }

  return (
    <div className="add-repo-confirm">
      <h1 className="add-repo-h1">Add new repository</h1>
      <div className="add-repo-div">
        <label>URL</label>
        <input placeholder='Type the text...' value={url}
        onChange={e => setUrl(e.target.value)}></input>
        <label>Title</label>
        <input placeholder='Type the text...' value={title}
               onChange={e => setTitle(e.target.value)}></input>
        <label>Description</label>
        <input placeholder='Type the text...' value={description}
               onChange={e => setDescription(e.target.value)}></input>
      </div>
      <button className="add-repo-button" onClick={onHide}>Cancel</button>
      <button autoFocus className="add-repo-button" onClick={addNewRepo}>Confirm</button>
    </div>
  );
})

export default AddRepo