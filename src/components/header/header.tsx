import my_photo from '../../assets/my_photo.jpg';
import styles from './header.module.css';
import { IoIosArrowDown } from 'react-icons/io';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = () => {
  return (
    <header
      className={`${styles.header} flex w-full justify-center items-center min-h-screen relative`}
    >
      <section className="flex flex-col sm:flex-row items-center justify-evenly h-full w-full ">
        <div className="">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#FFD700] text-center">
            Soy Matias Bobi
          </h1>
          <div className="flex flex-col items-center">
            <p className="text-base sm:text-lg md:text-2xl text-[#F5F5F5] mt-4 mb-4 text-center">
              Desarrollador de aplicaciones web y móviles
            </p>
            <div className="flex gap-4">
              <FaLinkedin color="#F5F5F5" className="text-4xl" />
              <FaGithub color="#F5F5F5" className="text-4xl" />
            </div>
          </div>
        </div>
        <div className="shadow-2xl flex items-center">
          <span className="text-7xl text-[#FFD700] ">{'{'}</span>
          <div className="rounded-full sm:rounded-b-full sm:rounded-r-full overflow-hidden mx-4 max-w-xs sm:max-w-sm w-full aspect-square">
            <img
              className="brightness-75 w-full h-full object-cover"
              src={my_photo}
              alt="Foto de Matias Bobi"
            />
          </div>

          <span className="text-7xl text-[#FFD700]">{'}'}</span>
        </div>
        <div
          className={`${styles.scaleupcenter} absolute bottom-0 left-1/2 transform -translate-x-1/2 text-4xl cursor-pointer`}
        >
          <IoIosArrowDown color="#FFD700" />
        </div>
      </section>
    </header>
  );
};

export default Header;
