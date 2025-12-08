import { useState } from 'react';
import data from './data';
import SingleQuestionRadio from './SingleQuestionRadio';

const QuestionsRadio = () => {
  const questions = data;
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <section className='container'>
      <h1>Questions (Radio)</h1>
      {questions.map((question) => (
        <SingleQuestionRadio
          {...question}
          key={question.id}
          activeId={activeId}
          toggleQuestion={toggleQuestion}
        />
      ))}
    </section>
  );
};

export default QuestionsRadio;
