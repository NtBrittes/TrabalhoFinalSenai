import Card from "./Card.jsx";
const products = [
  {
    id: 1,
    name: "Pão Francês",
    price: "1.00",
    image: "/pao.jpg",
    description: "Crocante e fresquinho. Novas fornadas a cada meia hora."
  },
  {
    id: 2,
    name: "Croissant",
    price: "4.99",
    image: "/croissant.jpg",
    description: "Folhado amanteigado; opções de recheio são quatro queijos e frango com catupiry."
  },
  {
    id: 3,
    name: "Bolo de Chocolate",
    price: "16.99",
    image: "/bolo.jpg",
    description: "Fofinho e delicioso, com ou sem granulado."
  },
  {
    id: 4,
    name: "Pão de Mel",
    price: "16.99",
    image: "/paodemel.jpg",
    description: "A especialidade da casa! Com delicioso recheio de mel e doce de leite."
  }
];

function ListaProdutos() {
  return (
    <div className="grid">
      {products.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
}

export default ListaProdutos;