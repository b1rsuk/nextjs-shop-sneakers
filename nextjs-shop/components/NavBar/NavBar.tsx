import { Fragment } from "react";
import Image from 'next/image';
import style from './navbar.module.css';
import React from "react";
import ContactsModal from "./ContactsModal/Contacts";
import Basked from './BaskedModal/Basked';
import modalContacts from "../../pages/store/modalWindow/modalContacts";
import modalBasked from "../../pages/store/modalWindow/modalBasked";


export default function NavBar():JSX.Element
{
   

  
    return ( 
      <Fragment>
        <nav className={style.navbar}>
            <div className="nav-wrapper">
              <a href='/' className="brand-logo"> 
                <Image src='/logo.png' alt="Vercel Logo" title="React Sneakers" width={72} height={72} />
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="#" onClick={()=>{modalBasked.setBasckedActive(true);}} title="Корзина"> <i className="large material-icons">add_shopping_cart</i> </a></li>
                  <li><a href="#" onClick={ () => {modalContacts.setContactsActive(true);} }>Контакты</a></li>
              </ul>
            </div>
        </nav>
        
        <ContactsModal/>
        <Basked/>

        </Fragment>

    );
  }
  