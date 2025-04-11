import React from 'react';


const Excos = ({ name, role, text, number, email, emailLink, facebook, facebookLink, twitter, twitterLink, linkedin, linkedinLink, imgUrl, className }) => {
  return (
    <div className={`w-full max-w-[1200px] sm:h-auto h-full ${className}`}>
			<div className="app__flex md:w-1/2 px-4 py-16 lg:px-12 sm:px-10 border bg-slate-100">
				<div className="app__flex flex-col gap-6 text-center max-w-[450px]">
					<div>
						<h2 className="font-bold p__text text-4xl text-[#e89611]">{name}</h2>
						<h3 className="p__text font-bold text-lg">{role}</h3>
					</div>
					<p className="p__text">{text}</p>
					<div className="app__flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4">
						<div>{number}</div>
						<div className="hidden sm:flex md:hidden lg:flex flex-row gap-1">
							<div className="app__h-div" />
							<div className="app__h-div" />
						</div>
						<div className="app__w-div flex sm:hidden md:flex lg:hidden"></div>
						<a href={emailLink}><div className="cursor-pointer">{email}</div></a>
					</div>
					<div className="flex justify-center items-center flex-row flex-wrap gap-4">
						<a href={facebookLink} target="_blank" rel="noreferrer">
							<div>{React.cloneElement(facebook, { className: "fill-black hover:fill-[#ff6501] w-[20px] h-[20px] ease-in duration-300 cursor-pointer" })}</div>
						</a>
						<a href={twitterLink} target="_blank" rel="noreferrer">
							<div>{React.cloneElement(twitter, { className: "fill-black hover:fill-[#ff6501] w-[20px] h-[20px] ease-in duration-300 cursor-pointer" })}</div>
						</a>
						<a href={linkedinLink} target="_blank" rel="noreferrer">
							<div>{React.cloneElement(linkedin, { className: "fill-black hover:fill-[#ff6501] w-[20px] h-[20px] ease-in duration-300 cursor-pointer" })}</div>
						</a>
					</div>
				</div>
			</div>
			<div className="md:w-1/2 max-h-[550px] md:max-h-full lg:max-h-[550px] border">
				<img className="w-full h-full object-cover object-top" src={imgUrl} alt="img" loading="lazy"/>
			</div>
    </div>
  )
}

export default Excos
