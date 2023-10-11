import React from 'react'
import Link from 'next/link'

import FormatTousand from '../../helpers/ThousandFormat'



export default function RenderItem({ item }) {
  return (
    <div className="w-1/6 h-100">
        <div className="card relative transition-all duration-300">
        {item.Imagename}
        <div className="card-meta mt-10">
    <h4 className="text-lg transition-all duration-300 w-1/2">
        {item.Name}
    </h4>
    <h5 className="text-sm transition-all mt-2 duration-500">
        { FormatTousand( item.Total )}
    </h5>
    <Link href={'#'} className='link-wrapped'></Link>
        </div>
        </div>
    </div>
  )
}
