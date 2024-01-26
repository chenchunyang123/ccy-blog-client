import cls from 'classnames';
import Link from 'next/link';

interface IPaginationProps {
  pageNum: number;
  pageSize: number;
  total: number;
}

const BOX_CLASSES =
  'w-10 h-10 flex justify-center items-center border border-border cursor-pointer rounded-lg shadow-card-shadow';

const Pagination = (props: IPaginationProps) => {
  const { pageNum, pageSize, total } = props;

  // 计算有多少页
  const totalPage = Math.ceil(total / pageSize);

  const PageItem = ({ num }: { num: number }) => {
    const isActive = num === pageNum;

    return (
      <Link
        className={cls(BOX_CLASSES, {
          'bg-main text-white': isActive,
          'bg-white hover:border-main hover:text-main': !isActive,
        })}
        href={`/page/${num}`}
      >
        {num}
      </Link>
    );
  };

  return (
    <nav className="w-full mt-6 flex items-center justify-between">
      <div className="flex items-center justify-center grow gap-2">
        <PageItem num={1} />
        {totalPage > 1 && <PageItem num={2} />}
        {totalPage === 3 && <PageItem num={3} />}
        {totalPage > 3 && (
          <>
            <div>...</div>
            <PageItem num={totalPage} />
            <div
              className={cls(
                BOX_CLASSES,
                'bg-white hover:border-main hover:text-main',
              )}
            >
              &gt;&gt;
            </div>
          </>
        )}
      </div>
      <div
        className={cls(
          BOX_CLASSES,
          'bg-white hover:border-main hover:text-main',
        )}
      >
        &gt;
      </div>
    </nav>
  );
};

export default Pagination;
