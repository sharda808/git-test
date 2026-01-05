const Sidebar = () => {
return (
<div className="w-64 bg-gray-900 text-white min-h-screen p-6">
<h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
<ul className="space-y-4">
<li className="hover:text-blue-400 cursor-pointer">Dashboard</li>
<li className="hover:text-blue-400 cursor-pointer">Product</li>
<li className="hover:text-blue-400 cursor-pointer">Orders</li>
<li className="hover:text-blue-400 cursor-pointer">Users</li>
</ul>

</div>
)

}
export default Sidebar;