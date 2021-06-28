import Link from 'next/link'
import { Folder, RightArrow } from '@/Icons'
const ChapterBox = ({ to, title }) => {
  return (
    <>
      <Link href={to}>
        <a className="flex items-center justify-between w-full px-2 py-2.5 sm:px-1.5 sm:py-1.5 sm:hover:bg-gray-200 sm:hover:rounded-md ">
          <div className="flex items-center space-x-2 sm:justify-between sm:space-x-1">
            <Folder color=" " />
            <p className="text-gray-700 truncate">{title}</p>
          </div>
          <div className="sm:hidden">
            <RightArrow color=" " />
          </div>
        </a>
      </Link>
    </>
  )
}

export default ChapterBox
