const Index = () => (
  <div className="my-10 flex flex-col justify-center items-center  space-y-10">
    <div className="text-3xl font-bold  text-blue-400 shadow-2xl rounded-lg px-3 py-1">
      项目经验
    </div>

    <table className="mt-10 w-4/5 h-40 ">
      <tbody className="">
        <tr className="space-x-5 border">
          <td className="w-1/6 bg-green-100 h-full   flex-col text-center  items-center">
            <h1>项目名称</h1>
            <p>时间</p>
          </td>
          <td className="w-1/3 bg-yellow-100 h-full  flex-col text-center items-center">
            <p>技术栈</p>
          </td>
          <td className="w-1/2 bg-blue-200 h-full  flex-col text-center  items-center">
            <h1>描述</h1>
          </td>
        </tr>
      </tbody>
    </table>

    <table className=" w-4/5 h-40">
      <tbody className="">
        <tr className="">
          <td className="w-1/6 bg-green-100 h-full   flex-col text-center  items-center">
            <h1>项目名称</h1>
            <p>时间</p>
          </td>
          <td className="w-1/3 bg-yellow-100 h-full  flex-col text-center items-center">
            <p>技术栈</p>
          </td>
          <td className="w-1/2 bg-blue-200 h-full  flex-col text-center  items-center">
            <h1>描述</h1>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Index;
