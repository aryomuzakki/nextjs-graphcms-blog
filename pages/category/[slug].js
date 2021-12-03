import React from 'react'
import { PostCard, Categories } from '../../components'
import { getCategories, getPostsByCategory } from '../../services'


const CategoryDetails = ({ posts }) => {
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="col-span-1 lg:col-span-8">
                    { posts.map((post) => <PostCard post={post} key={post.title} />) }
                </div>
                <div className="col-span-1 lg:col-span-4">
                    <div className="relative lg:sticky top-8">
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryDetails

export async function getStaticProps({ params }) {
    const data = (await getPostsByCategory(params.slug)) || []

    return {
        props: { posts: data }
    }
}

export async function getStaticPaths() {
    const categories = await getCategories() || []

    return {
        paths: categories.map(({ slug }) => ({params: { slug }}) ),
        fallback: false
    }
}