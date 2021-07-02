import MeetupItem from './PropertyItem';
import classes from './PropertyList.module.css';

function PropertyList(props) {
  return (
    <ul className={classes.list}>
      {props.properties.map((property) => (
        <MeetupItem
          key={property.id}
          id={property.id}
          image={property.image}
          title={property.title}
          address={property.address}
        />
      ))}
    </ul>
  );
}

export default PropertyList;
