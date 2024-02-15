import { PropTypes } from "prop-types";

export function AnimalsList() {
  // const animals = ["Lion", "Cow", "Snake", "Lizard", "Iguana"];
  const animals = [];

  return <List items={animals} />;
}

function spongeCase(string) {
  return string.split("").reduce((previous, current, index) => {
    return (
      previous +
      (index % 2 == 0 ? current.toLowerCase() : current.toUpperCase())
    );
  }, "");
}

function List({ items }) {
  return (
    <ul>
      {items.length > 0 ? (
        items.map((item) => <ListItem item={item} key={item} />)
      ) : (
        <span>There are no items</span>
      )}
    </ul>
  );
}

function ListItem({ item }) {
  const itemText = Math.random() > 0.5 == 0 ? item : spongeCase(item);
  return <li key={item}>{itemText}</li>;
}

ListItem.propTypes = {
  item: PropTypes.string,
  key: PropTypes.string,
};
List.propTypes = {
  items: PropTypes.array,
};
