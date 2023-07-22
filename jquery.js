
jQuery(() => {
    const container = $('<div>').attr('id', 'container');
        const up = $('<div>').attr('id', 'up');
            const leftUp = $('<div>').attr('id', 'A').addClass('left vertical').text('A');
            const rightUp = $('<div>').attr('id', 'B').addClass('right').text('B');

        const down = $('<div>').attr('id', 'down');
            const leftDown = $('<div>').attr('id', 'D_out').addClass('left vertical');
                const circle = $('<div>').attr('id', 'D').addClass('circle').text('D');
            const rightDown = $('<div>').attr('id', 'C').addClass('right').text('C');

        container.append(up);
            up.append(leftUp);
            up.append(rightUp);

        container.append(down);
            down.append(leftDown);
                leftDown.append(circle);
            down.append(rightDown);
        
    $('body').append(container);
});