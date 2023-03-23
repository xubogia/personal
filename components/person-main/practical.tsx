const thStyle = 'w-1/5  border border-neutral-400';
const tdStyle = 'px-2 border border-neutral-400 text-left';
const Index = () => (
  <div className=" flex flex-col justify-center items-center ">
    <div className="text-3xl font-bold text-blue-400 shadow-2xl rounded-lg px-3 py-1">实习经历</div>
    <div className=" border mt-10 w-3/4  shadow-2xl ">
      <table className="w-full h-60  ">
        <thead className="">
          <tr className="">
            <th className={thStyle}>公司名称</th>
            <th className={thStyle}>担任角色</th>
            <th className={thStyle}>时间</th>
            <th className="w-2/5  border border-neutral-400">主要工作</th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td className={tdStyle}>行1，列2</td>
            <td className={tdStyle}>行2，列2</td>
            <td className={tdStyle}>行3，列2</td>
            <td className={tdStyle}>行3，列2</td>
          </tr>
          <tr className="  ">
            <td className={tdStyle}>行1，列2</td>
            <td className={tdStyle}>行2，列2</td>
            <td className={tdStyle}>行3，列2</td>
            <td className={tdStyle}>行3，列2</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default Index;
