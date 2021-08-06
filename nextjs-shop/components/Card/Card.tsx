import { Fragment, useState } from "react";
import Image from "next/image";
import style from "./Card.module.css";
import CardProps from "./Card.props";
import axios from "axios";
import modalBasked from "../../pages/store/modalWindow/modalBasked";
import Link from "next/link";

const Card =  ({price,currency,src,title, basked,getLove}:CardProps): JSX.Element => {

    const [love,setLove] = useState(false);
    const [reqGet,setGet] = useState(getLove);

    const deleteCard = async () => {
        const item = await axios.get('http://localhost:5000/carditem');
        const itemAll = item.data;
        
        itemAll.map((obj:any)=>{
            if (title == obj.title)
            {
                axios.delete(`http://localhost:5000/carditem/${obj.id}`).then(()=>{
                    modalBasked.ref();
                }).catch(function(error){
                    alert(error);
                });
              
                
            }
        });         
        };
 
    const axiosPost = () => {
        axios
        .post(`http://localhost:5000/carditem`, {
            name: title,
            price,currency,src,title, basked,love:true
            
        })
        .then(response => {
            console.log(response);
        }).catch(function(error){
            alert(error);
        });
    };

    const loveClick = () => {
        if(reqGet)
        {
            deleteCard(); 
            return setGet(false);
        } 
        
        if (!love) 
        {
            modalBasked.setList({price,currency,src,title, basked,getLove});
            axiosPost();
            return setLove(!love);
        } else if (love) {
            deleteCard(); 
            return setLove(!love);
        }
       
            
    };
    
    return (
     
            <div className={style.cardBlock}>
                <div className="col s3 m3">
                    <div className="card">
                        <div className={!basked?  style.price : style.priceBasked }>
                            <p>{price}<span className={style.miniSpan}>{currency}</span></p>
                        </div>
                        <div className="card-image center">
                        <Link href={{ pathname: title, query: {src: src, title: title} }}><a><Image src={src} alt={title} width={180} height={180} /></a></Link>
                          { !basked?  <a className={"btn-floating halfway-fab waves-effect waves-light green " + style.plus } onClick={ loveClick } title="Добавить в корзину"><i className="material-icons"> {love || reqGet? 'check':'add'}</i></a> : <Fragment/> }
                        </div>
                        <div className={style.blockContent}>
                            <div className="card-content">
                                <p className={style.p}>{title}</p>
                                {basked ? <button className="btn waves-effect green" type="submit" name="action">Купить <i className="material-icons right">send</i> </button> : <Fragment/>}
                                {basked ?  <i className="material-icons right" onClick={deleteCard}>close</i> : <Fragment/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    );
  };
  
export default Card;