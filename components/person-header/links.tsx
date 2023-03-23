import { useState } from 'react';
import HeaderLink from './link';
import Dialog from '../dialog/index';
import Contact from './contact';

const Index = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" flex justify-between items-center h-16">
      <HeaderLink to="/">关于</HeaderLink>
      <HeaderLink to="/">详细信息</HeaderLink>
      <HeaderLink to="/">实习经历</HeaderLink>
      <HeaderLink to="/">项目经历</HeaderLink>
      <HeaderLink to="/">技能</HeaderLink>
      <button
        className="w-20 flex justify-center font-thin"
        type="button"
        onClick={() => setVisible(true)}
      >
        留言
      </button>
      <div className="invisible">
        <Dialog visible={visible} onCancel={() => setVisible(false)}>
          <div className="w-120 h-120">
            <Contact onCancel={() => setVisible(false)} />
          </div>
        </Dialog>
      </div>
    </div>
  );
};
export default Index;
