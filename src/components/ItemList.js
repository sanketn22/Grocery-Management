



const ItemList = (props) => {
    const item = props.item;
    return(
  <Card>
    <Card.Title title={item.title}/>
   
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);
}

export default ItemList;