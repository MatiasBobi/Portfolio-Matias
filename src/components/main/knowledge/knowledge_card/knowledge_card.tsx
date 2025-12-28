import type React from 'react';

interface KnowledgeCardProps {
  type: string;
  stack: { name: string; icon?: React.ElementType; color?: string }[];
}
// Card para personalizar cada item que se mostrara dependiendo de la tecnologia uqe usemos.

// Debemos pasar el tipo de tecnologia sea frontend, backend, etc...
// Debemos pasar cada uno de sus items con el titulo y el icono correspondiente, Icono y color es opcional pero para dar estilo.
const KnowledgeCard = ({ type, stack }: KnowledgeCardProps) => {
  return (
    <div className="bg-[#131212] border border-gray-700 rounded-3xl p-6 hover:border-yellow-400 transition">
      <h3 className="text-2xl font-bold text-[#FDD500] mb-4">{type}</h3>

      <div className="flex flex-wrap gap-4 justify-center items-center">
        {stack.map((technology) => {
          const IconName = technology.icon;
          // Colort por default
          const iconColor = technology.color || '#f5f5f5';
          return (
            <div
              key={technology.name}
              className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-xl"
            >
              {IconName && (
                <IconName className="text-2xl" style={{ color: iconColor }} />
              )}
              <span className="text-white text-lg">{technology.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KnowledgeCard;
