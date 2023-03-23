const detail = {
  school: '深圳大学',
  academicQualification: '本科',
  academicQualificationType: '统招全日制',
  major: '计算机科学与技术',
  Date: '2020-09-01--2024-07-01',
  politicalLandscape: '共青团员',
};

const tdStyle =
  'px-2 h-1/3  text-left font-thin text-gray-700 flex items-center border border-neutral-400';
const thStyle =
  'px-2 h-1/3  text-left font-normal text-gray-700 flex items-center border border-neutral-400';
const Index = () => (
  <div className=" flex flex-col justify-center items-center ">
    <div className="text-3xl font-bold text-blue-400 shadow-2xl rounded-lg px-3 py-1">教育经历</div>

    <div className="w-3/4 h-40 mt-10 rounded-md overflow-hidden  ">
      <table className="flex flex-row  w-full  h-full table-fixed border  grid grid-cols-4 ">
        <thead>
          <tr className=" flex  float  overflow-hidden flex-col h-full ">
            <th className=" px-2 h-1/3  text-left font-normal text-gray-700 flex items-center border border-neutral-400  rounded-tl ">
              学校
            </th>
            <th className={thStyle}>学历</th>
            <th className="px-2 h-1/3  text-left font-normal text-gray-700 flex items-center border border-neutral-400  rounded-bl ">
              专业
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className=" flex  flex-grow  flex-col h-full">
            <td className={tdStyle}>{detail.school}</td>
            <td className={tdStyle}>{detail.academicQualification}</td>
            <td className={tdStyle}>{detail.major}</td>
          </tr>
        </tbody>

        <thead>
          <tr className=" flex flex-col h-full">
            <th className={thStyle}>起止时间</th>
            <th className={thStyle}>学历类型</th>
            <th className={thStyle}>政治面貌</th>
          </tr>
        </thead>

        <tbody className="min-w-1/4 h-full">
          <tr className=" flex flex-col h-full">
            <td className=" px-2 h-1/3  text-left font-thin text-gray-700 flex items-center border border-neutral-400  rounded-tr">
              {detail.Date}
            </td>
            <td className={tdStyle}>{detail.academicQualificationType}</td>
            <td className=" px-2 h-1/3  text-left font-thin text-gray-700 flex items-center border border-neutral-400  rounded-br">
              {detail.politicalLandscape}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default Index;
