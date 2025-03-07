const MobileNav = () => {
  const navData = ['About', 'Resume', 'Portfolio', 'Blog', 'Contact'];

  return (
    <nav className="fixed bottom-0 left-0 w-full p-3 bg-gray-950 shadow-md flex justify-center gap-4 items-center rounded-t-xl z-50">
      {navData.map((item, index) => (
        <span
          key={index}
          className="cursor-pointer text-sm text-white hover:text-amber-400 transition duration-200"
          onClick={() => (window.location.href = `/${item.toLowerCase()}`)}
        >
          {item}
        </span>
      ))}
    </nav>
  );
};

export default MobileNav;
