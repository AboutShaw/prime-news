import { Link } from "react-router-dom"

export default function Header(setTopic) {

    return (
        <header id="mainHeader">
                <h1>Prime News</h1>
                <h2>The news you didn't want!</h2>
                <div id="navSort">
                    <nav id="navBar">
                        <Link to="/" >Home</Link>
                        <Link to="/coding" onClick={() => {setTopic("coding")}}>Coding</Link>
                        <Link to="/football" onClick={() => {setTopic("football")}}>Football</Link>
                        <Link to="/cooking" onClick={() => {setTopic("cooking")}}>Cooking</Link>
                    </nav>
                    <div id="sorterContainer">
                        <p>Title:</p>
                        <Link to="" >↟</Link>
                        <Link id="aRight" to="" >↡</Link>
                        <p>Author:</p>
                        <Link to="" >↟</Link>
                        <Link id="aRight" to="" >↡</Link>
                        <p>Votes:</p>
                        <Link to="" >↟</Link>
                        <Link id="aRight" to="" >↡</Link>
                        <p>Comments:</p>
                        <Link to="" >↟</Link>
                        <Link id="aRight" to="" >↡</Link>
                    </div>
                </div>
            
        </header>
    )
}