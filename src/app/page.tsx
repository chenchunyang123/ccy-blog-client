import { usePathname } from 'next/navigation';

import ArticleCard from '@/components/ArticleCard';
import AuthorCard from '@/components/AuthorCard';
import MonthType from '@/components/MonthType';
import Pagination from '@/components/Pagination';
import TagCloud from '@/components/TagCloud';
import SiteData from '@/components/SiteData';

const list = [
  {
    id: 23,
    title: '网络安全方向：10分钟2700w请求的攻击我是如何处理的',
    content: 'sfasdfs',
  },
  {
    id: 23,
    title: '网络安全方向：10分钟2700w请求的攻击我是如何处理的',
    content: 'sfasdfs',
  },
  {
    id: 23,
    title: '网络安全方向：10分钟2700w请求的攻击我是如何处理的',
    content: 'sfasdfs',
  },
];

interface IHomeProps {
  pageNum?: number;
}

const DIVIDER_CLASSES = 'my-4 border-t border-dashed border-border';

export default function Home(props: IHomeProps) {
  const { pageNum = 1 } = props;
  return (
    <div className="mt-6">
      <div className="inner">
        {/* 文章及右侧导航栏 */}
        <div className="w-full flex gap-6">
          {/* 文章区块 */}
          <div>
            <div className="grow grid grid-cols-2 gap-6">
              {list.map((item) => {
                return (
                  <ArticleCard
                    key={item.id}
                    title={item.title}
                    content={item.content}
                  />
                );
              })}
            </div>
            {/* 分页器 */}
            <Pagination pageNum={pageNum} pageSize={10} total={34} />
          </div>
          {/* 右侧导航栏 */}
          <div className="w-[290px]">
            <AuthorCard />
            <div className="bg-white p-6 border border-border rounded-xl mt-6">
              {/* 标签云 */}
              <TagCloud />
              <div className={DIVIDER_CLASSES} />
              {/* 月份分类 */}
              <MonthType />
              <div className={DIVIDER_CLASSES} />
              {/* 全站数据 */}
              <SiteData />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
