const mockList = [
  {
    year: 2023,
    month: 1,
    count: 4,
  },
  {
    year: 2021,
    month: 3,
    count: 12,
  },
  {
    year: 2021,
    month: 3,
    count: 12,
  },
  {
    year: 2021,
    month: 3,
    count: 12,
  },
  {
    year: 2021,
    month: 3,
    count: 12,
  },
];

function formatMonthCardDate(year: number, month: number) {
  const monthMap = {
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
  } as any;

  return `${monthMap[month]}月 ${year}`;
}

const MonthType = () => {
  const MonthCard = ({
    values,
  }: {
    values: {
      year: number;
      month: number;
      count: number;
    };
  }) => {
    return (
      <div className="px-3 py-2 border border-border cursor-pointer rounded-lg flex flex-col justify-between gap-1 hover:bg-main group">
        <span className="text-sm text-gray-400">
          {formatMonthCardDate(values.year, values.month)}
        </span>
        <div className="group-hover:text-white">
          <span className="font-bold duration-0">{values.count}</span> 篇
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-2 gap-2">
      {mockList.map((item, idx) => {
        return <MonthCard values={item} key={idx} />;
      })}
    </div>
  );
};

export default MonthType;
