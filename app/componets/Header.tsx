const Header = () => {
  return (
    <header className="flex mt-[76px] mb-[116px] shrink-0 ml-[37px] ">
      <div className=" w-[40px] h-[40px] mr-[158px] border-solid border-2 flex items-center justify-center border-black rotate-[-45deg] rounded-[2px]  shrink-0">
        {" "}
        <h2 className="rotate-[45deg]  ">R</h2>
      </div>
      <h1 className="uppercase text-[300px] font-abc tracking-[24px] leading-[235px]">
        animation
      </h1>
      <div className="flex ml-[36px]  shrink-0">
        <h2 className="width">SIGN IN</h2>
        <div className=" flex ml-[20px] align-middle    pl-2 w-[99px] h-[29px] items-center ">
          <div>
            <input
              className="w-[92px] flex items-center border-2 border-black font-abc  text-center "
              id="searchphotos "
              name="serachphotos"
              list="searchphotos"
              placeholder="Select"
            />
            <datalist id="searchphotos">
              <option>PHOTO 1</option>
              <option>PHOTO 2</option>
              <option>PHOTO 3</option>
            </datalist>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
