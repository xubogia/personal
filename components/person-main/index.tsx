import Photo from './photo';
import Message from './message';
import Education from './education';
import Practical from './practical';
import Service from './project';
import Skill from './skill';

const Index = () => (
  <div className="flex flex-col  pb-10 space-y-20">
    <Photo name="photo" />
    <Message />
    <Education />
    <Practical />
    <Skill />
    <Service />
  </div>
);

export default Index;
