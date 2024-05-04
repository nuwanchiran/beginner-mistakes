import BottomLayer from './BottomLayer';

type Props = {
  title: string;
};

const MiddleLayer = (props: Props) => {
  return <BottomLayer title={props.title} />;
};

export default MiddleLayer;
