import { useState } from 'react';
import SingleQuestionRadio from './SingleQuestionRadio';
import questions from './data';

const QuestionsRadio = () => {
  const [activeId, setActiveId] = useState<null | number>(null);

  const toggleQuestion = (id: number) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };
  return (
    <section className='container'>
      <h1>question (Radio)</h1>
      {questions.map((question) => {
        return (
          <SingleQuestionRadio
            {...question}
            key={question.id}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        );
      })}
    </section>
  );
};

export default QuestionsRadio;
