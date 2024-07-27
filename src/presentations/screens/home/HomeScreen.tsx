import { View, ScrollView } from 'react-native';
import { globalStyles } from '@/src/config/theme';
import Title from '../../components/ui/Title';
import MenuItem from '../../components/ui/MenuItem';

const animationItems = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
];

const uiMenuItems = [
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'TextInputs',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  },
];

const menuItems = [
  {
    name: 'Pull to refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'CustomSectionListScreen',
  },
  {
    name: 'Modal',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    name: 'InfiniteScroll',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen',
  },
  {
    name: 'Slides',
    icon: 'flower-outline',
    component: 'SlidesScreen',
  },
  {
    name: 'Themes',
    icon: 'flask-outline',
    component: 'ChangeThemeScreen',
  },
];

const HomeScreen = () => {
  return (
    <View style={globalStyles.mainContainer}>
      <View style={globalStyles.globalMargin}>
        <ScrollView>
          <Title safe text='Menu options' />
          {animationItems.map((item, index) => (
            <MenuItem
              key={index}
              isFirst={index === 0}
              isLast={index === animationItems.length - 1}
              {...item}
            />
          ))}
          <View style={{ marginTop: 30 }} />
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              isFirst={index === 0}
              isLast={index === menuItems.length - 1}
              {...item}
            />
          ))}
          <View style={{ marginTop: 30 }} />
          {uiMenuItems.map((item, index) => (
            <MenuItem
              key={index}
              isFirst={index === 0}
              isLast={index === uiMenuItems.length - 1}
              {...item}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
export default HomeScreen;
