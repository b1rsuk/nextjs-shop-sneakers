import { makeAutoObservable } from "mobx";
class modalConstacts {
    active = false;

    constructor() {
        makeAutoObservable(this);
    }

    setContactsActive(status:boolean) {
        status? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible'; 
        this.active = status;
    }

}

export default new modalConstacts();