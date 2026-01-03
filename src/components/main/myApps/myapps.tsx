// Imagenes
import AMOS from '../../../assets/AMOS_SYSTEM.webp';
import TucuLive from '../../../assets/tuculive.webp';
import Biblioteca from '../../../assets/biblioteca.webp';
import jobet from '../../../assets/jobet.webp';
import old_portfolio from '../../../assets/old_portfolio.webp';
import anigame from '../../../assets/anigame.webp';

import MyAppCard from './myapp_card/myappcard';
const MyApps = () => {
  return (
    <section className="flex flex-col items-center gap-8 mt-8 md:flex-row mb-8 md:flex-wrap md:justify-around">
      <MyAppCard
        img_link={TucuLive}
        alt_img="Imagen representativa sobre mi aplicación de celular, mi proyecto principal."
        title="TucuLive APP"
        description="Aplicación de resultados en vivos de equipos de fútbol y estadísticas. Este es mi proyecto principal, al cual le dediqué bastante desarrollo, pretendo seguir actualizándolo."
        link_app="https://play.google.com/store/apps/details?id=com.futapk_TucuLive&hl=es_AR"
      />
      <MyAppCard
        img_link={anigame}
        alt_img="Imagen sobre mi juego Anigame realizado con nextjs"
        title="Anigame"
        description="Pagina de juegos sobre anime, realizada con nextjs para el frontend, supabase para manejar los usuarios y los datos de los animes, deployada en vercel."
        link_app="https://animedle-nextjs.vercel.app/"
        link_repo="https://github.com/MatiasBobi/animedle_nextjs"
      />
      <MyAppCard
        img_link={AMOS}
        alt_img="Imagen representativa sobre el sistema AMOS"
        title="AMOS SYSTEM"
        description="Proyecto de universidad sobre la interfaz de un sistema sencillo para controlar información de los usuarios"
        link_repo="https://github.com/MatiasBobi/AMOS"
        link_app="https://amoscostumer.netlify.app/"
      />
      <MyAppCard
        img_link={jobet}
        alt_img="Proyecto final de numen (frontend)"
        title="Jober"
        description="Proyecto final de frontend de la Academia Numen que se realizó en grupo."
        link_repo="https://github.com/NCapdevila/proyectoReactNumen"
        link_app="https://proyecto-react-numen.vercel.app/"
      />
      <MyAppCard
        img_link={old_portfolio}
        alt_img="Imagen de mi viejo portfolio."
        title="Viejo portfolio"
        description="Mi viejo portfolio, lo agregó porque tiene funcionalidades, por ejemplo: mandar correo, soportar varios idiomas, un sistema de registro"
        link_repo="https://github.com/MatiasBobi/portfolio-app"
        link_app="https://matiasleonardobobi-portfolio.netlify.app/"
      />
      <MyAppCard
        img_link={Biblioteca}
        alt_img="Proyecto de práctica sobre una biblioteca para guardar libros."
        title="Biblioteca"
        description="Proyecto de práctica sobre una biblioteca para guardar libros."
        link_repo="https://github.com/MatiasBobi/Libreria-sencilla"
        link_app="https://matias-bobi-libreria.netlify.app/"
      />
    </section>
  );
};

export default MyApps;
