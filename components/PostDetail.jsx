import React from 'react'
import moment from 'moment'

const PostDetail = ({ post }) => {
    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text

        if (obj) {
            if (obj.bold) {
                modifiedText = (<b key={index} >{text}</b>)
            }
            if (obj.italic) {
                modifiedText = (<em key={index} >{text}</em>)
            }
            if (obj.underline) {
                modifiedText = (<u key={index} >{text}</u>)
            }
        }

        switch (type) {
            case 'heading-two':
                return <h2 key={index} className="text-2xl font-semibold mb-4" >{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h2>
            case 'heading-three':
                return <h3 key={index} className="text-xl font-semibold mb-4" >{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>
            case 'heading-four':
                return <h4 key={index} className="text-md font-semibold mb-4" >{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>
            case 'paragraph':
                return <p key={index} className="my-3" >{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>
            case 'image':
                return (
                    <img
                        key={index}
                        alt={obj.title}
                        height={obj.height}
                        width={obj.width}
                        src={obj.src}
                    />
                )
            case 'numbered-list':
                return (
                    <ol key={index} className="list-decimal list-outside mb-4 ml-10">
                        {obj.children.map((itemObj, i) => <li key={i} >{itemObj.children[0].children[0].text}</li>) }
                    </ol>
                )
            case 'bulleted-list':
                return (
                    <ul key={index} className="list-outside list-disc mb-4 ml-10">
                        {obj.children.map((itemObj, i) => <li key={i} >{itemObj.children[0].children[0].text}</li>) }
                    </ul>
                )
            case 'code-block':
                return (
                    <pre key={index} className="block overflow-x-auto font-mono my-3 py-1 px-3 bg-gray-100 text-gray-700 border-gray-300 border rounded">
                        <code className="whitespace-pre">
                            {modifiedText}
                        </code>
                    </pre>
                )
            case 'block-quote':
                return (
                    // <blockquote className="italic bg-gray-100 pl-4 pr-2 py-2 border-l-2 border-solid border-gray-800 my-3 mx-2">
                    <blockquote key={index} className="my-3 p-4 text-lg italic border-l-4 bg-gray-50 text-gray-900 border-gray-500 ">
                        {/* <div className="text-8xl mr-2 hidden font-mono text-gray-500 absolute -top-7 right-0 leading-none sm:block" aria-hidden="true">
                            &ldquo;
                        </div> */}
                        {modifiedText}
                    </blockquote>
                )
            default:
                return modifiedText
        }
        
    }
    
    return (
        <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
            <div className="relative overflow-hidden shadow-empty mb-6">
                <img 
                    src={post.featuredImage.url}
                    alt={post.title}
                    className="object-top h-full w-full rounded-t-lg"
                />
            </div>
            <div className="px-6 lg:px-0">
                <div className="flex flex-wrap items-center mb-4 w-full">
                    <div className="flex items-center mb-4 w-auto mr-4 lg:mr-8">
                        <img
                            src={post.author.photo.url}
                            alt={post.author.name}
                            height="30px"
                            width="30px"
                            className="align-middle rounded-full"
                        />
                        <p className="inline align-middle text-gray-700 ml-2 text-lg">
                            {post.author.name}
                        </p>
                    </div>
                    <div className="flex items-center mb-4 font-medium text-gray-700 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline align-middle mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        <p className="inline align-middle">
                            {moment(post.createdAt).format('MMM DD, YYYY')}
                        </p>
                    </div>
                </div>
                <h1 className="mb-8 text-4xl font-semibold">
                    {post.title}
                </h1>
                <div>
                    { post.content.raw.children.map((typeObj, index) => {
                            const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))
                        return getContentFragment(index, children, typeObj, typeObj.type)
                    }) }
                </div>
            </div>
        </div>
    )
}

export default PostDetail
