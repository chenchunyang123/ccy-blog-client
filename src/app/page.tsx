import { usePathname } from 'next/navigation';

import ArticleCard from '@/components/ArticleCard';
import Pagination from '@/components/Pagination';

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

export default function Home(props: IHomeProps) {
  const { pageNum = 1 } = props;
  console.log('pageNum :>> ', pageNum);
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
            <Pagination pageNum={pageNum} pageSize={10} total={30} />
          </div>
          {/* 右侧导航栏 */}
          <div className="w-290px]">234</div>
        </div>
      </div>
    </div>
  );
}
