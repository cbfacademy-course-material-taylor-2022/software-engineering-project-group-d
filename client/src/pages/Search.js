import {React, useState} from "react";
import {Link} from 'react-router-dom';
import NavBar from "../components/NavBar";
import MenuToolbar from "../components/MenuToolbar";

export default function Search(props) {
    const [keyword, setKeyword]= useState('');
    const handleSubmit = (event) =>{
        event.preventDefault();
        props.findBooks(keyword);
        };
    return <>
    <div >
        <NavBar/>
        <MenuToolbar/>
        <div>
        <br/><br/><br/>
            <div className="editProfile">
                <div className="postWrapper">
                    <div className="editProfileText">
                        <h5>Search</h5>
                        <form1 onSubmit = {handleSubmit}> 
                            <p style = {{color:"black"}}><em>
                                {keyword && 'You are searching for: ' + keyword}</em></p>
                            <input type="text" 
                                value={keyword} 
                                onChange={(e) =>setKeyword(e.target.value)}/>
                            <input class="search" type="submit" value="Search" id="submit-button"/>
                        </form1>
                        </div>
                    </div>
                </div>
            <div className="editProfile">
            This area will show the searched results
            </div>
        </div>
    </div>
    </>
    };

    
