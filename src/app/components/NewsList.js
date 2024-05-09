import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItmes from "./NewsItems";

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=kr&apiKey=4b9d1c190bc4462d9445df3d6cddc1ea",
          {
            headers: {
              "Accept-Encoding": "deflate, br",
              "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          }
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {articles &&
        articles.map((article) => (
          <NewsItmes key={article.url} article={article} />
        ))}
    </div>
  );
};

export default NewsList;
