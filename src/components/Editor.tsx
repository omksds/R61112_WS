import React, { useState } from 'react';

interface EditorProps {
  activeNote: string;
}

const Editor: React.FC<EditorProps> = ({ activeNote }) => {
  const [content, setContent] = useState('');

  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="border-b border-gray-200 p-4">
        <h1 className="text-3xl font-bold text-gray-800">{activeNote}</h1>
      </div>
      
      <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-3xl mx-auto">
          <div
            className="min-h-[500px] prose prose-lg focus:outline-none"
            contentEditable
            suppressContentEditableWarning
            onInput={(e) => setContent(e.currentTarget.textContent || '')}
            placeholder="ここに入力を開始..."
          >
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;