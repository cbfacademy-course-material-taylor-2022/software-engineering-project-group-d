// The template for this comes from:


import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/menuToolbar.css'

import {Users} from "../dummyData"
// import CloseFriend from '../closeFriend/CloseFriend'

export default function Sidebar() {
    return(
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                
                <img  src="imgs/profile/Flo.jpg" 
                      alt="profile img" 
                      className="profileImg"
                      style={{width: 90, height: 90, borderRadius: 100/ 2}} 
                /> <br/><br/>
               
                    <Link to ='/profile'><button1 className="sidebarButton">
                            <li className="sidebarListItem">
                                    {/* <RssFeed className='sidebarIcon'/> */}
                                    <img 
                                    align-items="center"
                                    src="imgs/profile.png"
                                    alt="Logo" 
                                    style={{ width: "40px"}}/>
                                    <span className="sidebarListItemText">Profile</span>
                            </li>
                        </button1></Link>  <br/><br/>
                    <Link to ='/search'><button1 className="sidebarButton">
                    <li className="sidebarListItem">
                        {/* <Chat className='sidebarIcon'/> */}
                        <img 
                         align-items="center"
                         src="imgs/search.png"
                         alt="Logo" 
                         style={{ width: "40px"}}/>
                        <span className="sidebarListItemText">Search</span>
                    </li>
                    </button1></Link> <br/><br/>
                    <Link to ='/create'><button1 className="sidebarButton">
                    <li className="sidebarListItem">
                        {/* <PlayCircleFilledOutlined className='sidebarIcon'/> */}
                        <img 
                         align-items="center"
                         src="imgs/create.png"
                         alt="Logo" 
                         style={{ width: "40px"}}/>
                        <span className="sidebarListItemText">Create</span>
                    </li> </button1></Link>
                    
                </ul>
                
                <hr className='sidebarHr'/>
                {/* <ul className="sidebarFriendList">
                    {Users.map(u=> (
                        <CloseFriend key={u.id} user={u}/>
                    ))}
                </ul> */}
            </div>
        </div>
    )
}