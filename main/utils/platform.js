import { Platform } from 'react-native';

const normalize = value => String(value || '').toLowerCase();

const isKindleHint = value => {
  const normalized = normalize(value);
  return (
    normalized.includes('amazon') ||
    normalized.includes('kindle') ||
    normalized.includes('fire')
  );
};

export const isLikelyKindleDevice =
  Platform.OS === 'android' &&
  (() => {
    const constants = Platform.constants || {};
    return [
      constants.Brand,
      constants.Manufacturer,
      constants.Model,
      constants.Fingerprint,
    ].some(isKindleHint);
  })();
