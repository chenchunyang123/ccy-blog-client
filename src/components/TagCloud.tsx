interface ITagCloudProps {
  tags: Record<string, any>[];
}

const TagCloud = (props: ITagCloudProps) => {
  const { tags = [] } = props;
  return (
    <div className="flex items-center flex-wrap gap-1">
      {tags.map((item, idx) => {
        return (
          <div
            className="cursor-pointer p-1 rounded-lg hover:text-white hover:bg-main"
            key={idx}
          >
            {item.name}
            <sup className="text-gray-400">{item.article_count || null}</sup>
          </div>
        );
      })}
    </div>
  );
};

export default TagCloud;
