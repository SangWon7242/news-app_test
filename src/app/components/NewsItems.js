import React from "react";

const NewsItmes = ({ article }) => {
  const { title, description, url, urlToImage } = article;

  return (
    <div className="news-items-box mt-[10px]">
      <div className="con mx-auto max-w-[1200px] flex border-2 gap-x-2">
        {urlToImage && (
          <div className="thumbnail w-[200px] flex-shrink-0">
            <a href={url} target="_blank" className="flex w-full h-[160px]">
              {urlToImage ? (
                <img
                  src={urlToImage}
                  alt="thumbnail"
                  className="block w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/150";
                    e.target.alt = "이미지 로딩 실패";
                  }}
                />
              ) : (
                <span>이미지없음</span>
              )}
            </a>
          </div>
        )}
        <div className="content flex flex-col gap-y-[10px]">
          <h2 className="content-title font-bold text-xl pt-[15px]">
            <a href={url} target="_blank">
              {title}
            </a>
          </h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsItmes;
