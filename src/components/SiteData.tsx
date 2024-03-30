interface ISiteDataProps {
  data: Record<string, any>;
}

const SiteData = (props: ISiteDataProps) => {
  const { data = {} } = props;

  const CONFIG_LIST = [
    {
      label: '文章总数',
      value: data?.article_count,
    },
    {
      label: '建站天数',
      value: `${data?.site_days} 天`,
    },
    {
      label: '全站字数',
      value: `${
        data?.total_word_count > 1000
          ? (data?.total_word_count / 1000).toFixed(1) + 'k'
          : data?.total_word_count
      } 字`,
    },
  ];

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
