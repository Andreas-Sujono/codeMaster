import React, { Component } from 'react';
import './style.scss'
import {Link} from 'react-router-dom'

class SideNavList extends Component {

    render() {
        const {list,collapse,active,changeActive} = this.props
        return (
            <div className={`sideNavContent ${collapse? 'sideNavhidden': 'sideNavshow'}`}>
                {  
                    list.slice(1).map (item => 
                        <div class="sideNavItem">
                            <div className="sideNavItemMain" className={active == item.name? 'active':'inactive'}>
                                <Link to={item.path} onClick={() => changeActive(item.name)}>{item.name}</Link> 
                                <span> > </span>
                            </div>
                            
                            {
                                item.content &&
                                <ul className="sideNavList">
                                    {item.content.map(item2 => <li className={active == item2.name? 'active':'inactive'}> <Link to={item2.path} onClick={() => changeActive(item2.name)}>{item2.name}</Link> </li>)}
                                </ul>
                            }
                        
                        </div>    
                    )
                }
                <hr />
            </div>                
        );
    }
}


export default SideNavList;