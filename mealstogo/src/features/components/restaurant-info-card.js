import { Title, RestaurantCard, RestaurantCover } from './restaurant-info-styling';


export const RestaurantInfoCard = ({restaurant = {}}) => {
  const {
    name = 'Temp Name',
    icon,
    photos = ['https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D'],
    address = '100 random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily
    } = restaurant;

  return (
      <RestaurantCard elevation={5}>
        <RestaurantCover key={name} source={{ uri: photos[0] }} />
        <Title>{name}</Title>
      </RestaurantCard>
  );
}
