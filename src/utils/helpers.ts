import { Alert } from "react-native";
import Toast, { ToastType } from "react-native-toast-message";

const showToast = (title: string, desc: string, type: ToastType) =>
  Toast.show({
    text1: title,
    text2: desc,
    type,
  });

const getCenterOffsetForAnchor = (
  anchor: { x: number; y: number },
  markerWidth: number,
  markerHeight: number
): { x: number; y: number } => ({
  x: markerWidth * 0.5 - markerWidth * anchor.x,
  y: markerHeight * 0.5 - markerHeight * anchor.y,
});

const acreToSquareKM = (size: number) => (0.00404686 * size).toFixed(2);

const onEventReturn = (callbackResult: string) => {
  console.log('result : ' + callbackResult);
};

const onSuccess = (callbackResult: any) => {
  const result = JSON.stringify(callbackResult, null, 2);
  Alert.alert('Result', result);
  console.log('result : ' + result);
};

const getPlainNumber = (phoneNumber: string) => phoneNumber.split(" ").join("");

const getAverageCoordinates = (coords: Coords[]) => {
  const res = coords.reduce(
    (acc, obj) => ({
      latitude: acc.latitude + obj.latitude,
      longitude: acc.longitude + obj.longitude,
    }),
    { latitude: 0, longitude: 0 }
  );
  return {
    latitude: res.latitude / coords.length,
    longitude: res.longitude / coords.length,
  };
};

export {
  acreToSquareKM,
  getAverageCoordinates,
  getCenterOffsetForAnchor,
  showToast,
  getPlainNumber,
  onEventReturn,
  onSuccess
};
