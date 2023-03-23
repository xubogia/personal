import Image from 'next/image';
import WK from '../../assets/img/wk.jpg';

const Index = () => {
  const text =
    '   Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
    'when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
  return (
    <div>
      <div className=" flex flex-col items-center">
        <div className=" my-10 border-8 rounded-full ">
          <Image width={250} height={250} src={WK} className="rounded-full" />
        </div>

        <div className="text-3xl text-gray-900 font-bold  ">WU KONG</div>
        <p className="w-96  text-center text-1xl text-gray-400 font-medium">{text}</p>
      </div>
    </div>
  );
};

export default Index;
