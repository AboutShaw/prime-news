import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getTopics } from "../api"

export default function Header() {
    const [topics, setTopics] = useState([])

    useEffect(() => {
        getTopics().then((topicList) => {
            setTopics(topicList.topics)
        })
    }, [])

    return (
        <header id="mainHeader">
                <h1>Prime News</h1>
                <h2>The news you didn't want!</h2>
                <div id="navSort">
                    <nav id="navBar">
                        <Link to="/" >HOME</Link>
                        {topics.map((topic) => {
                            return <Link to={`/topics/${topic.slug}/articles`} >{(topic.slug).toUpperCase()}</Link>
                        })}
                    </nav>
                </div>
            
        </header>
    )
}