'use client'

import Breadcrumb from '@/components/Breadcrumb'
import Sidebar from '@/components/Sidebar'
import { Table } from '@/components/Table'
import TopDashboard from '@/components/TopDashboard'
import Topmenu from '@/components/Topmenu'
import Info from '@/components/info'

export default function Home() {
  return (
    <div class="wrapper">
      <Sidebar />
      <div id="content">
        <Topmenu />
        <Breadcrumb />
        <Info />
        <div id='dashboard'>
          <TopDashboard />
        </div>
        <div id='table'>
          <Table />
        </div>
      </div>
    </div>
  )
}
