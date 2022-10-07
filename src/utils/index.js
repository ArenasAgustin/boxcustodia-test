/*
 * Funtion to set the new URL
 */
const setPath = (value) => {
  let { origin, pathname } = window.location,
    url;

  pathname = pathname.split("/");
  pathname.shift();
  console.log(pathname);
  if (value && pathname[pathname.length - 1] !== "documents") {
    console.log("a");
    pathname[pathname.length - 1] = value;
  } else if (value) {
    console.log("b");
    pathname.push(value);
  } else {
    console.log("c");
    pathname.pop();
  }

  pathname = pathname.join("/");
  console.log(pathname);
  url = new URL(`${origin}/${pathname}`);

  window.history.pushState({}, "", url);
};

export default setPath;
