import Logo from './Logo';
import HamburgerButton from './HamburgerButton';

const Header = () => {
  return (
    <header className="max-w-[120rem] w-full mx-auto h-[8rem] flex justify-between items-center py-4">
      <div>
        <Logo />
      </div>
      <div className="flex items-start gap-4">
        <div className="py-3 px-4 text-link text-gray-50 cursor-pointer">
          Movies
        </div>
        <div className="py-3 px-4 text-link text-gray-50 cursor-pointer">
          Bookmark
        </div>
        <div className="flex items-center gap-2">
          <div>
            <HamburgerButton />
          </div>
          <div className="py-3 px-4 text-link text-gray-50 cursor-pointer">Logout</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
