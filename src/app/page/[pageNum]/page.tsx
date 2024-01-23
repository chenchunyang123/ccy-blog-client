import HomePage from '@/app/page';

const PageWithPageNum = ({
  params,
}: {
  params: {
    pageNum: string;
  };
}) => {
  return <HomePage pageNum={+params.pageNum} />;
};

export default PageWithPageNum;
