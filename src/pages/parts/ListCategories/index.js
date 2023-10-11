import React from 'react'
import RenderItem from './RenderItem'

import BusinessDevelopment from '../../../../public/images/icon-business-development.svg'
import ContentWriter from '../../../../public/images/icon-content-writer.svg'
import ProductAdvertisment from '../../../../public/images/icon-product-advertisment.svg'
import CostomerRelationship from '../../../../public/images/icon-costomer-relationship.svg'
import GameDevelopment from '../../../../public/images/icon-game-development.svg'
import TravelGuidance from '../../../../public/images/icon-travel-guidance.svg'


export default function index() {
    const data = [
        {
            Imagename : <BusinessDevelopment />,
            Name : "Business Development",
            Total : 12493
        },
        {
            Imagename : <ContentWriter />,
            Name : "Content Writer",
            Total : 839
        }, {
            Imagename : <ProductAdvertisment />,
            Name : "Product Advertisment",
            Total : 478
        }, {
            Imagename : <CostomerRelationship />,
            Name : "Costomer Relationship",
            Total : 553
        }, {
            Imagename : <GameDevelopment />,
            Name : "Game Development",
            Total : 7309
        }, {
            Imagename : <TravelGuidance />,
            Name : "Travel Guidance",
            Total : 73
        },
    ]
  return (
    <>
          <div className="flex justify-between items-center">
        <div className="w-auto">
          <h2 className="text-lg text-gray-600">Category</h2>
          <h3 className="text-xl text-gray-600">
            Explore & <span className="text-teal-400">Learn</span>
          </h3>
        </div>
      </div>
      <div className="flex justify-start items-center -mx-4 mt-6">
        {data?.length > 0 ? (
          data.map((item, index) => {
            return <RenderItem item={item} key={index}></RenderItem>;
          })
        ) : (
          <div className="w-full text-center-py-12">No Item Found</div>
        )}
      </div>
    </>
  )
}
