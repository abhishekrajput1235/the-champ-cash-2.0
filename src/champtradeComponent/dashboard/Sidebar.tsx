import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, DollarSign, Users, GitFork, 
  RefreshCw, Wallet, Coins, Ticket as TicketHelp, 
  HelpCircle, Settings, Menu, X 
} from 'lucide-react';
import { useState, useEffect } from 'react';

function Sidebar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // const menuSections = [
  //   {
  //     title: 'Overview',
  //     items: [
  //       { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' }
  //     ]
  //   },
  //   {
  //     title: 'Earnings & Team',
  //     items: [
  //       { icon: DollarSign, label: 'My Earnings', path: '/dashboard/my-earnings' },
  //       { icon: Users, label: 'My Team', path: '/dashboard/my-team' },
  //       { icon: GitFork, label: 'My Referrals', path: '/dashboard/my-referrals' }
  //     ]
  //   },
  //   {
  //     title: 'Investment',
  //     items: [
  //       { icon: RefreshCw, label: 'Reinvestment', path: '/dashboard/reinvestment' },
  //       { icon: Wallet, label: 'Withdraw', path: '/dashboard/withdraw' },
  //       { icon: Coins, label: 'Buy Tokens', path: '/dashboard/buy-tokens' }
  //     ]
  //   },
  //   {
  //     title: 'Support',
  //     items: [
  //       { icon: TicketHelp, label: 'Support', path: '/dashboard/support' },
  //       { icon: HelpCircle, label: 'Help Center', path: '/dashboard/help' }
  //     ]
  //   },
  //   {
  //     title: 'Account',
  //     items: [
  //       { icon: Settings, label: 'Settings', path: '/dashboard/settings' }
  //     ]
  //   }
  // ];

  const menuSections = [
    {
      title: 'Overview',
      items: [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/champ-trade-dashboard' }
      ]
    },
    {
      title: 'Earnings & Team',
      items: [
        { icon: DollarSign, label: 'My Earnings', path: '/champ-trade-dashboard/my-earnings' },
        { icon: Users, label: 'My Team', path: '/champ-trade-dashboard/my-team' },
        { icon: GitFork, label: 'My Referrals', path: '/champ-trade-dashboard/my-referrals' }
      ]
    },
    {
      title: 'Investment',
      items: [
        { icon: RefreshCw, label: 'Reinvestment', path: '/champ-trade-dashboard/reinvestment' },
        { icon: Wallet, label: 'Withdraw', path: '/champ-trade-dashboard/withdraw' },
        { icon: Coins, label: 'Buy Tokens', path: '/champ-trade-dashboard/buy-tokens' }
      ]
    },
    {
      title: 'Support',
      items: [
        { icon: TicketHelp, label: 'Support', path: '/champ-trade-dashboard/support' },
        { icon: HelpCircle, label: 'Help Center', path: '/champ-trade-dashboard/help' }
      ]
    },
    {
      title: 'Account',
      items: [
        { icon: Settings, label: 'Settings', path: '/champ-trade-dashboard/settings' }
      ]
    }
  ];
  
  return (
    <>
      {/* Mobile toggle button */}
      {isMobile && (
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-dark-green-dark text-golden border border-golden/30"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`
          w-64 bg-dark-green-light border-r border-golden/20 h-screen
          ${isMobile ? 'fixed top-0 z-40' : 'sticky top-0 z-30'}
          transition-all duration-300 ease-in-out
          ${isMobile ? (isOpen ? 'left-0' : '-left-64') : 'left-0'}
        `}
      >
        <nav className="pt-16 lg:pt-4 p-4 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-dark-green-dark scrollbar-track-dark-green-light">
          <div className="space-y-6">
            {menuSections.map((section) => (
              <div key={section.title} className="mb-6">
                <h3 className="text-xs font-semibold text-golden uppercase tracking-wider px-4 mb-2">
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.items.map(({ icon: Icon, label, path }) => {
                    const isActive = pathname.startsWith(path);
                    return (
                      <li key={path}>
                        <Link
                          to={path}
                          onClick={() => isMobile && setIsOpen(false)}
                          className={`
                            flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors text-sm
                            ${isActive
                              ? 'bg-golden/90 text-dark-green font-medium'
                              : 'text-golden-white hover:bg-dark-green-dark/80'}
                          `}
                        >
                          <Icon className="h-5 w-5" strokeWidth={isActive ? 2.2 : 2} />
                          <span>{label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </nav>
      </aside>

      {/* Mobile overlay */}
      {isOpen && isMobile && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default Sidebar;