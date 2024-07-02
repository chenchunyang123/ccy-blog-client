'use client';

import cls from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const LINK_CLASSES = 'px-4 py-2 rounded-full font-bold';

const LINK_CONFIG = [
  {
    label: '文章',
    href: '/',
  },
  {
    label: '相册',
    href: '/photo',
  },
  {
    label: '关于',
    href: '/about',
  },
];

const RENDER_NAV_BG_DISTANCE = 0;

const Header = () => {
  const pathname = usePathname();
  const [needRenderNavBg, setNeedRenderNavBg] = useState(false);

  // 监听页面滚动
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > RENDER_NAV_BG_DISTANCE) {
        setNeedRenderNavBg(true);
      } else {
        setNeedRenderNavBg(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full h-16">
      <nav
        className={cls('w-full h-16 fixed z-50', {
          'bg-white border-b border-border': needRenderNavBg,
        })}
      >
        <div className="inner">
          {/* <div>left</div> */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3">
            {LINK_CONFIG.map((item, index) => {
              const active = pathname === item.href;
              return (
                <Link
                  href={item.href}
                  className={cls(LINK_CLASSES, {
                    'bg-main text-white': active,
                    'hover:bg-main hover:text-white': !active,
                  })}
                  key={index}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          {/* <div>right</div> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
