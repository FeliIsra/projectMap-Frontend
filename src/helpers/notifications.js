import { toast } from 'react-toastify';

const options = {
  type: toast.TYPE.INFO,
  position: toast.POSITION.TOP_CENTER,
  autoClose: 2000,
};

export const sendErrorNotification = (message) => {
  toast(message, { ...options, type: toast.TYPE.ERROR });
};

export const sendInfoNotification = (message) => {
  toast(message, options);
};

export const sendSuccessNotification = (message) => {
  toast(message, { ...options, type: toast.TYPE.SUCCESS });
};

export const sendWarningNotification = (message) => {
  toast(message, { ...options, type: toast.TYPE.WARNING });
};
