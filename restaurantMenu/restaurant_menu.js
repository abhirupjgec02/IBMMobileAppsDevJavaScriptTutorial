const breakfastMenu = ['Pancakes -$12','Eggs Benedict -$14','Oatmeal -$17', 'Frittata -$20'];
const mainCourseMenu = ['Steak -$12','Pasta -$14','Burger -$18','Salmon -$20'];
const dessertMenu  = ['Cake -$12','Ice Cream -$14','Pudding -$18','Fruit Salad -$20'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1} : ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1} : ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for(let i=0; i < dessertMenu.length; i++){
    dessertItem += `<p>Item ${i + 1} : ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;


