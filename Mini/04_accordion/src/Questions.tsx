import data from './data';
import SingleQuestion from './SingleQuestion';

const Questions = () => {
  const questions = data;

  return (
    <section className='container'>
      <h1>Questions</h1>
      {questions.map((question) => (
        <SingleQuestion {...question} key={question.id} />
      ))}
    </section>
  );
};

export default Questions;
