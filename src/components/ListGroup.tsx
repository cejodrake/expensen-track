function ListGroup() {
  let items = [
    "New York",
    "San francisco",
    "Santiago",
    "Daniela",
    "Andrea",
    "Jeniffer",
  ];
  items = [];

  if (items.length == 0) return <p>No item found</p>;
  return (
    <div>
      <ul className="list-group">
        {items.map((item) => (
          <list key={item}>{item}</list>
        ))}
      </ul>
    </div>
  );
}
export default ListGroup;
