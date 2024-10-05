export default function Home() {
  return (
    <>
      <div className="homeContainer">
        <div className="childContainer">
       
          <img src="https://i.pinimg.com/736x/56/75/3c/56753c68b4fca28cd68922eed96ad5c4.jpg"
          alt="profile picture"
          width="90"
          height="60"
          loading="lazy"
          className= " rounded-full ml-60 align=left"
          />
          < div className="homeContainner"></div>
          <div className="w-fit h-[0px] m-[-80px] text-[90px] font-blue"></div>
          hey,
          <br />
          My name is <span className="text-pink-500">Muqaddas</span>
          <br /> I am Next js Developer
        </div>
        <div className=""></div>
        <div className="childContainer"></div>
      </div>
       <div className="w-fit h-[90px] m-[30px] text-[20px] font-black">s
          Hey,
          <br />
          My Name is <span className="text-pink-500">shizza</span>
          <br />I am Next JS Developer
        </div>
        <div className=""></div>
    </>
  );
}