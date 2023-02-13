import NavBar from "../components/NavBar"
import "../styles/profile.css"
import Logo from "../components/Logo"


export default function About(){
    return <>
    <div >
        <NavBar/>
    <div>
        <br/><br/><br/>
        <h1>Welcome to Passion4Travel</h1>
   
        <div className="postWrapper">
        <div className="editProfileText" >
        <p>The following application was created by Taylor Group D - Passion4Travel. 
        </p>
        <p>Once fully launched, this app will allow you to post about some of your travel memories for others to see.
        </p>
        <p>You will also be able search for some travel inspiration!</p>
        <image> <Logo/></image>
        </div>
        </div>
        
    </div>
    </div>
    </>
}