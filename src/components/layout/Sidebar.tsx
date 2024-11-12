import { Link } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/cashier', label: 'Cashier' },
    { path: '/transaction', label: 'Transaction' },
    { path: '/master-item', label: 'Master Item' },
    { path: '/master-item/category', label: 'Category' },
    { path: '/master-item/brand', label: 'Brand' },
    { path: '/master-item/units', label: 'Units' },
    { path: '/master-price', label: 'Master Price' },
    { path: '/supplier', label: 'Supplier' },
    { path: '/receive', label: 'Receive' },
    { path: '/issued', label: 'Issued' },
    { path: '/user-manager', label: 'User Manager' },
  ];

  return (
    <aside className="sidebar">
      <nav>
        {menuItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className="block"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
