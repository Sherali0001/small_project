// JavaScript

// Tanlangan statusni boshqarish uchun barcha "circle" elementlarini olish
const circles = document.querySelectorAll('.circle');
const addButton = document.querySelector('button');
const inputField = document.querySelector('input[type="text"]');
const taskContainer = document.querySelector('.flex.flex-col.gap-4');

// "circle" elementlari uchun hodisani ulash
circles.forEach(circle => {
    circle.addEventListener('click', () => {
        // Hamma "circle" elementlarining faollik holatini o'chirish
        circles.forEach(c => {
            c.classList.remove('bg-orange-500');
            c.classList.add('bg-white');
            c.innerHTML = '<i class="fa-solid fa-check"></i>';
            c.parentElement.querySelector('h1').style.textDecoration = 'none';
        });

        // Tanlangan "circle" elementini faollashtirish
        circle.classList.remove('bg-white');
        circle.classList.add('bg-orange-500');
        circle.innerHTML = '<i class="fa-solid fa-check"></i>';
        circle.parentElement.querySelector('h1').style.textDecoration = 'line-through';
    });
});

// Yangi vazifa qo'shish
addButton.addEventListener('click', () => {
    const taskText = inputField.value.trim();
    if (taskText) {
        // Yangi vazifa elementini yaratish
        const taskItem = document.createElement('div');
        taskItem.classList.add('flex', 'gap-4', 'items-center');

        const circle = document.createElement('div');
        circle.classList.add('circle', 'bg-white', 'border-[1px]', 'border-gray-600', 'hover:bg-orange-500', 'w-7', 'h-7', 'flex', 'justify-center', 'items-center', 'rounded-full');
        circle.innerHTML = '<i class="fa-solid fa-check"></i>';
        circle.addEventListener('click', () => {
            document.querySelectorAll('.circle').forEach(c => {
                c.classList.remove('bg-orange-500');
                c.classList.add('bg-white');
                c.innerHTML = '<i class="fa-solid fa-check"></i>';
                c.parentElement.querySelector('h1').style.textDecoration = 'none';
            });
            circle.classList.remove('bg-white');
            circle.classList.add('bg-orange-500');
            circle.innerHTML = '<i class="fa-solid fa-check"></i>';
            circle.parentElement.querySelector('h1').style.textDecoration = 'line-through';
        });

        const taskName = document.createElement('h1');
        taskName.textContent = taskText;

        taskItem.appendChild(circle);
        taskItem.appendChild(taskName);
        taskContainer.appendChild(taskItem);

        // Inputni tozalash
        inputField.value = '';
    }
});
