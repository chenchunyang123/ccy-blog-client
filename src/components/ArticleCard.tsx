import Image from "next/image";

interface IArticleCardProps {
  title: string;
  content: string;
}


const ArticleCard = (props: IArticleCardProps) => {
  const { title, content } = props;
  return (
    <div className="duration-300 cursor-pointer mt-[24px] bg-white rounded-[12px] overflow-hidden border border-[#e3e8f7] shadow-[0_8px_16px_-4px_rgba(44,45,48,0.047)] hover:border-[#425aef] group">
      <div className="relative h-[220px] overflow-hidden">
        <Image
          // 图片放大
          className="transform transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-[0.82]"
          fill
          src="https://exp-picture.cdn.bcebos.com/b7b28f87031c99c0820d1d31af2fa872951fed48.jpg?x-bce-process=image%2Fcrop%2Cx_0%2Cy_0%2Cw_640%2Ch_360%2Fformat%2Cf_auto%2Fquality%2Cq_80"
          alt={title}
        />
      </div>
      <div className="h-[174px] p-[24px] flex flex-col">
        <div className="text-xs text-gray-400 mb-[12px]">分类</div>
        <div className="text-xl font-bold">{title}</div>
        <div className="flex justify-between items-end text-sm grow">
          <div className="flex items-center gap-[8px]">
            <div># 网络安全</div>
            <div># 绘图</div>
          </div>
          <div>2023-2-2</div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
