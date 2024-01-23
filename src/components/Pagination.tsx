import cls from 'classnames';
import Link from 'next/link';

interface IPaginationProps {
  pageNum: number;
  pageSize: number;
  total: number;
}

const BOX_CLASSES =
  'w-10 h-10 flex justify-center items-center border border-[#e3e8f7] cursor-pointer rounded-lg bg-white shadow-[0_8px_16px_-4px_rgba(44,45,48,0.047)] duration-300 hover:border-main hover:text-main bg-red';

const Pagination = (props: IPaginationProps) => {
  const { pageNum, pageSize, total } = props;

  console.log('pageNum :>> ', pageNum);

  const PageItem = ({ num }: { num: number }) => (
    <Link
      className={cls(BOX_CLASSES, {
        'bg-main': num === pageNum,
      })}
      href={`/page/${num}`}
    >
      {num}
    </Link>
  );

  return (
    <nav className="w-full mt-6 flex items-center justify-between">
      <div className="flex items-center justify-center grow gap-2">
        <PageItem num={1} />
        <PageItem num={2} />
        <div>...</div>
        <PageItem num={3} />
        <div className={BOX_CLASSES}>&gt;&gt;</div>
      </div>
      <div className={BOX_CLASSES}>&gt;</div>
    </nav>
  );
};

export default Pagination;
