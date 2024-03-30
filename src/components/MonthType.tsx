function formatMonthCardDate(year_month: string) {
  const monthMap: any = {
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六',
    7: '七',
    8: '八',
    9: '九',
    10: '十',
    11: '十一',
    12: '十二',
  };
  const [year, month] = year_month.split('-');
  return `${monthMap[month]}月 ${year}`;
}

interface IMonthTypeProps {
  data: Record<string, any>;
}

const MonthType = (props: IMonthTypeProps) => {
  const { data = [] } = props;
  const MonthCard = ({ values = {} }: any) => {
    const { year_month } = values;
    return (
      <div className="px-3 py-2 border border-border cursor-pointer rounded-lg flex flex-col justify-between gap-1 hover:bg-main group">
        <span className="text-sm text-gray-400">
          {formatMonthCardDate(year_month)}
        </span>
        <div className="group-hover:text-white">
          <span className="font-bold duration-0">{values.count}</span> 篇
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-2 gap-2">
      {data.map((item: any, idx: number) => {
        return <MonthCard values={item} key={idx} />;
      })}
    </div>
  );
};

export default MonthType;
