export function validateURL(url) {
    const urlRegex = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/.*)*$/i;
    return urlRegex.test(url);
  }
  