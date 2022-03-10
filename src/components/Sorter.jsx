import { Link } from "react-router-dom"

export default function Sorter() {

    
    return(
    <div id="sorterContainer">
        <p>Title:</p>
        <Link to="?sort_by=title&order=ASC" >↟</Link>
        <Link id="aRight" to="?sort_by=title&order=DESC" >↡</Link>
        <p>Author:</p>
        <Link to="?sort_by=author&order=ASC" >↟</Link>
        <Link id="aRight" to="?sort_by=author&order=DESC" >↡</Link>
        <p>Date:</p>
        <Link to="?sort_by=created_at&order=ASC" >↟</Link>
        <Link id="aRight" to="?sort_by=created_at&order=DESC" >↡</Link>
        <p>Votes:</p>
        <Link to="?sort_by=votes&order=ASC" >↟</Link>
        <Link id="aRight" to="?sort_by=votes&order=DESC" >↡</Link>
        <p>Comments:</p>
        <Link to="?sort_by=comments&order=ASC" >↟</Link>
        <Link id="aRight" to="?sort_by=comments&order=DESC" >↡</Link>
    </div>
    )
}