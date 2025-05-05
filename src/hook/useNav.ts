import { utils } from '../utils';
import { useLocation, useNavigate } from 'react-router-dom';

export default function useNav() {
  const navigation = useNavigate();
  const { state = {} } = useLocation();

  function useNavigation({
    url,
    params = {},
    state = {},
    scrollToTop = true,
  }: {
    url: string;
    params?: { [key: string]: string | number | undefined };
    state?: any;
    scrollToTop?: boolean;
  }) {
    const paramKeys = Object.keys(params);
    const parameter =
      paramKeys.length > 0
        ? `?${paramKeys
            .filter((key) => !!params[key])
            .map((key) => `${key}=${params[key]}`)
            .join('&')}`
        : '';

    navigation(`${url}${parameter}`, {
      preventScrollReset: true,
      state,
    });
    if (scrollToTop) {
      window.scrollTo(0, 0);
    }
  }

  function useParams<T>() {
    const params = utils.getParameterObject({
      url: decodeURI(window.location.search),
    });
    const data: T = { ...state, ...params };
    return data;
  }

  return {
    navigate: useNavigation,
    getParams: useParams,
    NOW_PATH: window.location.pathname,
  };
}
