let user = {};
user.name = 'John';
user.surname = 'Mike';
user.name = 'Peter';
delete user.name;

document.getElementById('user').innerHTML = JSON.stringify(user);

let fruit_total = 0;
const fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};

for (const key in fruit) {
    document.getElementById('fruit_list').innerHTML = JSON.stringify(fruit)
    fruit_total += fruit[key];
}

document.getElementById('fruits').innerHTML = fruit_total