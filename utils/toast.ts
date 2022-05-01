import { toast as makeToast, ToastOptions } from 'react-toastify';

export const defaultOptions = {
  position: 'top-center',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
} as ToastOptions;

export default makeToast;
