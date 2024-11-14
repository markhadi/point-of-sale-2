import logo from '@/assets/images/logo-header.png';
import { Link } from 'react-router-dom';

export const Logo = () => (
  <Link
    to="/dashboard"
    className="flex-shrink-0 hidden sm:block"
  >
    <img
      src={logo}
      alt="logo header"
      className="h-[49px]"
    />
  </Link>
);
