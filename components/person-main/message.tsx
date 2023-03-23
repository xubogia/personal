const detail = {
  position: '深圳',
  education: '深圳大学本科生',
  major: '计算机科学与技术',
  phone: '13318199637',
  email: '1749126595@qq.com',
  birthDate: '2001-12-15',
};

const tdStyle =
  'px-2 h-1/3  text-left font-thin text-gray-700 flex items-center border border-neutral-400';
const thStyle =
  'px-2 h-1/3  text-left font-normal text-gray-700 flex items-center border border-neutral-400';
const Index = () => (
  <div className=" flex flex-col justify-center items-center ">
    <div className="text-3xl font-bold text-blue-400 shadow-2xl rounded-lg px-3 py-1">个人信息</div>

    <div className="w-2/3 h-40 mt-10 rounded-md overflow-hidden ">
      <table className="flex flex-row  h-full table-fixed border  grid grid-cols-4 ">
        <thead className="">
          <tr className=" flex flex-col h-full ">
            <th className=" px-2 h-1/3  text-left font-normal text-gray-700 flex items-center border border-neutral-400  rounded-tl">
              位置
            </th>
            <th className={thStyle}>学历</th>
            <th className="px-2 h-1/3  text-left font-normal text-gray-700 flex items-center border border-neutral-400  rounded-bl">
              电话
            </th>
          </tr>
        </thead>

        <tbody className=" h-full">
          <tr className=" flex flex-col h-full">
            <td className={tdStyle}>{detail.position}</td>
            <td className={tdStyle}>{detail.education}</td>
            <td className={tdStyle}>{detail.phone}</td>
          </tr>
        </tbody>

        <thead className=" h-full">
          <tr className=" flex flex-col h-full">
            <th className={thStyle}>出生日期</th>
            <th className={thStyle}>专业</th>
            <th className={thStyle}>邮箱</th>
          </tr>
        </thead>

        <tbody className=" h-full">
          <tr className=" flex flex-col h-full">
            <td className=" px-2 h-1/3  text-left font-thin text-gray-700 flex items-center border border-neutral-400  rounded-tr">
              {detail.birthDate}
            </td>
            <td className={tdStyle}>{detail.major}</td>
            <td className=" px-2 h-1/3  text-left font-thin text-gray-700 flex items-center border border-neutral-400  rounded-br">
              {detail.email}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default Index;
