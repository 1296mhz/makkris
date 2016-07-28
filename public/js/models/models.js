//Модель юзер
UserModel = Backbone.Model.extend({
    urlRoot: "/user",
    idAttribute: "_id",
    initialize: function () {
    },
     defaults: {
        username: null,
        password: "123",
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

//Вьюшка одного
ViewsUserItem = Backbone.View.extend({
    tagName: 'li',

    render: function() {
        this.$el.html( this.model.get('username') );
        return this;
    }
});

//Вьюшка список для коллекции
var ViewsUsersListItem = Backbone.View.extend({
    el: '#users-list',
    tagName: 'li',
    className: 'user',

    initialize: function() {
        console.log(this.model);
    }
});


var userCollection = new UserCollection();
userCollection.fetch();

// Create Model and View instances:
var userModel = new UserModel();
var userView = new ViewsUsersListItem({model: userModel});



