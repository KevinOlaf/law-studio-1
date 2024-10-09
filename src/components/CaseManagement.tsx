import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const CaseManagement: React.FC = () => {
  const [cases, setCases] = useState([
    { id: 1, title: 'Johnson vs. Smith', status: 'Active', date: '2023-03-15' },
    { id: 2, title: 'ABC Corp Merger', status: 'Pending', date: '2023-04-02' },
    { id: 3, title: 'Estate of Jane Doe', status: 'Closed', date: '2023-02-28' },
  ]);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Case Management</h2>
      <div className="flex justify-between mb-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search cases..."
            className="pl-10"
          />
          <Search className="absolute left-3 top-2.5 text-muted-foreground" size={20} />
        </div>
        <Button>
          <Plus size={20} className="mr-2" />
          New Case
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Case Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cases.map((case_) => (
            <TableRow key={case_.id}>
              <TableCell>{case_.title}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-sm ${
                  case_.status === 'Active' ? 'bg-green-200 text-green-800' :
                  case_.status === 'Pending' ? 'bg-yellow-200 text-yellow-800' :
                  'bg-gray-200 text-gray-800'
                }`}>
                  {case_.status}
                </span>
              </TableCell>
              <TableCell>{case_.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CaseManagement;