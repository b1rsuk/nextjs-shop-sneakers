import { Fragment, useEffect, useState } from "react";
import style from './basked.module.css';
import Card from "../.././Card/Card";
import modalBasked from "../../../pages/store/modalWindow/modalBasked";
import { observer } from "mobx-react-lite";
import axios from "axios";
import CardProps from "../../Card/Card.props";

const Basked = observer((): JSX.Element =>  {
 
    const [post,setPost] = useState([]);
 
    useEffect(() => {
        axios.get('http://localhost:5000/carditem').then((response) => {
           setPost(response.data);
          }).catch(function (error) {
            alert(error);
          });
      },[modalBasked.check]);
    
    
        if (modalBasked.active)
         {
             
            

            return (
                <div className="drawer modal-open" onClick={()=>{modalBasked.setBasckedActive(false);}}>
                    <div className={"right " + style.basked} onClick={e => e.stopPropagation()}>
                        {   
                            post.map((obj:CardProps)=> (<Card title = {obj.title} src= {obj.src} price = {obj.price} currency= {obj.currency} basked={true} getLove={false}/>))
                        }
                        {                            
                            modalBasked.list.map((obj:CardProps)=> ( <Card title = {obj.title} src= {obj.src} price = {obj.price} currency= {obj.currency} basked={true} getLove={false}/>))
                        }
                    </div>

                    <div className={style.arrow + " right"} onClick={e => e.stopPropagation()} >
                     <a href="#"> <i className={"small material-icons " + style.arrowCenter}  onClick={()=>{modalBasked.setBasckedActive(false);}}>arrow_forward</i> </a> 
                    </div>
                </div>
            );
        } else { return <Fragment/>; }
  });
  
export default Basked;  





