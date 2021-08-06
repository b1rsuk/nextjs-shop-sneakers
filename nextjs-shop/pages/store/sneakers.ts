import { makeAutoObservable } from "mobx";


class sneakers {
  
    list = [];
    constructor() {
        makeAutoObservable(this);
    }
    add({title,src}) {
        this.list.push({title,src});
    }

}

export default new sneakers();
