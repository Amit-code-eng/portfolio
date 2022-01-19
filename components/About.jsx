import React from 'react'

function About() {
	return (
		<div style={{flex:'0.5'}} className="py-10 about-container flex jusitfy-center flex-col">
		  <h1 className="text-gray-800 text-center">ABOUT</h1>
			<img src="rahul.jpg" className="w-60 h-60 mx-auto profile"/>
			  <h3 className="text-center mt-2 font-semibold text-gray-800">Who's this guy?</h3>
			  <div className="w-80 mx-auto">
			      <p className="text-sm text-center mt-2 text-zinc-800">
			        Hello I'm Rahul , Software Engineer at mushinlabs
			        and feeling good while tackle chanllenges.
			      </p>
			      <p className=" text-sm text-center mt-2 text-zinc-800">
			        Hello I'm Rahul , Software Engineer at mushinlabs
			        and feeling good while tackle chanllenges.
			      </p>
			  </div>
			  <div className="flex justify-center mt-3">
			  	<button className="text-sm p-1 text-white hover:bg-white hover:text-custom-red transition duration-500 border border-custom-red p-1 bg-custom-red">DOWNLOAD CV</button>
			  </div>
		</div>
	)
}

export default About