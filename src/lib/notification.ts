import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export async function scheduleNotification() {
  const trigger = new Date(Date.now());
  trigger.setMinutes(trigger.getMinutes() + 1);

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Olá, Diego!",
      body: "Você práticou seus hábitos hoje?",
    },
    trigger,
  });

  const schedules = await Notifications.getAllScheduledNotificationsAsync();
  console.log(schedules);
}
