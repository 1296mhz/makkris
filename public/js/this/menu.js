/**
 * Created by cshlovjah on 28.07.16.
 */
var mainFrame = new mainFrame();
//Администрирование
$('.user-control').on('click', function () {
    mainFrame.clearFrame('mainframe');
    console.log("User control");
});

$('.boxes-control').on('click', function () {
    console.log("boxes control");
    mainFrame.renameFrame('mainframe','nonmainframe');
});

$('.posts-control').on('click', function () {
    console.log("posts control");
});

$('.typeOfWork-control').on('click', function () {
    console.log("Type of work control");
});

$('.customer-control').on('click', function () {
    console.log("Customer control");
});

$('.log-control').on('click', function () {
    console.log("Log control");
});

//Заявки
$('.add-event').on('click', function () {
    console.log("Add event control");
});

$('.update-event').on('click', function () {
    console.log("Update event");
});

$('.delete-event').on('click', function () {
    console.log("Delete event");
});
