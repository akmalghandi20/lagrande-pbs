export default function Sidebar() {
    return (
      <aside className="bg-white h-screen w-64 p-6 shadow-md fixed top-0 left-0 flex flex-col">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">☕ HOT & COLD</h2>
        <ul className="space-y-4 text-sm">
          <li className="text-orange-500 font-semibold hover:text-orange-700 cursor-pointer">Dashboard</li>
          <li className="hover:text-gray-600 cursor-pointer">Restaurants</li>
          <li className="hover:text-gray-600 cursor-pointer">Delivery Partners</li>
          <li className="hover:text-gray-600 cursor-pointer">Customers</li>
          <li className="hover:text-gray-600 cursor-pointer">Promotions</li>
          <li className="hover:text-gray-600 cursor-pointer">Settings</li>
          <li className="hover:text-gray-600 cursor-pointer">Notifications</li>
        </ul>
      </aside>
    );
  }
  