import { useTitle } from './TitleProvider';

const BottomLayer = () => {
  const title = useTitle();
  return <div>{title}</div>;
};

export default BottomLayer;
