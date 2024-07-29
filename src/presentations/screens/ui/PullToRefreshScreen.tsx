import { RefreshControl, StyleSheet } from 'react-native';
import Title from '../../components/ui/Title';
import { ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from 'react';
import { colors, globalStyles } from '@/src/config/theme';
const PullToRefreshScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { top } = useSafeAreaInsets();
  const onRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          progressViewOffset={top}
          onRefresh={onRefresh}
          refreshing={isRefreshing}
          colors={[colors.primary, 'red', 'orange']}
          tintColor={colors.primary}
        />
      }
      style={(globalStyles.mainContainer, globalStyles.globalMargin)}
    >
      <Title safe text={'Pull to refresh'} />
    </ScrollView>
  );
};
export default PullToRefreshScreen;
const styles = StyleSheet.create({});
