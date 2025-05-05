const utils = {
  isDefined: <T>(argument: T | undefined | null): argument is T => {
    return argument !== undefined && argument !== null;
  },

  handleClickBubble: (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  },

  handleClickCapture: (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
  },

  handleClickBubbleAndCapture: (e: React.MouseEvent<HTMLElement>) => {
    utils.handleClickBubble(e);
    utils.handleClickCapture(e);
  },

  getParameterObject: ({ url }: { url: string }) => {
    const params = url.split('?')[1]?.split('&') || [];
    const obj: { [key: string]: string } = {};

    for (let i = 0; i < params.length; i++) {
      const temp = params[i]?.split('=') || [];
      const key = temp[0];
      const value = temp.splice(1, temp.length).join('=');
      obj[key] = value;
    }
    return obj;
  },

  getParameter: ({ url, key }: { url: string; key: string }) => {
    const obj = utils.getParameterObject({ url });
    return obj[key];
  },
};

export default utils;
