import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { User, Moon, Sun, CreditCard } from 'lucide-react';

const Settings: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold mb-6">Settings</h2>

      {/* User Profile Card */}
      <Card className="p-6">
        <div className="flex items-center space-x-4">
          <div className="bg-primary text-primary-foreground rounded-full p-3">
            <User size={32} />
          </div>
          <div>
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-muted-foreground">john.doe@example.com</p>
          </div>
        </div>
      </Card>

      {/* Account Settings */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Account Settings</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="Your username" defaultValue="johndoe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Your email" defaultValue="john.doe@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Preferences</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="language">Language</Label>
            <select id="language" className="w-full p-2 border rounded">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>Thai</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="theme">Dark Mode</Label>
            <Switch
              id="theme"
              checked={isDarkMode}
              onCheckedChange={setIsDarkMode}
            />
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="notifications" />
            <Label htmlFor="notifications">Enable email notifications</Label>
          </div>
        </div>
      </div>

      {/* Subscription Management */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Subscription</h3>
        <Card className="p-6">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-semibold">Current Plan: Pro</h4>
              <p className="text-muted-foreground">Billed annually</p>
            </div>
            <Button variant="outline">
              <CreditCard className="mr-2 h-4 w-4" /> Manage Subscription
            </Button>
          </div>
        </Card>
      </div>

      <Button className="w-full">Save Changes</Button>
    </div>
  );
};

export default Settings;