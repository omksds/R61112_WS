import React from 'react';
import { Menu, Plus, Search, Settings, ChevronDown, File, Folder } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  activeNote: string;
  setActiveNote: (note: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, activeNote, setActiveNote }) => {
  const pages = [
    { id: 1, title: '新規ページ', icon: File },
    { id: 2, title: 'プロジェクト', icon: Folder },
    { id: 3, title: 'タスク管理', icon: File },
    { id: 4, title: '会議ノート', icon: File },
  ];

  return (
    <aside className={`fixed left-0 top-0 h-screen bg-gray-50 border-r border-gray-200 transition-all duration-300 ${isOpen ? 'w-64' : 'w-0 -translate-x-full'}`}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => setIsOpen(!isOpen)} className="p-1 hover:bg-gray-200 rounded">
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
          <Settings className="w-5 h-5 text-gray-600 cursor-pointer" />
        </div>
        
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="検索"
            className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-transparent rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none text-sm"
          />
        </div>

        <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-200 rounded-md px-3 py-2 w-full mb-6">
          <Plus className="w-4 h-4" />
          <span className="text-sm">新規ページ</span>
        </button>

        <div className="space-y-1">
          {pages.map((page) => (
            <button
              key={page.id}
              onClick={() => setActiveNote(page.title)}
              className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-sm ${
                activeNote === page.title ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              <page.icon className="w-4 h-4" />
              <span>{page.title}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;