/**
 * Created by cshlovjah on 28.07.16.
 */
function mainFrame() {
}

//Очистка содержимого div
mainFrame.prototype.clearFrame = function (framenameid) {
    console.log(framenameid);
    $('#'+framenameid).empty();
};
//переименовываем выбранный id
mainFrame.prototype.renameFrame = function (framenameid, newframenameid) {

    $('#'+framenameid).attr('id', newframenameid);
};

mainFrame.prototype.deleteFrame = function (framenameid, newframenameid) {
    console.log(framenameid);
   
};
