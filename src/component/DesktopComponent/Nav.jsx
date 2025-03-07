const Nav = () => {
  const navData = ['About', 'Resume', 'Portfolio', 'Blog', 'Contact'];

  return (
    <nav className="flex gap-6 p-4 bg-gray-800    shadow-md w-[50%] justify-end border-1 border-white items-end rounded-xl rounded-bl-[px] border-t-gray-900">
      {navData.map((item, index) => (
        <span
          key={index}
          className="cursor-pointer hover:text-amber-400 transition duration-200"
          onClick={() => (window.location.href = `/${item.toLowerCase()}`)}
        >
          {item}
        </span>
      ))}
    </nav>
  );
};

export default Nav;
