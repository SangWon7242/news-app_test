const categories = [
  {
    name: "all",
    text: "전체 보기",
  },
  {
    name: "business",
    text: "비즈니스",
  },
  {
    name: "entertainment",
    text: "엔터테인먼트",
  },
  {
    name: "health",
    text: "건강",
  },
  {
    name: "science",
    text: "과학",
  },
  {
    name: "sports",
    text: "스포츠",
  },
  {
    name: "technology",
    text: "기술",
  },
];

const Categories = () => {
  return (
    <nav className="ml-auto pr-[20px]">
      <ul className="flex">
        {categories.map((c) => (
          <li key={c.name} className="px-[20px] hover:underline cursor-pointer">
            {c.text}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Categories;
