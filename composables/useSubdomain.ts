export const useSubdomain = () => {
  const getSubdomain = () => {
    if (process.server) return null;

    const hostname = window.location.hostname;
    const parts = hostname.split(".");

    if (parts.length > 2) {
      return parts[0];
    }

    return null;
  };

  return {
    getSubdomain,
  };
};
