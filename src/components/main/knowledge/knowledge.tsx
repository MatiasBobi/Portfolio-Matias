import { knowledgeData } from '../../../lib/knowledgeIcons';
import KnowledgeCard from './knowledge_card/knowledge_card';

const Knowledge = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid gap-8 md:grid-cols-2">
        {knowledgeData.map((item) => (
          <KnowledgeCard key={item.type} type={item.type} stack={item.stack} />
        ))}
      </div>
    </section>
  );
};

export default Knowledge;
