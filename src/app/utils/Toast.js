// toastUtils.js
import { toast } from "sonner";

const toastOptions = {
  style: {
    background: "#363636",
    color: "#fff",
  },
  duration: 4000,
};

export const showInfoToast = (message) => {
  toast.info(message, {
    ...toastOptions,
    style: {
      ...toastOptions.style,
      background: "#1E90FF", // Bleu pour info
    },
  });
};

export const showSuccessToast = (message) => {
  toast.success(message, {
    ...toastOptions,
    style: {
      ...toastOptions.style,
      background: "rgb(219 39 119)", // Vert pour succès
    },
  });
};

export const showWarningToast = (message) => {
  toast.warning(message, {
    ...toastOptions,
    style: {
      ...toastOptions.style,
      background: "#FFA500", // Orange pour avertissement
    },
  });
};

export const showErrorToast = (message) => {
  toast.error(message, {
    ...toastOptions,
  });
};
