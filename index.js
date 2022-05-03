// https://emapa.fra1.cdn.digitaloceanspaces.com/statuses.json

const dat = document.querySelectorAll("[data-raion]");

const response = async () => {
  let data = await fetch("http://localhost:3000/iden");
  let result = await data.json();

  Object.entries(result.states).forEach((item) => {
    if (item[1].enabled) {
      Object.keys(item[1].districts).forEach((district) => {
        document
          .querySelector(`[data-raion="${district}"]`)
          ?.classList.add("colored");
      });
    } else {
      Object.keys(item[1].districts).forEach((district) => {
        document
          .querySelector(`[data-raion="${district}"]`)
          ?.classList.remove("colored");
      });
    }
  });

  // let key = Object.entries(rez.states).forEach((item) => {
  //   console.log(item);
  // });
};
response();
setInterval(response, 30000);
// response();
// console.log("hi");
