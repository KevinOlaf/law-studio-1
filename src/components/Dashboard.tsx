import React from 'react';
import { BarChart, Users, FileText, DollarSign, Briefcase } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { icon: Briefcase, label: 'Active Cases', value: 24 },
    { icon: Users, label: 'Clients', value: 156 },
    { icon: FileText, label: 'Documents', value: 1043 },
    { icon: DollarSign, label: 'Revenue', value: '$253,890' },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-card text-card-foreground p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="text-primary" size={24} />
              <span className="text-2xl font-bold">{stat.value}</span>
            </div>
            <p className="text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 bg-card text-card-foreground p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
        <ul className="space-y-4">
          <li className="flex items-center">
            <BarChart className="text-green-500 mr-2" size={20} />
            <span>New case filed: Johnson vs. Smith</span>
          </li>
          <li className="flex items-center">
            <FileText className="text-blue-500 mr-2" size={20} />
            <span>Document uploaded: Deposition transcript</span>
          </li>
          <li className="flex items-center">
            <Users className="text-purple-500 mr-2" size={20} />
            <span>New client onboarded: ABC Corporation</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;