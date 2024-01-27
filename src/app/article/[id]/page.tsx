import ArticleNav from '@/components/ArticleNav';
import AuthorCard from '@/components/AuthorCard';

interface IArticleProps {
  params: {
    id: string;
  };
}

const BOX_CLASSES =
  'px-2 py-1 text-sm text-white font-bold bg-white/[0.2] rounded-lg';

const taglist = ['前端', '开发', 'css3'];

const article = (props: IArticleProps) => {
  const {
    params: { id },
  } = props;

  return (
    <div>
      {/* 标题banner */}
      <div className="py-20 bg-orange-400">
        <div className="inner">
          {/* 标签行 */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {/* 是否原创 */}
              <span className={BOX_CLASSES}>原创</span>
              {/* 分类 */}
              <span className={BOX_CLASSES}>前端开发</span>
            </div>
            {/* 标签 */}
            <div className="flex items-center gap-2">
              {taglist.map((item, index) => {
                return (
                  <span key={index} className="opacity-80 text-white text-sm">
                    # {item}
                  </span>
                );
              })}
            </div>
          </div>
          {/* 主标题 */}
          <h1 className="text-white font-bold text-5xl my-6">
            那些年用过的CSS奇妙用法之能用CSS就不用JS技巧系列
          </h1>
          {/* 文章属性 */}
          <div className="text-white">
            <div className="flex items-center gap-2 mb-2">
              <span>发表于 2023-8-27</span>
              <span>更新于 2023-9-9</span>
            </div>
            <div className="flex items-center gap-2">
              <span>字数总计: 2.8k</span>
              <span>阅读时长: 11分钟</span>
              <span>阅读量: 2734</span>
              <span>评论数: 13</span>
            </div>
          </div>
        </div>
      </div>
      {/* 文章主体区域 */}
      <div className="mt-6">
        <div className="inner flex gap-4">
          <div className="card-common p-6 flex-grow">
            {/* 文章内容 */}
            <div></div>
            {/* 评论 */}
            <div></div>
          </div>
          {/* 侧边栏 */}
          <div className="w-[290px]">
            <AuthorCard />
            <ArticleNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default article;
