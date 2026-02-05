const MyAppCard = ({
  img_link,
  alt_img,
  title,
  description,
  link_repo,
  link_app,
}: {
  img_link?: string;
  alt_img?: string;
  title: string;
  description: string;
  link_repo?: string;
  link_app?: string;
}) => {
  return (
    <article className="group relative flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border    border-gray-700/50 rounded-3xl overflow-hidden w-[90%] md:w-[45%] lg:w-[30%] h-[520px] md:h-[480px] transition-all duration-500    hover:border-yellow-400/60 hover:shadow-[0_8px_40px_rgba(253,213,0,0.25)] hover:-translate-y-2">
      <div className="relative h-[280px] bg-gradient-to-b from-black/80 to-gray-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
        <img
          src={img_link}
          alt={alt_img}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col flex-1 p-8 justify-between">
        <div>
          <h3 className="text-2xl font-bold text-[#FDD500] tracking-wide">
            {title}
          </h3>

          <p className="text-gray-300 text-base leading-relaxed mt-3 py-4">
            {description}
          </p>
        </div>

        <div className="flex gap-3 pt-2 border-t border-gray-700/30">
          {link_app && (
            <a
              href={link_app}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-[#FDD500] text-black font-bold px-4 py-2 rounded-lg transition hover:bg-yellow-400"
            >
              Probar App
            </a>
          )}

          {link_repo && (
            <a
              href={link_repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-gray-700/50 text-white font-bold px-4 py-2 rounded-lg transition hover:bg-yellow-400 hover:text-black"
            >
              Repositorio
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default MyAppCard;
