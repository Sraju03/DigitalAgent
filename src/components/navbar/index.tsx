import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Users,
  Megaphone,
  Contact,
  Layout,
  BarChart3,
  Settings,
  ChevronLeft,
  Zap,
} from "lucide-react";

import styles from "./Sidebar.module.css";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/", icon: "LayoutDashboard" },
  { label: "Posts", href: "/posts", icon: "FileText" },
  { label: "Users", href: "/users", icon: "Users" },
  { label: "Marketing", href: "/marketing", icon: "Megaphone" },
  { label: "Contacts", href: "/contacts", icon: "Contact" },
  { label: "Layouts", href: "/layouts", icon: "Layout" },
  { label: "Analytics", href: "/analytics", icon: "BarChart3" },
  { label: "Settings", href: "/settings", icon: "Settings" },
];

const APP_CONFIG = {
  name: "Your App",
};

const iconMap = {
  LayoutDashboard,
  FileText,
  Users,
  Megaphone,
  Contact,
  Layout,
  BarChart3,
  Settings,
};

type SidebarProps = {
  isCollapsed?: boolean;
  onToggle: () => void;
};

export default function Sidebar({
  isCollapsed = false,
  onToggle,
}: SidebarProps) {
  const location = useLocation();

  return (
    <aside
      className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ""}`}
    >
      {/* Logo Section */}
      <div className={styles.logoSection}>
        <Link to="/" className={styles.logoLink}>
          <div className={styles.logoIcon}>
            <Zap size={20} color="white" />
          </div>

          {!isCollapsed && (
            <span className={styles.logoText}>{APP_CONFIG.name}</span>
          )}
        </Link>
      </div>

      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className={`${styles.toggleButton} ${
          isCollapsed ? styles.rotated : ""
        }`}
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <ChevronLeft size={16} />
      </button>

      {/* Navigation */}
      <nav className={styles.navigation}>
        {NAV_ITEMS.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];
          const isActive = location.pathname === item.href;

          return (
            <Link
              key={item.href}
              to={item.href}
              className={`${styles.navItem} ${
                isActive ? styles.active : ""
              } ${isCollapsed ? styles.navCollapsed : ""}`}
            >
              <Icon className={styles.navIcon} size={20} />

              {!isCollapsed && (
                <span className={styles.navLabel}>{item.label}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Pro Card */}
      <div className={styles.bottomSection}>
        <div
          className={`${styles.proCard} ${
            isCollapsed ? styles.proCollapsed : ""
          }`}
        >
          {!isCollapsed ? (
            <>
              <div className={styles.proTop}>
                <div className={styles.proIcon}>
                  <Zap size={16} color="white" />
                </div>

                <div>
                  <p className={styles.proTitle}>Pro Plan</p>

                  <span className={styles.badge}>Active</span>
                </div>
              </div>

              <button className={styles.upgradeButton}>Upgrade Plan</button>
            </>
          ) : (
            <div className={styles.collapsedPro}>
              <div className={styles.proIcon}>
                <Zap size={20} color="white" />
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
