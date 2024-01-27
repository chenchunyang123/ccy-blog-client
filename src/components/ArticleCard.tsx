import Image from 'next/image';
import Link from 'next/link';

interface IArticleCardProps {
  id: number;
  title: string;
  content: string;
}

const ArticleCard = (props: IArticleCardProps) => {
  const { id, title, content } = props;
  return (
    <Link
      className="cursor-pointer card-common hover:border-main group"
      href={`/article/${id}`}
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          // 图片放大
          className="transform duration-700 group-hover:scale-[1.03] group-hover:brightness-[0.82]"
          fill
          src="https://exp-picture.cdn.bcebos.com/b7b28f87031c99c0820d1d31af2fa872951fed48.jpg?x-bce-process=image%2Fcrop%2Cx_0%2Cy_0%2Cw_640%2Ch_360%2Fformat%2Cf_auto%2Fquality%2Cq_80"
          alt={title}
        />
      </div>
      <div className="h-44 p-6 flex flex-col">
        <div className="text-xs text-gray-400 mb-3">分类</div>
        <div className="text-xl font-bold group-hover:text-main">{title}</div>
        <div className="flex justify-between items-end text-sm grow">
          <div className="flex items-center gap-2">
            <div># 网络安全</div>
            <div># 绘图</div>
          </div>
          <div>2023-2-2</div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
