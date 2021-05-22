import Link from "next/link";
export default function MathTab(props) {
  return (
    <>
      <div className="text-3xl font-bold">{props.in}</div>
      <div className="flex flex-row border-b border-black items-center text-sm w-full my-5">
        <div className=" px-2 py-1 border-b-0 border-black border ml-2 ">
          Matematika
        </div>
        <Link href={props.to}>
          <a>
            <div className="px-2 py-1 hover:bg-gray-100 border border-bg-gray-100 border-b-0">
              Fisika
            </div>
          </a>
        </Link>
      </div>
    </>
  );
}
