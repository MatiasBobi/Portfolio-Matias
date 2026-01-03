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
    <article className="flex flex-col bg-[#131212] border border-gray-700 rounded-2xl overflow-hidden w-[90%] md:w-[40%] md:min-h-[520px] transition-all duration-300 hover:scale-[1.02] hover:border-yellow-400 hover:shadow-[0_0_25px_rgba(253,213,0,0.15)]">
      <div className="aspect-video bg-black flex items-center justify-center">
        <img
          src={img_link}
          alt={alt_img}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col flex-1 p-4 justify-between">
        <div>
          <h3 className="text-2xl font-bold text-[#FDD500] tracking-wide">
            {title}
          </h3>

          <p className="text-gray-300 text-base leading-relaxed mt-3 py-2">
            {description}
          </p>
        </div>

        <div className="flex gap-2">
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
              className="flex-1 text-center bg-gray-800 text-white font-bold px-4 py-2 rounded-lg transition hover:bg-yellow-400"
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
