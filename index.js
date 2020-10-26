import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import App from './app/index';
import {name as appName} from './app.json';
import Robot  from './app/components/Robot';
import MultipleGreetings from './app/components/MultipleGreetings';
import TextBlink from './app/components/TextBlink';
import StyleTest from './app/components/StyleTest';
import FixedDimension from './app/components/FixedDimension';
import FlexDimension from './app/components/FlexDimension';
import FlexDirection from './app/components/FlexDirection';
import JustifyContent from './app/components/JustifyContent';
import EmailAndPassword from './app/components/EmailAndPassword';
import BasicFlatList from './app/components/BasicFlatListOld';


AppRegistry.registerComponent(appName, () => BasicFlatList);