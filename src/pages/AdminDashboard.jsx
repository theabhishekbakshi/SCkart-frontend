import HomePage from '@/components/admin/HomePage'
import OrdersPage from '@/components/admin/OrdersPage'
import InfoPage from '@/components/admin/InfoPage'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Home, Info, ShoppingBag } from 'lucide-react'

const AdminDashboard = () => {

    const [selectedPage, setSelectedPage] = useState("home")
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const renderPageContent = () => {
        switch (selectedPage){
            case "home": return <HomePage/>;
            case "orders": return <OrdersPage/>;
            case "info": return <InfoPage/>;
            default: return <HomePage/>
        }
    }
  return (
    <div className='flex min-h-screen'>
      {/* sidebar */}
      <div className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed lg:relative lg:translate-x-0 h-full shadow-lg transition-transform duration-300 bg-background/50 border-b backdrop-blur z-50`}>
        <div className="flex flex-col h-full p-4">
            <h1 className="text-lg font-bold mb-4">Admin Panel</h1>
            <div className="space-y-4">
                <Button variant='ghost' onClick={()=>setSelectedPage("home")} className={`w-full flex items-center gap-2 ${selectedPage === "home" ? "bg-gray-500" : ""}`}><Home className='w-5 h-5'/> Home</Button>
                <Button variant='ghost' onClick={()=>setSelectedPage("orders")} className={`w-full flex items-center gap-2 ${selectedPage === "orders" ? "bg-gray-500" : ""}`}><ShoppingBag className='w-5 h-5'/> Orders</Button>
                <Button variant='ghost' onClick={()=>setSelectedPage("info")} className={`w-full flex items-center gap-2 ${selectedPage === "info" ? "bg-gray-500" : ""}`}><Info className='w-5 h-5'/> Info</Button>
                {/* <Button variant='ghost' className="lg:hidden" onClick={()=>}></Button> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
