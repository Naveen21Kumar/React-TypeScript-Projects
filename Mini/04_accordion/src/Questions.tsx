import SingleQuestion from './SingleQuestion';
import questions from './data';

const Questions = () => {
  return (
    <section className='container'>
      <h1>questions</h1>
      {questions.map((question) => {
        return <SingleQuestion {...question} key={question.id} />;
      })}
    </section>
  );
};

export default Questions;
