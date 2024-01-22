const Header = () => {
  return (
    <header className="h-[60px] w-full">
      <nav className="w-full relative bg-emerald-100">
        <div className="inner">
          <div>left</div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            middle
          </div>
          <div>right</div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
