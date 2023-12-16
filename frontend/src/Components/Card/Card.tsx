import "./Card.css";

interface Props {
  prop1: string;
}

const Card = ({ prop1 }: Props) => {
  const x = 1;

  return (
    <div className="card">
      <img src="https://picsum.photos/200/300" alt="Sample" />
      <div className="details">
        <h2>AAPL</h2>
        <p>$110</p>
      </div>
      {prop1}
      <p className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime animi
        libero dolorem perferendis. Impedit corrupti mollitia commodi minus
        facilis, placeat a eius iusto nisi, dolorum repudiandae illo delectus
        debitis quae!
      </p>
    </div>
  );
};

export default Card;
