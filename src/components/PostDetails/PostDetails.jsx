import React, { useEffect, useState, useMemo } from 'react';
import { useLocation, Link } from "react-router-dom";
import { PortableText } from '@portabletext/react';
import { getImageDimensions } from '@sanity/asset-utils';
import "./postDetails.scss";
import { urlFor } from '../../client';
import { SocialShare, TruncatedPortableText } from "../../components";

const PostDetails = () => {
    const location = useLocation();
    const [post, setPost] = useState(location.state?.post || null);
    const [suggestedPost, setSuggestedPost] = useState(null);

    useEffect(() => {
        const newPost = location.state?.post || null;
        setPost(newPost);

        // Get the suggested post (excluding the current post)
        const allPosts = location.state?.allPosts || []; // Ensure we pass all posts in the state
        if (newPost && allPosts.length > 1) {
            const filteredPosts = allPosts.filter(p => p.no !== newPost.no); // Exclude the current post
            const randomSuggestedPost = filteredPosts[Math.floor(Math.random() * filteredPosts.length)];
            setSuggestedPost(randomSuggestedPost);
        } else {
            setSuggestedPost(newPost); // Fallback to the current post if no others exist
        }
    }, [location]); // Runs every time location changes

    const SampleImageComponent = useMemo(() => ({ value, isInline }) => {
        const { width, height } = getImageDimensions(value);
        return (
            <img
                src={urlFor(value).width(isInline ? 100 : 800).fit('max').auto('format').url()}
                alt={value.alt || ' '}
                loading="lazy"
                style={{
                    marginBottom: '40px',
                    display: isInline ? 'inline-block' : 'block',
                    aspectRatio: width / height,
                }}
            />
        );
    }, []);

    const components = useMemo(() => ({
        types: {
            image: SampleImageComponent,
        },
        marks: {
            em: ({ children }) => <em className="mb-10 lg:text-xl text-gray-600 font-semibold">{children}</em>,
            link: ({ value, children }) => {
                const target = (value?.href || "").startsWith("http") ? "_blank" : undefined;
                return (
                    <a href={value?.href} target={target} rel={target === "_blank" ? "noopener noreferrer nofollow" : undefined}>
                        {children}
                    </a>
                );
            },
        },
        block: {
            normal: ({ children }) => <p className="mb-10 p__text lg:text-xl">{children}</p>,
            h1: ({ children }) => <h1 className="mb-10 p__text font-bold lg:text-4xl">{children}</h1>,
            h2: ({ children }) => <h2 className="mb-10 p__text font-bold lg:text-3xl">{children}</h2>,
            h3: ({ children }) => <h3 className="mb-10 p__text font-bold lg:text-2xl">{children}</h3>,
            blockquote: ({ children }) => <blockquote className="mb-10 border-l-4 border-[#e89611] pl-4 italic">{children}</blockquote>,
        },
        list: {
            bullet: ({ children }) => <ul className="mb-10 p__text text-xl text-left list-disc pl-5">{children}</ul>,
            number: ({ children }) => <ol className="mb-10 p__text text-xl text-left list-decimal pl-5">{children}</ol>,
        }
    }), [SampleImageComponent]);

    if (!post) {
        return <h2>Post not found</h2>;
    }

    return (
        <div className='relative flex flex-col'>
            <div className="relative flex items-end justify-center min-h-[400px] p-12 bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${urlFor(post.mainImage)})` }}>
                <div className="overlay absolute inset-0 bg-black/50 opacity-50"></div>
                <h1 className="text-white p2__text font-bold text-2xl md:text-5xl lg:text-6xl max-w-[900px] text-center relative z-10">{post.title}</h1>
            </div>

            <div className='app__flex w-full pt-12 md:pt-24 lg:pt-28 px-10'>
                <div className='w-full text-center md:text-left md:w-[75%] lg:w-[55%] xl:w-[40%]'>
                    <PortableText value={post.body} components={components} />
                </div>
            </div>

            <div className='app__flex w-full px-12 pb-10'>
                <div className='app__flex flex-col max-w-[750px]'>
                    <div className='app__t-div pb-14'></div>
                    <p className="text-center p__text text-xl">Think people should hear about this?</p>
                    <SocialShare />
                </div>
            </div>

            {suggestedPost && suggestedPost.no !== post.no && (
                <div className='another app__flex w-full px-8 md:px-12 bg-[#f4f4f4] py-12'>
                    <div className='flex items-center md:items-start flex-col md:flex-row gap-10'>
                        <div className='flex relative'>
                            <Link 
                                to={`/post/${suggestedPost.no}`}
                                state={{ post: suggestedPost, allPosts: location.state?.allPosts }} 
                                className='w-[170px] h-[170px] relative group rounded-full overflow-hidden'
                            >
                                <div className='absolute w-[170px] h-[170px] rounded-full border-[10px] border-white opacity-80 z-10 transition-all duration-500 ease-in-out group-hover:scale-125'></div>
                                <img className='relative w-full h-full object-cover rounded-full' src={urlFor(suggestedPost.mainImage)} alt={suggestedPost.title} />
                                <div className='absolute inset-0 p__text flex items-center justify-center bg-black bg-opacity-60 text-white text-lg font-semibold opacity-0 scale-0 rounded-full transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100'>
                                    Read More
                                </div>
                            </Link>
                        </div>
                        <div className='flex flex-col w-full md:w-[350px] text-center md:text-left'>
                            <h2 className='uppercase p__text font-bold text-lg md:text-2xl lg:text-3xl mb-5'>YOU'LL PROBABLY BE INTERESTED IN...</h2>
							<Link 
                                to={`/post/${suggestedPost.no}`}
                                state={{ post: suggestedPost, allPosts: location.state?.allPosts }}
                            >
                               <h3 className='p__text text-lg md:text-xl lg:text-2xl mb-4 hover:text-[#e89611] ease-in duration-300'>{suggestedPost.title}</h3>
                            </Link>
                            <div className='p__text text-sm lg:text-lg'><TruncatedPortableText body={suggestedPost.body} components={components} /></div>
                            <Link 
                                to={`/post/${suggestedPost.no}`}
                                state={{ post: suggestedPost, allPosts: location.state?.allPosts }}
                            >
                                <button className="border-2 border-[#e89611] text-[#e89611] text-sm py-1 md:py-2 px-9 uppercase rounded-sm font-bold hover:bg-[#e89611] hover:text-white ease-in duration-300">READ THIS</button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}


export default PostDetails;
