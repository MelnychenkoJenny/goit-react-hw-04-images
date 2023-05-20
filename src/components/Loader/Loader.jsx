import { Blocks } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Blocks
      height={100}
      width={100}
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="blocks-loading"
    />
  );
};
