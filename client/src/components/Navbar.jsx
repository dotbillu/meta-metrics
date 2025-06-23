import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-900 text-white flex space-x-4">
      <Link to="/">MetaMetrics</Link>
      <Link to="/">Dashboard</Link>
    </nav>
  );
};

export default Navbar;
