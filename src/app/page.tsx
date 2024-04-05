'use client';

import useSWR from 'swr';

import ArticleCard from '@/components/ArticleCard';
import AuthorCard from '@/components/AuthorCard';
import MonthType from '@/components/MonthType';
import Pagination from '@/components/Pagination';
import SiteData from '@/components/SiteData';
import TagCloud from '@/components/TagCloud';
import { axios } from '@/service';

interface IHomeProps {
  pageNum?: number;
}

const DIVIDER_CLASSES = 'my-4 border-t border-dashed border-border';

const PAGE_SIZE = 8;

export default function Home(props: IHomeProps) {
  const { pageNum = 1 } = props;

  const { data: data_articleByMonth = [] } = useSWR(`/article/by_month`, (url) => {
    return axios.get(url).then((res) => res.data);
  });

  const { data: data_site = {} } = useSWR(`/site`, (url) => {
    return axios.get(url).then((res) => res.data);
  });

  const { data: data_article = {} } = useSWR(
    `/article?page_num=${pageNum}&page_size=${PAGE_SIZE}`,
    (url) => {
      return axios.get(url).then((res) => res.data);
    },
  );

  const { data: data_tag = [] } = useSWR(`/tag`, (url) => {
    return axios.get(url).then((res) => res.data?.list);
  });

  return (
    <div className="mt-6">
      <div className="inner">
        {/* 文章及右侧导航栏 */}
        <div className="w-full flex gap-6">
          {/* 文章区块 */}
          <div className="grow">
            <div className="grow grid grid-cols-2 gap-6">
              {data_article?.list?.map((item: any) => {
                return (
                  <ArticleCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    category={item.category}
                    tags={item.tags}
                    createdDate={item.created_at}
                  />
                );
              })}
            </div>
            {/* 分页器 */}
            <Pagination
              pageNum={pageNum}
              pageSize={PAGE_SIZE}
              total={data_article?.total}
            />
          </div>
          {/* 右侧导航栏 */}
          <div className="w-[290px]">
            <AuthorCard />
            <div className="bg-white p-6 border border-border rounded-xl mt-6">
              {/* 标签云 */}
              <TagCloud tags={data_tag} />
              <div className={DIVIDER_CLASSES} />
              {/* 月份分类 */}
              <MonthType data={data_articleByMonth} />
              <div className={DIVIDER_CLASSES} />
              {/* 全站数据 */}
              <SiteData data={data_site} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
