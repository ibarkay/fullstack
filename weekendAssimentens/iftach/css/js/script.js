$(function () {
    var messages = [],
        index = 0;

    messages.push('Fullsatck');
    messages.push('Pen-Testing');
    messages.push('Help-Desk');

    function cycle() {
        $('#some-id').html(messages[index]);
        index++;

        if (index === messages.length) {
            index = 0;
        }

        setTimeout(cycle, 3000);
    }

    cycle();
});