const employees = new Map([
    [new Date("2001-01-18"), 'Андрій Голопотилюк'],
    [new Date("2001-01-10"), 'Олександр Іванченко'],
    [new Date("2002-04-20"), 'Петро Кузик'],
    [new Date("2001-04-11"), 'Оксана Стиценко'],
    [new Date("2000-10-18"), 'Іван Коцюбинський']
]);
let sortedEmployees = new Map([...employees].sort((a, b) => a[0] - b[0]));

function Pluorization(num, first_form, second_form, third_form) {
    let result, identifier
    let lastCharacter = String(num).charAt(String(num).length - 1)
    String(num).length > 1 ? identifier = String(num).charAt(String(num).length - 2) + lastCharacter : two_last_num = lastCharacter
    if (identifier < 21 && 9 < identifier) {
        result = `${num} ${first_form}`
    } else {
        if (lastCharacter > 1 && lastCharacter < 5) {
            result = `${num} ${third_form}`
        } else {
            lastCharacter == 1 ? result = `${num} ${second_form}` : result = `${num} ${first_form}`
        }
    }
    return result
}

function age(date_birthday, today_date) {
    let month = today_date.getMonth() - date_birthday.getMonth();
    let day = today_date.getDate() - date_birthday.getDate();
    if (month < 0 || (month == 0 && day < 0)) {
        return today_date.getYear() - date_birthday.getYear() - 1;
    } else {
        return today_date.getYear() - date_birthday.getYear();
    }
}
function toString(employees) {
    let today_date = new Date();
    let month
    let result;
    employees.forEach((value, key) => {
        result = `(${(key.getMonth() + 1).toString().padStart(2, '0')}) - ${value} (${Pluorization(age(key, today_date), 'років', 'рік', 'роки')})`
        let month_birthday = key.getMonth() + 1
        if (month == month_birthday) {
            console.log(result)
        } else {
            month = month_birthday;
            let title = key.toLocaleDateString('en-us', { month: "long", year: "numeric" })
            console.log(title);
            console.log(result)
        }
    });

}
toString(sortedEmployees);