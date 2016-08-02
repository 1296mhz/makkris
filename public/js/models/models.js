//Модель юзер
UserModel = Backbone.Model.extend({
    urlRoot: "/user",
    idAttribute: "_id",
    initialize: function () {
    },
     defaults: {
        username: null,
        password: null, 
        confirmPassword: null,
        group: null,
        boxId: null,
        fio: null,
        status: null,
        description: null,
        createDate: null,
        updateDate: null,
        createOwner: null,
        updateOwner: null
    }
});

//Коллекция с юзерами
UserCollection = Backbone.Collection.extend({
    model: UserModel,
    url: "/user",
    parse: function(data) {
        return data;
    }

});



