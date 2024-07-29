import { View, ScrollView } from 'react-native';
import { globalStyles } from '@/src/config/theme';
import Title from '../../components/ui/Title';
import MenuItem from '../../components/ui/MenuItem';

const animationItems = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102',
  },
];

const uiMenuItems = [
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'Switch',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'Alert',
  },
  {
    name: 'TextInputs',
    icon: 'document-text-outline',
    component: 'TextInputs',
  },
];

const menuItems = [
  {
    name: 'Pull to refresh',
    icon: 'refresh-outline',
    component: 'PullToRefresh',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'CustomSectionList',
  },
  {
    name: 'Modal',
    icon: 'copy-outline',
    component: 'Modal',
  },
  {
    name: 'InfiniteScroll',
    icon: 'download-outline',
    component: 'InfiniteScroll',
  },
  {
    name: 'Slides',
    icon: 'flower-outline',
    component: 'Slides',
  },
  {
    name: 'Themes',
    icon: 'flask-outline',
    component: 'ChangeTheme',
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
