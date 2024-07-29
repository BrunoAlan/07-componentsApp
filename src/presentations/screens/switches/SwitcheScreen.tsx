import CustomView from '../../components/ui/CustomView';
import Card from '../../components/ui/Card';
import CustomSwitch from '../../components/ui/CustomSwitch';
import { useState } from 'react';
import Separator from '../../components/ui/Separator';
const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });
  return (
    <CustomView style={{ marginTop: 200 }}>
      <Card>
        <CustomSwitch
          isOn={state.isActive}
          onChange={(value) => setState({ ...state, isActive: value })}
          text='Active'
        />
        <Separator />
        <CustomSwitch
          isOn={state.isHappy}
          onChange={(value) => setState({ ...state, isHappy: value })}
          text='Happy'
        />
        <Separator />
        <CustomSwitch
          isOn={state.isHungry}
          onChange={(value) => setState({ ...state, isHungry: value })}
          text='Hungry'
        />
      </Card>
    </CustomView>
  );
};
export default SwitchScreen;
