import { TITLE_MAP, MASTER_ITEM_SUBTITLES } from './constants';

export const getPageTitle = (pathname: string): string => {
  const path = pathname.split('/')[1];

  return (
    TITLE_MAP[path] ||
    path
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  );
};

export const getMasterItemTitle = (pathname: string): string => {
  const segments = pathname.split('/');
  if (segments[1] === 'master-item' && segments[2]) {
    const subPath = segments[2];
    return MASTER_ITEM_SUBTITLES[subPath] || getPageTitle('master-item');
  }
  return getPageTitle(pathname);
};
