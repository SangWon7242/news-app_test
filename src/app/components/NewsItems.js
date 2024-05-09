import React from "react";

const NewsItmes = ({ article }) => {
  const { title, description, url, urlToImage } = article;

  return (
    <section className="news-items-box">
      <div className="con mx-auto max-w-[1200px] flex border-2 gap-x-2">
        {urlToImage && (
          <div className="thumbnail w-[200px] bg-red-300 flex-shrink-0">
            <a
              href={url}
              target="_blank"
              className="flex w-full h-[160px] bg-blue-300"
            >
              <img
                src={urlToImage}
                alt="thumbnail"
                className="block w-full h-full object-cover"
              />
            </a>
          </div>
        )}
        <div className="content">
          <h2 className="content-title font-bold text-xl">
            <a href={url} target="_blank">
              {title}
            </a>
          </h2>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default NewsItmes;