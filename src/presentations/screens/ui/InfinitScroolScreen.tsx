import { useState } from 'react';
import { ActivityIndicator, FlatList, Image, View } from 'react-native';
import { colors } from '@/src/config/theme';
const InfinitScroolScreen = () => {
  const [number, setNumber] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray = Array.from(
      { length: 5 },
      (_, index) => number.length + index
    );
    // to simulate fetching
    setTimeout(() => {
      setNumber([...number, ...newArray]);
    }, 1000);
  };

  return (
    <View style={{ backgroundColor: 'black' }}>
      <FlatList
        data={number}
        onEndReachedThreshold={0.6}
        onEndReached={loadMore}
        renderItem={({ item }) => <ListItem number={item} />}
        keyExtractor={(item) => item.toString()}
        ListFooterComponent={() => (
          <View style={{ height: 150, justifyContent: 'center' }}>
            <ActivityIndicator size={'large'} color={colors.primary} />
          </View>
        )}
      />
    </View>
  );
};
export default InfinitScroolScreen;

interface ListItemProps {
  number: number;
}

const ListItem = ({ number }: ListItemProps) => {
  return (
    <Image
      source={{ uri: `https://picsum.photos/id/${number}/500/400` }}
      style={{ height: 400, width: '100%' }}
    />
  );
};
