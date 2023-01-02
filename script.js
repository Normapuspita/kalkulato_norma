const buttons = document.querySelectorAll('button');
const input = document.querySelector('#input');

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear') {
            input.value = '';
        } else if (item.id == 'backspace') {
            let string = input.value.toString();
            input.value = string.substr(0, string.length - 1);
        } else if (input.value != '' && item.id == 'equal') {
            input.value = eval(input.value);
        } else if (input.value == '' && item.id == 'equal') {
            input.value = 'Empty!';
            setTimeout(() => (input.value = ''), 2000);
        } else if (item.id == 'sin') {
            input.value = Math.sin(input.value);
        } else if (item.id == 'cos') {
            input.value = Math.cos(input.value);
        } else if (item.id == 'tan') {
            input.value = Math.tan(input.value);
        } else {
            input.value += item.id;
        }
    };
});
const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler-icon');
themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
};
