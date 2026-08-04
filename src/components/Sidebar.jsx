import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AiOutlineHome,
  AiOutlineDashboard,
  AiOutlineBook,
  AiOutlineFolderOpen,
  AiOutlineBarChart,
  AiOutlineSetting,
  AiOutlineMessage,
  AiOutlineLink,
  AiOutlineEdit,
  AiOutlineDown,
  AiOutlineSearch,
} from 'react-icons/ai';
import './Sidebar.css';

const Sidebar = () => {
  const [expandedItems, setExpandedItems] = useState({});
  const location = useLocation();

  const toggleExpanded = (label) => {
    setExpandedItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const navItems = [
    { label: 'Home', href: '/', icon: AiOutlineHome },
    { label: 'Dashboard', href: '/dashboard', icon: AiOutlineDashboard },
    { label: 'Practice', href: '/practice', icon: AiOutlineEdit },
    { label: 'Learn', href: '/learn', icon: AiOutlineBook },
    { divider: true },
    {
      label: 'Folders',
      icon: AiOutlineFolderOpen,
      href: '/folders',
      items: [
        { label: 'Sample', badge: 18, href: '/folders/sample' },
      ],
    },
    { divider: true },
    { label: 'Settings', href: '/settings', icon: AiOutlineSetting },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <aside className="sidebar">
      {/* Header */}
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="logo-icon">H</div>
          <span>Hirakanjee</span>
        </div>
      </div>

      {/* Search */}
      <div className="sidebar-search">
        <AiOutlineSearch className="search-icon" />
        <input type="text" placeholder="Search" />
      </div>

      {/* Navigation Items */}
      <nav className="sidebar-nav">
        {navItems.map((item, index) => {
          if (item.divider) {
            return <div key={`divider-${index}`} className="nav-divider" />;
          }

          const Icon = item.icon;
          const active = isActive(item.href);
          const expanded = expandedItems[item.label];
          const hasSubItems = item.items && item.items.length > 0;

          return (
            <div key={item.label}>
              <div
                className={`nav-item ${active ? 'active' : ''}`}
                onClick={() => hasSubItems && toggleExpanded(item.label)}
              >
                {item.external ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="nav-link">
                    <Icon className="nav-icon" />
                    <span className="nav-label">{item.label}</span>
                    {item.badge && <span className="nav-badge external-badge">↗</span>}
                  </a>
                ) : (
                  <Link to={item.href} className="nav-link">
                    <Icon className="nav-icon" />
                    <span className="nav-label">{item.label}</span>
                    {item.badge && (
                      <span className={`nav-badge badge-${item.badge.type}`}>
                        {item.badge.text}
                      </span>
                    )}
                    {hasSubItems && (
                      <AiOutlineDown
                        className={`chevron ${expanded ? 'expanded' : ''}`}
                      />
                    )}
                  </Link>
                )}
              </div>

              {/* Sub Items */}
              {hasSubItems && expanded && (
                <div className="nav-subitems">
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.href}
                      to={subItem.href}
                      className={`nav-subitem ${isActive(subItem.href) ? 'active' : ''}`}
                    >
                      <span className="subitem-label">{subItem.label}</span>
                      {subItem.badge && <span className="subitem-badge">{subItem.badge}</span>}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="user-avatar">J</div>
          <div className="user-info">
            <p className="user-name">John Doe</p>
            <p className="user-email">john@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
