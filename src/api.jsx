import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://mshaw-nc-news.herokuapp.com/api",
});

const getArticles = (topic, sort_by, order_by) => {
  console.log(topic, sort_by, order_by, "api");
  return newsApi
    .get(`/articles`, { params: { topic, sort_by, order_by } })
    .then((response) => {
      return response.data;
    });
};

const getArticle = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((response) => {
    return response.data.article;
  });
};

const getTopics = () => {
  return newsApi.get(`/topics`).then((response) => {
    return response.data;
  });
};

const getComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then((response) => {
    return response.data.comments;
  });
};

const updateVotes = (article_id, inc_votes) => {
  console.log(article_id, inc_votes);
  return newsApi
    .patch(`/articles/${article_id}`, { inc_votes: inc_votes })
    .then((response) => {
      return response.data.article;
    });
};
const postComment = (article_id, body) => {
  return newsApi.post(`/articles/${article_id}/comments`, {
    username: "jessjelly",
    body: body,
  });
};

export {
  getArticles,
  getTopics,
  getArticle,
  getComments,
  postComment,
  updateVotes,
};
