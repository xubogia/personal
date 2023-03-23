import Field from '../../lib/form/field';
import Input from '../../lib/form/input';
import Textarea from '../../lib/form/textarea';
import Button from '../../lib/form/button';

const Index = ({ onCancel }) => (
  <div className="flex flex-col items-center  h-full bg-white-50">
    <div className="w-full h-10  ">
      <button
        className=" float-right mx-5 my-2 text-xl  text-blue-400 font-bold"
        type="button"
        onClick={onCancel}
      >
        ESC
      </button>
    </div>
    <form className=" w-96 h-80  flex flex-col item-center space-y-5">
      <Field label="Name">
        <Input type="text" maxLength={64} className="w-2/3" placeholder="Enter your full name" />
      </Field>

      <Field label="Email">
        <Input type="text" maxLength={64} className="w-2/3" placeholder="Enter your email" />
      </Field>
      <Field label="Phone">
        <Input type="text" maxLength={64} className="w-2/3" placeholder="Enter your phone number" />
      </Field>

      <Field label="Message">
        <Textarea maxLength={256} style={{ height: 85 }} className="w-full resize-none" />
      </Field>
      <div className="flex justify-center rounded mt-6 bg-blue-400">
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </div>
    </form>
  </div>
);
export default Index;
