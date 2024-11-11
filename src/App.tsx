import React, { useState } from 'react';
import { Menu, Plus, Search, Settings, ChevronDown, File, Folder } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeNote, setActiveNote] = useState('新規ページ');

  return (
    <div className="flex h-screen bg-white">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} activeNote={activeNote} setActiveNote={setActiveNote} />
      <main className={`flex-1 flex flex-col ${isSidebarOpen ? 'ml-64' : 'ml-0'} transition-all duration-300`}>
        <Editor activeNote={activeNote} />
      </main>
    </div>
  );
}

export default App;