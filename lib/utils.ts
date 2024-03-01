import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const seconds = Math.floor(
    (new Date().getTime() - new Date(createdAt).getTime()) / 1000
  );

  // Utility function to decide between singular and plural forms
  const pluralize = (count: number, singular: string, plural: string) =>
    count === 1 ? singular : plural;

  let interval = seconds / 31536000; // seconds in a year
  if (interval > 1) {
    return (
      Math.floor(interval) +
      " " +
      pluralize(Math.floor(interval), "year", "years") +
      " ago"
    );
  }
  interval = seconds / 2592000; // seconds in a month
  if (interval > 1) {
    return (
      Math.floor(interval) +
      " " +
      pluralize(Math.floor(interval), "month", "months") +
      " ago"
    );
  }
  interval = seconds / 604800; // seconds in a week
  if (interval > 1) {
    return (
      Math.floor(interval) +
      " " +
      pluralize(Math.floor(interval), "week", "weeks") +
      " ago"
    );
  }
  interval = seconds / 86400; // seconds in a day
  if (interval > 1) {
    return (
      Math.floor(interval) +
      " " +
      pluralize(Math.floor(interval), "day", "days") +
      " ago"
    );
  }
  interval = seconds / 3600; // seconds in an hour
  if (interval > 1) {
    return (
      Math.floor(interval) +
      " " +
      pluralize(Math.floor(interval), "hour", "hours") +
      " ago"
    );
  }
  interval = seconds / 60; // seconds in a minute
  if (interval > 1) {
    return (
      Math.floor(interval) +
      " " +
      pluralize(Math.floor(interval), "minute", "minutes") +
      " ago"
    );
  }
  return (
    Math.floor(seconds) +
    " " +
    pluralize(Math.floor(seconds), "second", "seconds") +
    " ago"
  );
};

export function formatNumber(num: number): string {
  if (num >= 1e6) {
    return (num / 1e6).toFixed(1) + "M"; // For millions
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(1) + "K"; // For thousands
  } else {
    return num.toString(); // For numbers less than 1000
  }
}
