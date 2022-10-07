/*
 * Funtion to set the new URL
 */
const setPath = (value) => {
  let { origin, pathname } = window.location,
    url;

  pathname = pathname.split("/");
  pathname.shift();

  if (value && pathname[pathname.length - 1] !== "documents") {
    pathname[pathname.length - 1] = value;
  } else if (value) {
    pathname.push(value);
  } else {
    pathname.pop();
  }

  pathname = pathname.join("/");

  url = new URL(`${origin}/${pathname}`);

  window.history.pushState({}, "", url);
};

export default setPath;
