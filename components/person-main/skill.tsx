import { createElement } from 'react';
import JsIcon from '../../assets/svg/jsIcon.svg';
import TailWindIcon from '../../assets/svg/tailwindcss.svg';
import CypressIcon from '../../assets/svg/cypress.svg';
import ReactIcon from '../../assets/svg/react.svg';
import NodeJsIcon from '../../assets/svg/nodejs.svg';
import NextIcon from '../../assets/svg/next.svg';

const Index = () => (
  <div className="flex flex-col justify-center items-center  ">
    <div className="text-3xl font-bold text-blue-400 shadow-2xl rounded-lg px-3 py-1">技术栈</div>

    <table className="w-3/4 h-60  mt-10  table-fixed">
      <tbody>
        <tr className="flex">
          <td className="flex-1 flex justify-center items-center  ">
            {createElement(JsIcon, { className: ' w-20 h-20' })}
          </td>
          <td className="flex-1 flex justify-center ">
            {createElement(TailWindIcon, { className: ' w-40 h-20' })}
          </td>
          <td className="flex-1 flex justify-center  ">
            {createElement(CypressIcon, { className: ' w-20 h-20' })}
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr className="flex">
          <td className="flex-1 flex justify-center ">
            {createElement(ReactIcon, { className: 'text-blue-900 w-12 h-12' })}
          </td>
          <td className="flex-1 flex ">
            {createElement(NodeJsIcon, {
              className: 'w-30 h-20 text-black  m-auto  ',
            })}
          </td>
          <td className="flex-1 flex justify-center ">
            {createElement(NextIcon, { className: ' w-20 h-20' })}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
export default Index;
