import Link from 'next/link';

const Index = (props) => (
  <Link href={props.to}>
    <div className="w-20 flex justify-center font-thin ">{props.children}</div>
  </Link>
);
export default Index;
