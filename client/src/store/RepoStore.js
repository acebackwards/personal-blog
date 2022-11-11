import {makeAutoObservable} from "mobx";

export default class RepoStore {
    constructor() {
        this._repos = [
            {id: 7, url: 'url...', title: 'name', description: 'none', rating: 0, comment: ''},
            {id: 10, url: 'url', title: 'name', description: 'none', rating: 0, comment: ''},
            {id: 11, url: 'google.com', title: 'some name', description: 'thats description', rating: 0, comment: ''},
            {id: 14, url: 'github.com/...', title: 'new repo', description: 'new description', rating: 0, comment: ''}
        ]
        makeAutoObservable(this)
    }

    setRepos (repos) {
        this._isAuth = repos
    }

    get repos () {
        return this._repos
    }
}