import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

import { toast } from 'react-toastify';

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    let errorMessage = 'Une erreur est survenue';

    if (error.response) {
      // Erreurs de réponse (4xx, 5xx)
      switch (error.response.status) {
        case 400:
          errorMessage = 'Requête invalide.';
          break;
        case 401:
          errorMessage = 'Non autorisé. Veuillez vous reconnecter.';
          // Optionnel : déconnecter l'utilisateur
          break;
        case 403:
          errorMessage = 'Accès refusé.';
          break;
        case 404:
          errorMessage = 'La ressource demandée est introuvable.';
          break;
        case 500:
        case 502:
        case 503:
          errorMessage = 'Erreur serveur. Veuillez réessayer plus tard.';
          break;
        default:
          errorMessage = error.response.data?.message || 'Une erreur de réponse est survenue.';
      }
    } else if (error.request) {
      // Erreurs de requête (pas de réponse, ex: pas de connexion)
      errorMessage = 'Erreur de connexion. Vérifiez votre réseau.';
    } else {
      // Autres erreurs (ex: erreur de configuration)
      errorMessage = error.message;
    }

    toast.error(errorMessage);

    return Promise.reject(error);
  }
);

export default apiClient;
