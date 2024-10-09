import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CaseManagement from './components/CaseManagement';
import DocumentManagement from './components/DocumentManagement';
import Laws from './components/Laws';
import Settings from './components/Settings';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-8">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'cases' && <CaseManagement />}
        {activeTab === 'documents' && <DocumentManagement />}
        {activeTab === 'laws' && <Laws />}
        {activeTab === 'settings' && <Settings />}
      </main>
    </div>
  );
}

export default App;