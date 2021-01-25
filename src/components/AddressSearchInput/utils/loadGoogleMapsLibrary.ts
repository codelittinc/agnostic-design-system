const API_URL = 'https://maps.googleapis.com/maps/api/js';
const API_LIBRARIES = ['places'];

const isLoaded = (): boolean => {
  return Array.prototype.slice
    .call(document.scripts)
    .some(script => script.src.indexOf(API_URL) > -1);
};

export const loadGoogleMapsLibrary = (apiKey): Promise<any> => {
  if (isLoaded()) return Promise.resolve();

  return new Promise<any>(resolve => {
    const libraries = API_LIBRARIES.join(',');

    const script = document.createElement('script');
    script.src = `${API_URL}?key=${apiKey}&libraries=${libraries}`;
    script.defer = true;
    script.async = true;
    script.onload = resolve as any;

    document.head.appendChild(script);
  });
};
