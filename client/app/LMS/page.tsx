import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <div className="relative w-full h-screen pt-56  bg-black z-10">
      <div className="absolute z-[-2] bottom-0  left-0 right-0 top-0 bg-[linear-gradient(to_right,#8f8d8d2c_1px,transparent_1px),linear-gradient(to_bottom,#8f8d8d2c_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="w-64 h-40 mx-auto -mt-40 mb-20">
        <Image
          src="/hackathon-logo.png"
          alt="Hackathon logo"
          layout="responsive"
          width={200}
          height={200}
        />
      </div>

      <div className="flex flex-col items-center justify-center  md:flex-row md:space-x-6">
        <div className="pb-4 pt-6 md:space-y-5 ">
          <h1 className="py-4 text-6xl text-center sm:text-right font-heading tracking-tighter linear-wipe md:border-r-2 md:px-6 md:text-8xl max-w-lg">
            COMING SOON
          </h1>
        </div>
        <div className="max-w-md text-center md:text-left">
          <p className="mb-4 text-xl text-slate-200 font-bold leading-normal md:text-2xl tracking-widest">
            {`Page Under Construction.`}
          </p>
          <Link href="/">
            <button className="relative inline-flex mt-4 h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
              <span className="absolute inset-0 animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F42B03_0%,#FFBE0B_50%,#F42B03_100%)] z-0" />
              <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl z-10">
                Back to Home
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page