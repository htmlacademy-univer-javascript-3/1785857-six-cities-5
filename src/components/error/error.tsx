import { useAppSelector } from '../../hooks';
import { ReducerTypes } from '../../utils/constants';
import './error.css';

function Error(): JSX.Element | null {

  const error = useAppSelector((state) => state[ReducerTypes.ERROR_REDUCER].error);

  return (error)
    ? <div className='error'>{error}</div>
    : null;

}

export default Error;
