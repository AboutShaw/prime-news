import React, { useEffect, useState } from "react"
import DisplayArticles from "./DisplayArticles"
import Sorter from "./Sorter";

export default function SingleTopic({articles, setArticles}) {
    

    return (
        <div id="homepage">
          <Sorter />
          <DisplayArticles articles={articles} setArticles={setArticles}/>
        </div>
    )
}