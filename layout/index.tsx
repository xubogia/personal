const Index = ({ header, main }) => (
  <div className="bg-green-50 z-0 flex items-center justify-center ">
    <div className=" z-10 w-1/2 ">
      <div className="fixed w-1/2 h-16 border border-slate-500 shadow">{header}</div>

      <div className="mt-16 border border-slate-500  h-full  bg-red-50">{main}</div>
    </div>
  </div>
);

export default Index;
