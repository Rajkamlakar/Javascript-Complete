// document.getElementById("3").onclick = function () {
//   alert("hello");
// };
document.getElementById("3").addEventListener(
  "click",
  function (e) {
    alert("Clicked again");
  },
  false //(this is called EventPropagation and this is true or false)
);
document.querySelector("#images").addEventListener("click", function (e) {
  console.log(e.target.parentNode);
  if (e.target.tagName === "IMG") {
    let removeIt = e.target.parentNode;
    removeIt.remove();
  }
  // let removeIt = e.target.parentNode;
  // removeIt.remove();
});
//time,timestamp,preventDefault,target,toelement you shoud study
//clientX,clientY etc
//altkey,crtkey,shiftkey,keycode
