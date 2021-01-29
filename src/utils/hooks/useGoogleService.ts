import useScript from './useScript';

const API_URL = 'https://maps.googleapis.com/maps/api/js';
const API_LIBRARIES = ['places'];

export default function useGoogleServices(apiKey) {
  const libraries = API_LIBRARIES.join(',');
  const status = useScript(`${API_URL}?key=${apiKey}&libraries=${libraries}`);

  if (status === 'ready' && window) {
    return { loading: false, google: window.google };
  }
  // Keep track of script status ("idle", "loading", "ready", "error")
  return { loading: true, google: null };
}
