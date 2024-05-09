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
              "Content-Type": "application/json; charset=utf-8",
            },
            responseType: "json", // JSON 형식으로 응답 받기
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
    <div className="mt-[20px]">
      {articles &&
        articles.map((article) => (
          <NewsItmes key={article.url} article={article} />
        ))}
    </div>
  );
};

export default NewsList;
