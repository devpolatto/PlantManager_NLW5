import React, { useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';
import * as Notifications from 'expo-notifications';

import { PlantProps } from './src/libs/storage';

import Routes from './src/routes/';

export default function App() {

  const [fonstLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant as PlantProps;
        console.log('Nova Notificaçao \n\n\n', data)
      }
    )

    return () => subscription.remove();

    // async function notifications() {
    //   // await Notifications.cancelAllScheduledNotificationsAsync();

    //   const data = await Notifications.getAllScheduledNotificationsAsync();
    //   console.log('NOTIFICAÇÕES AGENDADAS #####')
    //   console.log(data)
    // }

    // notifications()
  }, [])

  if (!fonstLoaded) return <AppLoading />

  return (
    <Routes />
  );
}
