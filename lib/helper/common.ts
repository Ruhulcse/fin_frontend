import { format } from "date-fns";
import { defaultLocale, locales } from "./locales";

export const cookieOptions = () => {
  return { secure: true };
};

export const getError = (error: any, defaultMessage = "Error Found") => {
  return error?.data?.message ?? defaultMessage;
};

export const toQueryString = (obj: any) => {
  const filteredObj = Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => value !== "")
  );
  const encodedKeyValuePairs = Object.entries(filteredObj).map(
    ([key, value]: any) => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    }
  );
  return `?${encodedKeyValuePairs.join("&")}`;
};
export const moneyFormat = (amount: number, currency = "USD", type = "en-US") =>
  new Intl.NumberFormat(type, {
    style: "currency",
    currency,
  }).format(amount);

export const base64StringToFile = (base64String: any, filename: string) => {
  var arr = base64String.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[arr.length - 1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
};

export const fileToBase64 = (file: File) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

export const xlsxDownload = async (path: string, name = "file.xlsx") => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${path}`);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    a.click();
    window.URL.revokeObjectURL(url);
  } catch (error) {}
};

export const dateFormat = (date: string, formatType = "yyyy-MM-dd") => {
  const formattedDate = format(new Date(date), formatType);
  return formattedDate;
};

export const basePublicPath = ["/login", "/registration", "/forgot-password"];
export const publicPaths = () => {
  const paths = locales.map((locale) =>
    basePublicPath.map((path) =>
      defaultLocale === locale ? path : `/${locale}${path}`
    )
  );
  return paths.flat();
};

export const sortArray = (arr: any[], index: string) => {
  return [...arr].sort((a, b) => a[index] - b[index]);
};
