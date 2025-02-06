"use client"
import { useParams } from 'next/navigation'
import React from 'react'
import services from "../../../../products/products.json";

const page = () => {
  return (
    <div>
      <h1>{service.category}</h1>
    </div>
  )
}

export default page
