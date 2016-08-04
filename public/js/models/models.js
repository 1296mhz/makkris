//Модель юзер
UserModel = Backbone.Model.extend({
    urlRoot: "/user",
    idAttribute: "_id",
    initialize: function () {
    },
     defaults: {
        username: "newuser",
        password: "123",
        confirmPassword: "123",
        group: "standart",
        boxId: "unknown",
        fio: "Иван Иванович Иванов",
        status: false,
        description: "Пользователь",
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



