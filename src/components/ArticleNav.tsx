const list = ['嵌套的圆角', '视图转换', 'css属性占用', 'css常见的问题'];

const ArticleNav = () => {
  return (
    <div className="card-common px-6 py-5 mt-6">
      <span className="font-bold">文章目录</span>
      <ul className="mt-3 flex flex-col gap-3">
        {list.map((item, index) => {
          return <li key={index} className="text-font-light">{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default ArticleNav;
