import { Fragment } from "react";
import style from './modalContacts.module.css';
import modalConstacts from "../../../pages/store/modalWindow/modalContacts";
import { observer } from "mobx-react-lite";

const ContactsModal = observer( (): JSX.Element => {
    
    if (modalConstacts.active){
        return (
        <div className="drawer" onClick= {() => {modalConstacts.setContactsActive(false);}}>
            <div className="row" onClick= {e => e.stopPropagation()} >
                <div className="col s12 m4 offset-m4">
                    <div className={"card white darken-1 " + style.modalBlock}>
                        <div className="card-content black-text">
                            <span className="card-title center">+380 (00) 000 000</span>
                            <h5>По всем вопросам и придложениям</h5>
                            <span>9:00 - 18:00</span>
                        </div>
                        <div className={"card-action" }>
                            <a href="#" onClick={()=> {modalConstacts.setContactsActive(false);}}>Закрыть</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    } else { return <Fragment/>; } 
  });
  
export default ContactsModal;
  
