import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
} from 'react-icons/fa';
import {
  SiReactquery,
  SiTypescript,
  SiReactrouter,
  SiExpress,
  SiJsonwebtokens,
  SiSequelize,
  SiApollographql,
  SiMongodb,
  SiExpo,
} from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import { GrGraphQl, GrMysql } from 'react-icons/gr';
import { BiLogoPostgresql } from 'react-icons/bi';
import { TbBrandReactNative } from 'react-icons/tb';

const Knowledge = () => {
  return (
    <section>
      <div>
        <p className="text-5xl text-[#FDD500] ml-4 mt-4">{'['}</p>
      </div>
      <div>
        <div>
          <p className="text-5xl text-[#FDD500] ml-8 mt-4">{'{'}</p>
        </div>
        <div className="flex flex-col ml-16">
          <p className="text-3xl text-[#f5f5f5] ">type: 'frontend',</p>
          <div className="flex flex-row">
            <p className="text-3xl text-[#f5f5f5]">stack: </p>
            <div className="flex flex-col flex-wrap md:flex-row">
              <div className="flex flex-wrap flex-row mt-8 md:mt-1 md:ml-4">
                <FaHtml5 className="text-3xl mr-4" color="#c7812c" />{' '}
                <p className="text-2xl text-[#f5f5f5]">HTML</p>
              </div>
              <div className="flex flex-wrap flex-row mt-8 md:mt-1 md:ml-4">
                <FaCss3Alt className="text-3xl mr-4" color="#0c5fad" />{' '}
                <p className="text-2xl text-[#f5f5f5]">CSS3</p>
              </div>
              <div className="flex flex-wrap flex-row mt-8 md:mt-1 md:ml-4">
                <IoLogoJavascript className="text-3xl mr-4" color="#184eab" />{' '}
                <p className="text-2xl text-[#f5f5f5]">JavaScript</p>
              </div>
              <div className="flex flex-wrap flex-row mt-8 md:mt-1 md:ml-4">
                <FaReact className="text-3xl mr-4" color="#0c5fad" />{' '}
                <p className="text-2xl text-[#f5f5f5]">React</p>
              </div>
              <div className="flex flex-wrap flex-row mt-8 md:mt-1 md:ml-4">
                <SiReactquery className="text-3xl mr-4" color="#ba1111" />{' '}
                <p className="text-2xl text-[#f5f5f5]">Tanstack Query</p>
              </div>
              <div className="flex flex-wrap flex-row mt-8 md:mt-1 md:ml-4">
                <SiTypescript className="text-3xl mr-4" color="#0f63f5" />{' '}
                <p className="text-2xl text-[#f5f5f5]">TypeScript</p>
              </div>
              <div className="flex flex-wrap flex-row mt-8 md:mt-1 md:ml-4">
                <SiReactrouter className="text-3xl mr-4" color="#0f63f5" />{' '}
                <p className="text-2xl text-[#f5f5f5]">React Router</p>
              </div>
              <div className="flex flex-wrap flex-row mt-8 md:mt-1 md:ml-4">
                <p className="text-2xl text-[#f5f5f5]">Zustand</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-5xl text-[#FDD500] ml-8 mt-4">{'},'}</p>
        </div>
      </div>
      <div>
        <div>
          <p className="text-5xl text-[#FDD500] ml-8 mt-4">{'{'}</p>
        </div>
        <div className="flex flex-col ml-16">
          <p className="text-3xl text-[#f5f5f5]">type: 'backend',</p>
          <div className="flex flex-row">
            <p className="text-3xl text-[#f5f5f5]">stack: </p>
            <div className="flex flex-col flex-wrap md:flex-row">
              <div className="flex flex-wrap flex-row mt-8 md:mt-1 md:ml-4">
                <FaNodeJs className="text-3xl mr-4" color="#1c942e" />{' '}
                <p className="text-2xl text-[#f5f5f5]">NodeJS</p>
              </div>
              <div className="flex flex-wrap flex-row mt-8 md:mt-1 md:ml-4">
                <SiExpress className="text-3xl mr-4" color="#f5f5f5" />{' '}
                <p className="text-2xl text-[#f5f5f5]">Express</p>
              </div>
              <div className="flex flex-wrap flex-row mt-8 md:mt-1 md:ml-4">
                <SiJsonwebtokens className="text-3xl mr-4" color="#4e941c" />{' '}
                <p className="text-2xl text-[#f5f5f5]">JWT</p>
              </div>
              <div className="flex flex-wrap flex-row mt-8 md:mt-1 md:ml-4">
                <SiSequelize className="text-3xl mr-4" color="#0d4eb8" />{' '}
                <p className="text-2xl text-[#f5f5f5]">Sequelize</p>
              </div>
              <div className="flex flex-wrap flex-row mt-8 md:mt-1 md:ml-4">
                <GrGraphQl className="text-3xl mr-4" color="#d90bd9" />{' '}
                <p className="text-2xl text-[#f5f5f5]">GraphQL</p>
              </div>
              <div className="flex flex-wrap flex-row mt-8 md:mt-1 md:ml-4">
                <SiApollographql className="text-3xl mr-4" color="#F5f5f 5" />{' '}
                <p className="text-2xl text-[#f5f5f5]">Apollo server/client</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-5xl text-[#FDD500] ml-8 mt-4">{'},'}</p>
        </div>
      </div>
      <div>
        <div>
          <p className="text-5xl text-[#FDD500] ml-8 mt-4">{'{'}</p>
        </div>
        <div className="flex flex-col ml-16">
          <p className="text-3xl text-[#f5f5f5]">type: 'Base de datos',</p>
          <div className="flex flex-row">
            <p className="text-3xl text-[#f5f5f5]">stack: </p>
            <div className="flex flex-col flex-wrap md:flex-row">
              <div className="flex flex-wrap flex-row mt-8 md:mt-1 md:ml-4">
                <BiLogoPostgresql className="text-3xl mr-4" color="#0d30db" />{' '}
                <p className="text-2xl text-[#f5f5f5]">PostgreSQL</p>
              </div>
              <div className="flex flex-wrap flex-row mt-8 md:mt-1 md:ml-4">
                <GrMysql className="text-3xl mr-4" color="#daff05" />{' '}
                <p className="text-2xl text-[#f5f5f5]">MySQL</p>
              </div>
              <div className="flex flex-wrap flex-row mt-8 md:mt-1 md:ml-4">
                <SiMongodb className="text-3xl mr-4" color="#05ff37" />{' '}
                <p className="text-2xl text-[#f5f5f5]">MongoDB</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-5xl text-[#FDD500] ml-8 mt-4">{'},'}</p>
        </div>
      </div>
      <div>
        <div>
          <p className="text-5xl text-[#FDD500] ml-8 mt-4">{'{'}</p>
        </div>
        <div className="flex flex-col ml-16">
          <p className="text-3xl text-[#f5f5f5]">type: 'Moviles',</p>
          <div className="flex flex-row">
            <p className="text-3xl text-[#f5f5f5]">stack: </p>
            <div className="flex flex-col flex-wrap md:flex-row">
              <div className="flex flex-wrap flex-row mt-8 md:mt-1 md:ml-4">
                <TbBrandReactNative className="text-3xl mr-4" color="#0558ff" />{' '}
                <p className="text-2xl text-[#f5f5f5]">React Native</p>
              </div>
              <div className="flex flex-wrap flex-row mt-8 md:mt-1 md:ml-4">
                <SiExpo className="text-3xl mr-4" color="#f5f5f5" />{' '}
                <p className="text-2xl text-[#f5f5f5]"> Expo</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-5xl text-[#FDD500] ml-8 mt-4">{'},'}</p>
        </div>
      </div>
      <div>
        <div>
          <p className="text-5xl text-[#FDD500] ml-8 mt-4">{'{'}</p>
        </div>
        <div className="flex flex-col ml-16">
          <p className="text-3xl text-[#f5f5f5]">type: 'Otras',</p>
          <div className="flex flex-row">
            <p className="text-3xl text-[#f5f5f5]">stack: </p>
            <div className="flex flex-col flex-wrap md:flex-row">
              <div className="flex flex-wrap flex-row mt-8 md:mt-1 md:ml-4">
                <FaGitAlt className="text-3xl mr-4" color="#ff6505" />{' '}
                <p className="text-2xl text-[#f5f5f5]">Git</p>
              </div>
              <div className="flex flex-wrap flex-row mt-8 md:mt-1 md:ml-4">
                <FaDocker className="text-3xl mr-4" color="#053bff" />{' '}
                <p className="text-2xl text-[#f5f5f5]">Docker</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-5xl text-[#FDD500] ml-8 mt-4">{'}'}</p>
        </div>
      </div>
      <div>
        <p className="text-5xl text-[#FDD500] ml-4 mt-4">{']'}</p>
      </div>
    </section>
  );
};

export default Knowledge;
