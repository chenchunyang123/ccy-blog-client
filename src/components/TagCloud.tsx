const mockList = [
  {
    name: 'React',
    count: 10,
  },
  {
    name: 'Vue',
    count: 2,
  },
  {
    name: 'TypeScript',
    count: 5,
  },
  {
    name: 'JavaScript',
    count: 10,
  },
  {
    name: 'CSS',
    count: 10,
  },
  {
    name: 'HTML',
    count: 10,
  },
  {
    name: 'Node.js',
    count: 10,
  },
  {
    name: 'Webpack',
    count: 10,
  },
  {
    name: 'Babel',
    count: 10,
  },
  {
    name: 'Git',
    count: 10,
  },
  {
    name: 'GitHub',
    count: 10,
  },
  {
    name: 'GitLab',
    count: 10,
  },
  {
    name: 'Linux',
    count: 10,
  },
  {
    name: 'MacOS',
    count: 10,
  },
  {
    name: 'Windows',
    count: 10,
  },
  {
    name: 'Nginx',
    count: 10,
  },
  {
    name: 'Docker',
    count: 10,
  },
  {
    name: 'Kubernetes',
    count: 10,
  },
  {
    name: 'Jenkins',
    count: 10,
  },
  {
    name: 'Jest',
    count: 10,
  },
  {
    name: 'Mocha',
    count: 10,
  },
  {
    name: 'Chai',
    count: 10,
  },
  {
    name: 'Cypress',
    count: 10,
  },
  {
    name: 'Jasmine',
    count: 10,
  },
  {
    name: 'React Testing Library',
    count: 10,
  },
  {
    name: 'Enzyme',
    count: 10,
  },
  {
    name: 'Puppeteer',
    count: 10,
  },
  {
    name: 'Playwright',
    count: 10,
  },
  {
    name: 'Cucumber',
    count: 10,
  },
  {
    name: 'Selenium',
    count: 10,
  },
  {
    name: 'Appium',
    count: 10,
  },
  {
    name: 'Cypress',
    count: 23,
  },
];

const TagCloud = () => {
  return (
    <div className="flex items-center flex-wrap gap-1">
      {mockList.map((item, idx) => {
        return (
          <div className="cursor-pointer p-1 rounded-lg hover:text-white hover:bg-main" key={idx}>
            {item.name}
            <sup className="text-gray-400">{item.count}</sup>
          </div>
        );
      })}
    </div>
  );
};

export default TagCloud;
