import Image from 'next/image';

const AuthorCard = () => {
  return (
    <div
      className="w-full p-4 rounded-xl flex flex-col"
      style={{
        background:
          'linear-gradient(-25deg,#425aef,rgba(66, 90, 239, 0.86),#425aef,rgba(66, 90, 239, 0.86))',
      }}
    >
      <div className="bg-[rgba(255,255,255,0.2)] rounded-full px-2 py-1 text-white self-center text-xs">
        吃饱了才有力气干活
      </div>
      <div className="h-52 flex items-center justify-center">
        <Image
          className="rounded-full border-4 border-white"
          src="/avatar.jpg"
          width={118}
          height={118}
          alt="作者头像"
        />
      </div>
      <div>
        <div className="text-white">一条放了盐的鱼</div>
      </div>
    </div>
  );
};

export default AuthorCard;
