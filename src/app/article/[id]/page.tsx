'use client';

import dayjs from 'dayjs';
import { MdPreview } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import useSWR from 'swr';

import ArticleNav from '@/components/ArticleNav';
import AuthorCard from '@/components/AuthorCard';
import { axios } from '@/service';

interface IArticleProps {
  params: {
    id: string;
  };
}

const BOX_CLASSES =
  'px-2 py-1 text-sm text-white font-bold bg-white/[0.2] rounded-lg';

const Article = (props: IArticleProps) => {
  const {
    params: { id },
  } = props;

  const { data: data_article = {} } = useSWR(`/article/${id}`, (url) => {
    return axios.get(url).then((res) => res.data);
  });

  console.log('data_article', data_article);
  const {
    category,
    tags,
    title,
    content,
    created_at,
    updated_at,
    word_count,
    reading_duration_minutes,
  } = data_article;

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
              <span className={BOX_CLASSES}>{category?.name}</span>
            </div>
            {/* 标签 */}
            <div className="flex items-center gap-2">
              {tags?.map((item: any) => {
                return (
                  <span key={item.id} className="opacity-80 text-white text-sm">
                    # {item.name}
                  </span>
                );
              })}
            </div>
          </div>
          {/* 主标题 */}
          <h1 className="text-white font-bold text-5xl my-6">{title}</h1>
          {/* 文章属性 */}
          <div className="text-white">
            <div className="flex items-center gap-2 mb-2">
              <span>发表于 {dayjs(created_at).format('YYYY-MM-DD')}</span>
              <span>更新于 {dayjs(updated_at).format('YYYY-MM-DD')}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>
                字数总计:{' '}
                {word_count > 1000
                  ? `${(word_count / 1000).toFixed(1)}k`
                  : word_count}
              </span>
              <span>阅读时长: {reading_duration_minutes}分钟</span>
              <span>阅读量: xx</span>
              <span>评论数: xx</span>
            </div>
          </div>
        </div>
      </div>
      {/* 文章主体区域 */}
      <div className="mt-6">
        <div className="inner flex gap-4">
          <div className="card-common p-6 flex-grow">
            {/* 文章内容 */}
            <div>
              <MdPreview modelValue={content} />
            </div>
            {/* 评论 */}
            <div></div>
          </div>
          {/* 侧边栏 */}
          <div className="w-[290px]">
            <AuthorCard />
            {/* <ArticleNav /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
