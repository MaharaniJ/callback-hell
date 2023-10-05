var count = t("div", "id", "start");
function t(element, attname, attvalue) {
  var element = document.createElement(element);
  element.setAttribute(attname, attvalue);
  return element;
}
var NewYear = () => {
  setTimeout(() => {
    foods.append(count);
    count.innerHTML = "10";
    setTimeout(() => {
      count.innerHTML = "9";
      setTimeout(() => {
        count.innerHTML = "8";
        setTimeout(() => {
          count.innerHTML = "7";
          setTimeout(() => {
            count.innerHTML = "6";
            setTimeout(() => {
              count.innerHTML = "5";
              setTimeout(() => {
                count.innerHTML = "4";
                setTimeout(() => {
                  count.innerHTML = "3";
                  setTimeout(() => {
                    count.innerHTML = "2";
                    setTimeout(() => {
                      count.innerHTML = "1";
                      setTimeout(() => {
                        count.innerHTML = "HAPPY INDEPENDENCE DAY!!!";
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

NewYear();
