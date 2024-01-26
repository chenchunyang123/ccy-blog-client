const CONFIG_LIST = [
  {
    label: '文章总数',
    value: '70',
  },
  {
    label: '建站天数',
    value: '1026 天',
  },
  {
    label: '全站字数',
    value: '218.3K',
  },
];

const SiteData = () => {
  const LineItem = ({
    label,
    value,
  }: {
    label: React.ReactNode;
    value: React.ReactNode;
  }) => {
    return (
      <div className="flex items-center justify-between">
        <div>{label}</div>
        <div>{value}</div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-2">
      {CONFIG_LIST.map((item, idx) => {
        return <LineItem label={item.label} value={item.value} key={idx} />;
      })}
    </div>
  );
};

export default SiteData;
