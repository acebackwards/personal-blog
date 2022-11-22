import {makeAutoObservable} from "mobx";

export default class RepoStore {
    constructor() {
        this._repos = []
        makeAutoObservable(this)
    }

    setRepos (repos) {
        this._repos = repos
    }

    get repos () {
        return this._repos
    }
}