export const apiUrl =
  "https://api.addismotortaxi.com/api/v1/iQ6qlRWlwWXtmGPFbBiEc4WKKAbHCLQK0HLxoGLKY0";

export function saveToSession(name, data, type = "string") {
  sessionStorage.setItem(name, data);
  return 1;
}

export function deleteFromSession(name) {
  sessionStorage.removeItem(name);
  return;
}

export function getFromSession(name) {
  return sessionStorage.getItem(name);
}