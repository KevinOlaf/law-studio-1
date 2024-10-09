import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Law {
  id: number;
  title: string;
  category: string;
  lastUpdated: string;
}

const Laws: React.FC = () => {
  const [laws, setLaws] = useState<Law[]>([
    { id: 1, title: 'Criminal Code', category: 'Criminal Law', lastUpdated: '2023-05-15' },
    { id: 2, title: 'Civil Procedure Rules', category: 'Civil Law', lastUpdated: '2023-06-22' },
    { id: 3, title: 'Family Law Act', category: 'Family Law', lastUpdated: '2023-04-10' },
    { id: 4, title: 'Employment Standards Act', category: 'Labor Law', lastUpdated: '2023-07-01' },
    { id: 5, title: 'Environmental Protection Act', category: 'Environmental Law', lastUpdated: '2023-03-28' },
  ]);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Laws and Regulations</h2>
      <div className="mb-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search laws..."
            className="pl-10"
          />
          <Search className="absolute left-3 top-2.5 text-muted-foreground" size={20} />
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Last Updated</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {laws.map((law) => (
            <TableRow key={law.id}>
              <TableCell>{law.title}</TableCell>
              <TableCell>{law.category}</TableCell>
              <TableCell>{law.lastUpdated}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Laws;