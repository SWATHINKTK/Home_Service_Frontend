import { toast } from "react-toastify";

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export function getCurrentLocation(): Promise<Coordinates> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported by this browser."));
    } else {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error: GeolocationPositionError) => {
          // Handle specific error codes
          switch (error.code) {
            case error.PERMISSION_DENIED:
              toast.error("Location permission denied. Please allow location access.");
              break;
            case error.POSITION_UNAVAILABLE:
              toast.error("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              toast.error("Location request timed out. Try again.");
              break;
            default:
              toast.error("An unknown error occurred while fetching location.");
          }
          reject(error);
        }
      );
    }
  });
}
