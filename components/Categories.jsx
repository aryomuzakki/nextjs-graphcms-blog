import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then((result) => setCategories(result))
    }, [])
    
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
            <h3 className="text-xl mb-4 font-semibold border-b pb-2">
                Categories
            </h3>
            { categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`} className="text-md">
                    <span className="cursor-pointer block pb-2 mb-2">
                        {category.name}
                    </span>
                </Link>
            )) }
        </div>
    )
}

export default Categories