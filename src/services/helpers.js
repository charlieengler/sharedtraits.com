const baseURL = "http://localhost:3000/";

export function getCookie(name){
    if (!document.cookie) {
      return null;
    }
    const token = document.cookie.split(';')
      .map(c => c.trim())
      .filter(c => c.startsWith(name + '='));

    if (token.length === 0) {
      return null;
    }
    return decodeURIComponent(token[0].split('=')[1]);
}

export function redirect(url){
    window.location.href = baseURL + url;
}

export const API_URL = "http://localhost:8000";