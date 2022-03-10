import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getTopics } from "../api"
import PMB from "../images/PMB.png"

export default function Header() {
    const [topics, setTopics] = useState([])

    useEffect(() => {
        getTopics().then((topicList) => {
            console.log(topicList.topics, "here")
            setTopics(topicList.topics)
        })
    }, [])

    return (
        <header id="mainHeader">
            <div id="headerTop">
                <div id="titleTag">
                    <h1>Prime News</h1>
                    <h2>The news you didn't want!</h2>
                </div>
                <div id="userProfile">
                    <img src={PMB} alt="PepperMint Butler" />
                    <h4>weegembump</h4>
                    <button>Logout</button>
                </div>
            </div>
                <div id="navSort">
                    <nav id="navBar">
                        <Link to="/" >Home</Link>
                        {topics.map((topic) => {
                            return <Link to={`/topics/${topic.slug}/articles`} >{(topic.slug).toUpperCase()}</Link>
                        })}
                    </nav>
                </div>
            
        </header>
    )
}