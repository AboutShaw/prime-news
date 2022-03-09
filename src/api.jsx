import axios from "axios";

const newsApi = axios.create({
    baseURL: 'https://mshaw-nc-news.herokuapp.com/api'
  });

const getArticles = (topic) => { 
    console.log(topic, "ln8")
    return newsApi.get(`/articles`, {params: {topic}})
        .then((response) => {
            return response.data
        })
};

const getArticle = (article_id) => {
    return newsApi.get(`/articles/${article_id}`)
    .then((response) => {
        return response.data.article
    })
}

const getTopics = () => {
    return newsApi.get(`/topics`)
    .then((response) => {
        return response.data
    })
}

const getComments = (article_id) => {
    console.log(article_id, "getCom ln30")
    return newsApi.get(`/articles/${article_id}/comments`)
    .then((response) => {
        console.log(response.data.comments, "getCom")
        return response.data.comments
    })
}

export { newsApi, getArticles, getTopics, getArticle, getComments};

