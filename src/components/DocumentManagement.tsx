import React, { useState } from 'react';
import { Search, Upload, Folder, File } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const DocumentManagement: React.FC = () => {
  const [documents, setDocuments] = useState([
    { id: 1, name: 'Contract_ABC_Corp.pdf', type: 'file', size: '2.3 MB', date: '2023-04-10' },
    { id: 2, name: 'Case_Files', type: 'folder', size: '--', date: '2023-03-28' },
    { id: 3, name: 'Deposition_Transcript.docx', type: 'file', size: '567 KB', date: '2023-04-05' },
  ]);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Document Management</h2>
      <div className="flex justify-between mb-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search documents..."
            className="pl-10"
          />
          <Search className="absolute left-3 top-2.5 text-muted-foreground" size={20} />
        </div>
        <Button>
          <Upload size={20} className="mr-2" />
          Upload Document
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Date Modified</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {documents.map((doc) => (
            <TableRow key={doc.id}>
              <TableCell className="flex items-center">
                {doc.type === 'folder' ? (
                  <Folder className="text-yellow-500 mr-2" size={20} />
                ) : (
                  <File className="text-blue-500 mr-2" size={20} />
                )}
                {doc.name}
              </TableCell>
              <TableCell>{doc.type}</TableCell>
              <TableCell>{doc.size}</TableCell>
              <TableCell>{doc.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DocumentManagement;