import MiddleLayer from './MiddleLayer';
import TitleProvider from './TitleProvider';

type Props = {};

const TopLayer = (props: Props) => {
  return (
    <TitleProvider>
      <MiddleLayer />
    </TitleProvider>
  );
};

export default TopLayer;