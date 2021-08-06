import CardProps from "../../../components/Card/Card.props";
import { makeAutoObservable } from "mobx";

class modalBasked {
    active = false;
    check = false;
    list:any = [];
    

    constructor() {
        makeAutoObservable(this);
    }

    setBasckedActive(status:boolean) {
        status? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible'; 
        this.active = status;
    }
    
    setList({price,currency,src,title, basked}:CardProps){
        this.list.push({price,currency,src,title, basked});
    }

    ref(){
        this.check = !this.check;
        this.list = [];
    }

    


}

export default new modalBasked();