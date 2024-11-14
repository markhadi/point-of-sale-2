/**
 * @file Main dashboard page component with tabs for different metric views
 */

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import General from '@/components/dashboard/General';
import Inventory from '@/components/dashboard/Inventory';
import Cashier from '@/components/dashboard/Cashier';

/**
 * Dashboard page component with tabbed navigation and year selection
 * @component
 * @returns {JSX.Element} The main dashboard page with tabs and year filter
 */
const Dashboard = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

  return (
    <div className="main">
      <div className="relative">
        {/* Dashboard Tabs */}
        <Tabs
          defaultValue="general"
          className="w-full"
        >
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="cashier">Cashier</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <General />
          </TabsContent>
          <TabsContent value="inventory">
            <Inventory />
          </TabsContent>
          <TabsContent value="cashier">
            <Cashier />
          </TabsContent>
        </Tabs>

        {/* Year Selection */}
        <Select
          value={selectedYear}
          onValueChange={setSelectedYear}
        >
          <SelectTrigger className="w-max lg:w-[180px] absolute right-0 top-0">
            <SelectValue placeholder="Select year" />
          </SelectTrigger>
          <SelectContent>
            {years.map(year => (
              <SelectItem
                key={year}
                value={year.toString()}
              >
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Dashboard;
