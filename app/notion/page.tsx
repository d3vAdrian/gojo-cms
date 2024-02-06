import { Sidebar } from '@/components/notion/Sidebar'
import React from 'react'

const page = () => {
  return (
    <>
      <div className="flex  w-screen h-screen">
        <Sidebar/>
        <div className="mt-20">
          p Notion Side Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore numquam nemo unde nulla illum placeat exercitationem, veritatis enim quas illo, aut molestias.
        </div>
      </div>
    </>
  )
}

export default page