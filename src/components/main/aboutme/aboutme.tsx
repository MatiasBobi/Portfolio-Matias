import aboutme_img from '../../../assets/aboutme.webp';

const AboutMe = () => {
  return (
    <section className="px-8 py-16 md:flex md:items-center">
      <article className="md:mt-8 md:w-1/2  md:h-1/2 md:flex md:items-center md:justify-center hidden">
        <img src={aboutme_img} className="w-[80%] " />
      </article>
      <article className="md:w-1/2">
        <h2 className="text-center text-4xl text-[#F5F5F5] font-bold">
          Sobre mi
        </h2>
        <p className="text-2xl text-[#FFD700] mt-4 mb-4 text-center md:text-left">
          Tengo 25 años, Ingresé al mundo de la programación a los 16 años
          haciendo mis primeras páginas con PHP y decidí expandirme a más
          lenguajes, incluidos Arduino con microcontroladores.
        </p>
        <p className=" text-2xl text-[#FFD700] text-center md:text-left">
          Actualmente vivo en Argentina, Tucumán.
        </p>
      </article>
      <article className="md:hidden mt-8 ">
        <img src={aboutme_img} />
      </article>
    </section>
  );
};

export default AboutMe;
