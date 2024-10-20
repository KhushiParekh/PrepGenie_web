import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Bell, Package, ShoppingCart, DollarSign, AlertTriangle } from 'lucide-react';

// Mock data (replace with actual data in your implementation)
const salesData = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 5000 },
  { name: 'Apr', sales: 3000 },
  { name: 'May', sales: 6000 },
  { name: 'Jun', sales: 1000 },
  { name: 'Jul', sales: 2500 },
  { name: 'Aug', sales: 5500 },
  { name: 'Sep', sales: 2000 },
  { name: 'Oct', sales: 5100 },
  { name: 'Nov', sales: 4500 },
  { name: 'Dec', sales: 3500 },
 
];

const expenseProfitData = [
  { name: 'Jan', expense: 3000, profit: 4000 },
  { name: 'Feb', expense: 2500, profit: 3000 },
  { name: 'Mar', expense: 4000, profit: 5000 },
  { name: 'april', expense: 3500, profit: 4000 },
 
];

const topSellingItems = [
  { name: 'Product A', sales: 1200 },
  { name: 'Product B', sales: 900 },
  { name: 'Product C', sales: 800 },
  // ... add more products
];

  
  


const Dashboard = () => {
  return (
    <div className="min-h-screen p-6 shadow-inner bg-slate-300 shadow-slate-400">
      <h1 className="mb-6 text-3xl font-bold">Dashboard</h1>
      
      {/* Sales Report, Orders, and Sold Items */}
      <div className="grid grid-cols-3 gap-6 mb-6 md:grid-cols-3">
        <SalesReportCard />
        <OrdersCard />
        <SoldItemsCard />
      </div>

      {/* Notifications Card */}
      <div className="mb-6">
        <NotificationsCard />
      </div>

      {/* Top Selling Items and Product Details */}
      <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
        <TopSellingItemsCard />
        <ProductDetailsCard />
      </div>

      {/* Expense vs Profit Graph */}
      <div className="mb-6">
         <ExpenseProfitCard />
       </div>
     </div>
  );
};

const SalesReportCard = () => (
  <div className="p-4 bg-white rounded-lg shadow cursor-pointer">
    <h2 className="mb-4 text-xl font-semibold">Sales Report</h2>
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={salesData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="sales" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

const OrdersCard = () => (
  <div className="p-4 bg-white rounded-lg shadow">
    <h2 className="mb-4 text-xl font-semibold">Orders</h2>
    <div className="flex items-center justify-center">
      <Package size={48} className="mr-4 text-blue-500" />
      <span className="text-3xl font-bold">1,234</span>
    </div>
  </div>
);

const SoldItemsCard = () => (
  <div className="p-4 bg-white rounded-lg shadow">
    <h2 className="mb-4 text-xl font-semibold">Items Sold</h2>
    <div className="flex items-center justify-center">
      <ShoppingCart size={48} className="mr-4 text-green-500" />
      <span className="text-3xl font-bold">5,678</span>
    </div>
  </div>
);

const NotificationsCard = () => (
  <div className="p-4 bg-white rounded-lg shadow">
    <h2 className="mb-4 text-xl font-semibold">Notifications</h2>
    <div className="flex items-center">
      <Bell size={24} className="mr-2 text-yellow-500" />
      <span>3 products are nearing expiration date</span>
    </div>
  </div>
);

const TopSellingItemsCard = () => (
  <div className="p-4 bg-white rounded-lg shadow">
    <h2 className="mb-4 text-xl font-semibold">Top Selling Items</h2>
    <ul>
      {topSellingItems.map((item, index) => (
        <li key={index} className="flex items-center justify-between mb-2">
          <span>{item.name}</span>
          <span className="font-semibold">{item.sales}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ProductDetailsCard = () => (
  <div className="p-4 bg-white rounded-lg shadow">
    <h2 className="mb-4 text-xl font-semibold">Product Details</h2>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h3 className="font-semibold">Low Stock Items</h3>
        <span className="text-red-500">15</span>
      </div>
      <div>
        <h3 className="font-semibold">Item Categories</h3>
        <span>8</span>
      </div>
      <div>
        <h3 className="font-semibold">Total Items</h3>
        <span>1,234</span>
      </div>
    </div>
  </div>
);

const ExpenseProfitCard = () => (
  <div className="p-4 bg-white rounded-lg shadow">
    <h2 className="mb-4 text-xl font-semibold">Expense vs Profit</h2>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={expenseProfitData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="expense" stroke="#ff7300" />
        <Line type="monotone" dataKey="profit" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default Dashboard;
