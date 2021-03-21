import loader from '../../assets/images/loader.svg';
import './style.scss';

const Preloader = () => {
  return (
    <div className={'loader-wrapper'}>
      <img className={'loader'} src={loader} alt={'loader'} />
    </div>
  );
};

export default Preloader;
