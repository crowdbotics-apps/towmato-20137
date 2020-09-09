import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps99385Navigator from '../features/Maps99385/navigator';
import Settings99363Navigator from '../features/Settings99363/navigator';
import Settings99348Navigator from '../features/Settings99348/navigator';
import NotificationList99347Navigator from '../features/NotificationList99347/navigator';
import Maps99346Navigator from '../features/Maps99346/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps99385: { screen: Maps99385Navigator },
Settings99363: { screen: Settings99363Navigator },
Settings99348: { screen: Settings99348Navigator },
NotificationList99347: { screen: NotificationList99347Navigator },
Maps99346: { screen: Maps99346Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
