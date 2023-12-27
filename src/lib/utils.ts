import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const getTimeStamp = (createdAt: Date): string => {
  const now = new Date();
  const diffInSeconds = Math.floor(
    (now.getTime() - createdAt.getTime()) / 1000
  );
  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;

  if (diffInSeconds < minute) {
    return `${diffInSeconds} second${diffInSeconds === 1 ? "" : "s"} ago`;
  } else if (diffInSeconds < hour) {
    const minutes = Math.floor(diffInSeconds / minute);
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  } else if (diffInSeconds < day) {
    const hours = Math.floor(diffInSeconds / hour);
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  } else {
    const days = Math.floor(diffInSeconds / day);
    return `${days} day${days === 1 ? "" : "s"} ago`;
  }
};

export const formatNumberWithSuffix = (num: number): string => {
  if (num >= 1e6) {
    return (num / 1e6).toFixed(1) + "M";
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(1) + "k";
  } else {
    return num.toString();
  }
};
