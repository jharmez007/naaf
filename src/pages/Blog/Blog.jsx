import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { IoIosSearch, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { urlFor, client } from '../../client';
import { TruncatedText } from '../../components';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const postsPerPage = 5;

    useEffect(() => {
        const fetchPosts = async () => {
            const query = '*[_type == "post"]';
            const data = await client.fetch(query);
            setPosts(data);
            setCurrentPage(0); // Load latest posts first
        };
        fetchPosts();
    }, []);

    const sortedPosts = useMemo(() => [...posts].sort((a, b) => b.no - a.no), [posts]);
    const filteredPosts = useMemo(() => 
        sortedPosts.filter(post => 
          post.title && post.title.toLowerCase().includes(searchTerm.toLowerCase())
        ), 
        [sortedPosts, searchTerm]
      );
      
    const paginatedPosts = useMemo(() => filteredPosts.slice(currentPage * postsPerPage, (currentPage + 1) * postsPerPage), [filteredPosts, currentPage]);


    return (
        <div className='relative flex flex-col'>
            <div className="flex flex-col items-center justify-center bg-[#e89611] py-6 md:py-16 px-6 gap-4">
                <h3 className="font-bold text-6xl md:text-7xl text-white">Blog</h3>
                <p className="font-bold text-2xl md:text-3xl text-white">Updates and inspiration</p>
            </div>

            <div className='app__flex py-1 w-full bg-[#f4f4f4] border-y items-center'>
                <input 
                    className="border text-black text-sm py-1 md:py-2 px-2 rounded-l-sm font-bold outline-none focus:border-[#e89611] transition-all duration-300" 
                    type="search" 
                    name="search" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search posts..."
                />
                <button className='bg-[#e89611] hover:bg-[#964a18] rounded-r-sm text-sm py-2 px-2 md:py-3 md:px-3 ease-in duration-300'>
                    <IoIosSearch className="fill-white" />
                </button>
            </div>

            <div className='w-full app__flex flex-col'>
                {paginatedPosts.map((post, index) => (
                    <div key={post.no} className={`w-full flex flex-col md:flex-row gap-10 justify-center items-center md:items-start py-10 px-2 ${index % 2 === 0 ? 'bg-white' : 'bg-[#f4f4f4]'}`}>
                        <div className='flex flex-col items-center relative'>
                            <Link to={`/post/${post.no}`} state={{ post, allPosts: sortedPosts }} className='relative mb-4 group rounded-full overflow-hidden w-[170px] h-[170px]'>
                                <div className='absolute w-[170px] h-[170px] rounded-full border-[10px] border-white opacity-80 z-10 transition-all duration-500 ease-in-out group-hover:scale-125'></div>
                                <div className='absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-lg font-semibold opacity-0 scale-0 rounded-full transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100'>
                                    Read More
                                </div>
                                <img className='w-full h-full object-cover rounded-full' src={urlFor(post.mainImage)} alt={post.title} />
                            </Link>
                            <div className='text-xs font-bold capitalize'>{post.date}</div>
                            <div className='text-xs font-bold'>{`by ${post.author}`}</div>
                        </div>
                        <div className='flex flex-col w-full md:w-[550px] text-center md:text-left gap-6'>
                            <Link to={`/post/${post.no}`} state={{ post, allPosts: sortedPosts }}>
                                <h2 className='uppercase font-bold text-lg md:text-2xl lg:text-3xl'>{post.title}</h2>
                            </Link>
                            <TruncatedText body={post.body} />
                            <Link to={`/post/${post.no}`} state={{ post, allPosts: sortedPosts }}>
                                <button className="border-2 border-[#e89611] text-[#e89611] text-sm py-1 md:py-2 px-9 uppercase rounded-sm font-bold hover:bg-[#e89611] hover:text-white ease-in duration-300">READ MORE</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className='app__flex gap-2 rounded-sm py-1 w-full bg-[#f4f4f4] text-white font-bold border-y'>
                {currentPage < Math.ceil(filteredPosts.length / postsPerPage) - 1 && (
                    <button 
                        className='flex items-center gap-4 bg-[#e89611] hover:bg-[#034b38] text-xs py-2 px-4 ease-in duration-300' 
                        onClick={() => setCurrentPage(currentPage + 1)}
                    >
                        <IoIosArrowBack className="fill-white w-[20px] h-[20px]" />
                        <span>OLDER POSTS</span>
                    </button>
                )}
                {currentPage > 0 && (
                    <button 
                        className='flex items-center gap-4 bg-[#e89611] hover:bg-[#034b38] text-xs py-2 px-4 ease-in duration-300' 
                        onClick={() => setCurrentPage(currentPage - 1)}
                    >
                        <span>NEWER POSTS</span>
                        <IoIosArrowForward className="fill-white w-[20px] h-[20px]" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default Blog;
