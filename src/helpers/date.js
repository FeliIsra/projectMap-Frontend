export const getFormattedDate = (date) => {
  const year = date.getFullYear();
  const month = (1 + date.getMonth())?.toString().padStart(2, '0');
  const day = date.getDate()?.toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const parseDate = (dateString) =>
  new Date(Date.parse(`${dateString}`)).toLocaleDateString(navigator.language, {
    day: 'numeric',
    year: 'numeric',
    month: 'long',
  });

export const parseTime = (timeString) =>
  new Date(Date.parse(`1970-01-01T${timeString}Z`)).toLocaleTimeString(
    navigator.language,
    {
      timeZone: 'UTC',
      hour12: true,
      hour: 'numeric',
      minute: 'numeric',
    }
  );

export const parseZone = (timeZone) =>
  new Date(Date.parse(`1970-01-01T12:00:00Z`))
    .toLocaleTimeString(navigator.language, {
      timeZone,
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
    })
    .split(' ')[1];

export const parseDateTime = (dateTimeString) =>
  new Date(Date.parse(`${dateTimeString}`)).toLocaleDateString(
    navigator.language,
    {
      day: 'numeric',
      year: 'numeric',
      month: 'long',
    }
  );

export const parseTimeSince = (dateTimeString) => {
  const date = new Date(dateTimeString).getTime();
  const now = new Date().getTime();
  const seconds = Math.floor((now - date) / 1000);

  let interval = seconds / 31536000;
  let intervalFloor = Math.floor(interval);

  if (interval > 1) {
    return `${parseDateTime(dateTimeString)}`;
  }
  interval = seconds / 2592000;
  intervalFloor = Math.floor(interval);
  if (interval > 1) {
    return `${parseDateTime(dateTimeString)}`;
  }
  interval = seconds / 86400;
  intervalFloor = Math.floor(interval);
  if (interval > 14) {
    return `${parseDateTime(dateTimeString)}`;
  }
  if (interval > 1) {
    return `${intervalFloor} day${intervalFloor > 1 ? 's' : ''} ago`;
  }
  interval = seconds / 3600;
  intervalFloor = Math.floor(interval);
  if (interval > 1) {
    return `${intervalFloor} hour${intervalFloor > 1 ? 's' : ''} ago`;
  }
  interval = seconds / 60;
  intervalFloor = Math.floor(interval);
  if (interval > 1) {
    return `${intervalFloor} minute${intervalFloor > 1 ? 's' : ''} ago`;
  }
  intervalFloor = Math.floor(seconds);
  return `${Math.floor(seconds)} second${intervalFloor > 1 ? 's' : ''} ago`;
};

export const formatDate = (dateString) => {
  const formattedDateString =
    typeof dateString === 'object'
      ? getFormattedDate(dateString)
      : dateString.split(' ')[0];
  return `${parseDate(formattedDateString)}`;
};

export const formatDateTime = (dateString, timeString) => {
  const formattedDateString =
    typeof dateString === 'object'
      ? getFormattedDate(dateString)
      : dateString.split(' ')[0];
  return `${parseDate(formattedDateString)} ${parseTime(timeString)}`;
};

export const formatDateTimeZone = (dateString, timeString, timeZone) => {
  const formattedDateString =
    typeof dateString === 'object'
      ? getFormattedDate(dateString)
      : dateString.split(' ')[0];
  return `${parseDate(formattedDateString)} ${parseTime(
    timeString
  )} ${parseZone(timeZone)}`;
};

export const formatTime = (timeString) => {
  const formattedTimeString = timeString
    .split(':')
    .filter((ts) => ts)
    .join(':');
  return `${parseTime(formattedTimeString)}`;
};

export const formatTimeZone = (timeString, timeZone) => {
  return `${formatTime(timeString)} ${parseZone(timeZone)}`;
};

export const getDiff = (date) => {
  const now = new Date().getTime();
  const dateTime = date ? new Date(date).getTime() : now;
  return (dateTime - now) / (60 * 60 * 1000);
};

export const isToday = (date) => {
  const today = new Date();
  return (
    today.getFullYear() === date.getFullYear() &&
    today.getMonth() === date.getMonth() &&
    today.getDate() === date.getDate()
  );
};

export const formatDateWithWeekday = (date) =>
  new Date(date).toLocaleDateString(navigator.language, {
    day: 'numeric',
    year: 'numeric',
    month: 'long',
    weekday: 'long',
  });
