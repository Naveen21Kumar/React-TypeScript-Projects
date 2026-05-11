import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
interface QuestionsProps {
  id: number;
  title: string;
  info: string;
  activeId: number | null;
  toggleQuestion: (id: number) => void;
}

const SingleQuestionRadio = ({
  id,
  title,
  info,
  activeId,
  toggleQuestion,
}: QuestionsProps) => {
  const isActive = activeId === id;
  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button className='question-btn' onClick={() => toggleQuestion(id)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestionRadio;
