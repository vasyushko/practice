let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof(obj[key]) == 'number') {
            obj[key] = obj[key] * 2;
        } else continue;
    }
}
  
multiplyNumeric(menu);
  
console.log( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );