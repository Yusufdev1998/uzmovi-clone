import { FC, useEffect, useRef } from "react";

interface IProps {
  open: boolean;
}

const MobileMenu: FC<IProps> = ({ open }) => {
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open) {
      divRef.current!.style.maxHeight = divRef.current!.scrollHeight + "px";
    } else {
      divRef.current!.style.maxHeight = "0px";
    }
  }, [open]);

  return (
    <div
      ref={divRef}
      className="my-container  transition-all duration-500   max-h-0"
    >
      <ul className="flex flex-col gap-1  pt-4 pb-10">
        <div className="h-[1px] bg-[#304256] mb-4"></div>
        <li>
          <a
            className="py-[10px] px-[15px] w-full block rounded text-xs border-b border-[rgba(255,105,7,0.8)] text-main-text uppercase bg-[rgb(33,49,68)]"
            href="/"
            title="Bosh sahifa"
          >
            Bosh sahifa
          </a>
        </li>
        <li>
          <a
            className="py-[10px] px-[15px] w-full block rounded text-xs border-b border-[rgba(255,105,7,0.8)] text-main-text uppercase bg-[rgb(33,49,68)]"
            href="/"
            title="Bosh sahifa"
          >
            Bosh sahifa
          </a>
        </li>
        <li>
          <a
            className="py-[10px] px-[15px] w-full block rounded text-xs border-b border-[rgba(255,105,7,0.8)] text-main-text uppercase bg-[rgb(33,49,68)]"
            href="/"
            title="Bosh sahifa"
          >
            Bosh sahifa
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
