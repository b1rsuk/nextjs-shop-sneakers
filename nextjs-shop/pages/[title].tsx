import { useRouter } from "next/router";
import { Fragment } from "react";
import style from "./sneakers.module.css";
import Image from 'next/image';

const Named = ():JSX.Element=> {
    const {query}:any = useRouter();
    
    return(
        <Fragment>
               <div className="row">
                <div className={"col s12 m8 push-m2"}>
                    <div className={"card-panel white " + style.block}>
                        <div className="row">
                            <div className="card col m4">
                                
                                    <div className="card-image waves-effect waves-block waves-light">
                                        <Image src={query.src} alt="be" width={180} height={180}/>
                                    </div>

                                    <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4">{query.title}<a className="waves-effect waves-light btn right">button</a></span>
                                      
                                    </div>
                                                 
                                    
                            </div>

                            <div className="center">
                              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut obcaecati quae iusto necessitatibus atque aspernatur facilis tempora doloribus sequi! Reiciendis ipsum ipsam doloribus iure corporis natus laudantium et necessitatibus. Animi!
                              Omnis id fugit molestiae magnam, asperiores ab repellat voluptatum voluptates deserunt dignissimos placeat repudiandae vel labore odio ipsam, reprehenderit eligendi recusandae soluta quaerat? Distinctio totam cumque porro illum ut corrupti. <i className="red-text">Над версткой  решил долго не работать-_-</i></span>
                            </div>
                           
                        </div>
                     
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default Named;