import React from 'react';
import { Home, Briefcase, FileText, Book, Settings } from 'lucide-react';
import { Button } from "@/components/ui/button"

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'cases', icon: Briefcase, label: 'Cases' },
    { id: 'documents', icon: FileText, label: 'Documents' },
    { id: 'laws', icon: Book, label: 'Laws' },
  ];

  return (
    <aside className="bg-primary text-primary-foreground w-64 min-h-screen p-4 flex flex-col">
      <h1 className="text-2xl font-bold mb-8">LawPro Dashboard</h1>
      <nav className="flex-grow">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id} className="mb-4">
              <Button
                variant={activeTab === item.id ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab(item.id)}
              >
                <item.icon className="mr-2" size={20} />
                {item.label}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto">
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={() => setActiveTab('settings')}
        >
          <Settings className="mr-2" size={20} />
          Settings
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;