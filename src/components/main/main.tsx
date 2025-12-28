// Imagenes

import unt from '../../assets/unt.webp';
import numen from '../../assets/numen.webp';
import styles from './main.module.css';
import AboutMe from './aboutme/aboutme.tsx';
import EducationCard from './education_card/education_card.tsx';
import Knowledge from './knowledge/knowledge.tsx';
import MyApps from './myApps/myapps.tsx';

const Main = () => {
  return (
    <main className={styles.main} id="main">
      <AboutMe />
      <div>
        <article className="flex items-center flex-col">
          <div className="flex items-center flex-col">
            <h2 className="text-4xl text-[#F5F5F5] font-bold text-center mb-4">
              Mis estudios
            </h2>
            <hr className="h-1 border-0 bg-[#F5F5F5] w-[100%]" />
          </div>
        </article>
      </div>
      <section className="md:flex md:items-center">
        <EducationCard
          imagesrc={unt}
          imagealt="Universidad Nacional de tucumán logo"
          title="Universidad Nacional de Tucumán"
          description="2.º año de la carrera de Programador Universitario, orientado
                  a crear y entender algoritmos, base de datos y sistemas."
        />
        <EducationCard
          imagealt="Academia numen logo"
          imagesrc={numen}
          title="Academia Numen"
          description="Orientado a todo lo relacionado con fullstack, trabajando con react en el lado del frontend y, por el lado del backend nodejs utilizando Express."
        />
      </section>
      <div>
        <article className="flex items-center flex-col">
          <div className="flex items-center flex-col">
            <h2 className="text-4xl text-[#F5F5F5] font-bold text-center mt-8 mb-4">
              Conocimientos
            </h2>
            <hr className="h-1 border-0 bg-[#F5F5F5] w-[100%]" />
          </div>
        </article>
      </div>
      <Knowledge />
      <div>
        <article className="flex items-center flex-col">
          <div className="flex items-center flex-col">
            <h2 className="text-4xl text-[#F5F5F5] font-bold text-center mt-8 mb-4">
              Mis proyectos
            </h2>
            <hr className="h-1 border-0 bg-[#F5F5F5] w-[100%]" />
          </div>
        </article>
      </div>
      <MyApps />
    </main>
  );
};
export default Main;
