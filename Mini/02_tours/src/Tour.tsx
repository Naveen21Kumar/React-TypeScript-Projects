const Tour = ({ id, name, info, image, price, removeTour }) => {
  return (
    <article className='single-tour'>
      <img
        src={image}
        alt={name}
        style={{ maxWidth: '400px' }}
        className='img'
      />
      <span>{price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>
          {info}
          <button className='info-btn'>read more</button>
        </p>
        <button
          className='btn delete-btn btn-block'
          onClick={() => removeTour(id)}>
          not interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
