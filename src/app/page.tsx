import Image from "next/image";
import ArticleCard from "@/components/ArticleCard";

const list = [
  {
    id: 23,
    title: "网络安全方向：10分钟2700w请求的攻击我是如何处理的",
    content: "sfasdfs",
  },
  {
    id: 23,
    title: "网络安全方向：10分钟2700w请求的攻击我是如何处理的",
    content: "sfasdfs",
  },
  {
    id: 23,
    title: "网络安全方向：10分钟2700w请求的攻击我是如何处理的",
    content: "sfasdfs",
  },
];

export default function Home() {
  return (
    <div className="mt-[24px]">
      <div className="inner">
        <div className="w-full flex gap-[24px]">
          {/* 文章区块 */}
          <div className="grow grid grid-cols-2 gap-[24px]">
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
          {/* 右侧导航栏 */}
          <div className="w-[290px]">234</div>
        </div>
      </div>
    </div>
  );
}
