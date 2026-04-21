function Card({ id, name, price, image, description }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <strong>R$ {price}</strong>
      <p>{description}</p>
    </div>
  );
}

export default Card;