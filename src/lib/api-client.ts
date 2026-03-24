const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

interface FetchOptions extends RequestInit {
  token?: string;
}

export const apiClient = {
  fetch: async <T>(path: string, options: FetchOptions = {}): Promise<T> => {
    const { token, ...init } = options;
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...((init.headers as Record<string, string>) || {}),
    };
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const response = await fetch(`${API_BASE}${path}`, { ...init, headers });

    if (!response.ok) {
      let message = 'Request failed';
      try {
        const errData = await response.json();
        message = errData?.error?.message || message;
      } catch {
        // non-JSON error body — keep default message
      }
      throw new Error(message);
    }

    return response.json() as Promise<T>;
  },

  get: <T>(path: string, token?: string) =>
    apiClient.fetch<T>(path, { method: 'GET', token }),

  post: <T>(path: string, body: unknown, token?: string) =>
    apiClient.fetch<T>(path, { method: 'POST', body: JSON.stringify(body), token }),

  put: <T>(path: string, body: unknown, token?: string) =>
    apiClient.fetch<T>(path, { method: 'PUT', body: JSON.stringify(body), token }),

  delete: <T>(path: string, token?: string) =>
    apiClient.fetch<T>(path, { method: 'DELETE', token }),
};
