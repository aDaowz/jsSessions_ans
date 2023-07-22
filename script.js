document.addEventListener('DOMContentLoaded', () => {

    const container = document.createElement('div');
        const up = document.createElement('div');
            const rightUp = document.createElement('div');
            const leftUp = document.createElement('div');

        const down = document.createElement('div');
            const rightDown = document.createElement('div');
            const leftDown = document.createElement('div');
            const circle = document.createElement('div');

    container.id = 'container';
        up.id = 'up';
            leftUp.id = 'A';
            leftUp.classList.add('left', 'vertical');
            leftUp.textContent = 'JS';

            rightUp.id = 'B';
            rightUp.classList.add('right');
            rightUp.textContent = 'JS';

        down.id = 'down';
            leftDown.id = 'D_out';
            leftDown.classList.add('left', 'vertical');

                circle.id = 'D';
                circle.classList.add('circle');
                circle.textContent = 'JS';

            rightDown.id = 'C';
            rightDown.classList.add('right');
            rightDown.textContent = 'JS';

    container.appendChild(up);
        up.appendChild(leftUp);
        up.appendChild(rightUp);

    container.appendChild(down);
        down.appendChild(leftDown);
            leftDown.appendChild(circle);
        down.appendChild(rightDown);

    document.body.appendChild(container);
});