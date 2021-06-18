const DescriptionItem = ({ descriptionKey, descriptionValue }) => {
  return (
    <p>
      <b>{descriptionKey}: </b>
      {descriptionValue}
    </p>
  );
};

export default DescriptionItem;
