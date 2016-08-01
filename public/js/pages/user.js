/**
 * Created by cshlovjah on 29.07.16.
 */
function User() {
}

User.prototype.table = function (usertableid, columnsarray) {

    var columns = columnsarray;
    var Users = Backbone.Collection.extend({
        model: UserModel,
        url: "/user"
    });

    var users = new Users();
// Initialize a new Grid instance
    var grid = new Backgrid.Grid({
        columns: columns,
        collection: users
    });

// Render the grid and attach the root to your HTML document
    $("#" + usertableid).append(grid.render().el);

// Fetch some countries from the url
    users.fetch({reset: true});
};


User.prototype.pageableTable = function (usertableid) {

    var ResetPassword = Backgrid.Cell.extend({
        events: {
            'click .resetPasswordButton': 'resetPassword'
        },

        resetPassword: function (e) {
            $('.mw').empty();
            console.log('reset password');
            e.preventDefault();
            var thisModel = new UserModel({
                urlRoot: "/user",
                idAttribute: "_id"
            });
            console.log(thisModel);
            thisModel = this.model;
            var modalWindow = new bmodal();

            modalWindow.createModalWindow();
            var UserModalForm = Backbone.Model.extend({
                schema: {

                    password: {
                        type: 'Password',
                        validators: ['required']
                    },
                    confirmPassword: {
                        type: 'Password',
                        validators: [
                            'required',
                            {type: 'match', field: 'password', message: 'Пароли не совпадают!'}
                        ]
                    }
                }
            });

            var userModalForm = new UserModalForm();

            var form = new Backbone.Form({
                model: userModalForm
            }).render();


            $('.modal-body').append(form.el);
            $('.closeUserWindowModal').click(function () {

                $('.mw').empty();
            });

            $('.saveUserWindowModal').click(function () {

                var errors = form.commit(); // runs schema validation
                if (errors) {
                    console.log(errors);

                    var options = {};
                    // Run the effect
                    $("#myModal").effect( "shake" );


                } else {
                    var data = form.getValue();
                    console.log(data)
                    $('.mw').empty();
                }


            });


        },
        render: function () {
            this.$el.html('<button class="btn btn-default button_centered resetPasswordButton" data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>');
            return this;
        }
    });

    var ActionCell = Backgrid.Cell.extend({
        events: {
            'click .removeButton': 'deleteRow',
            'click .saveButton': 'saveRow'
        },
        deleteRow: function (e) {
            console.log('delete');
            e.preventDefault();
            var thisModel = new UserModel({
                urlRoot: "/user",
                idAttribute: "_id"
            });
            console.log(thisModel);
            thisModel = this.model;
            thisModel.destroy({
                success: function (model, response) {
                }
            });
        },

        saveRow: function (e) {
            console.log("save");
            e.preventDefault();
            var thisModel = new UserModel({});

            thisModel = this.model;
            console.log(thisModel.changedAttributes());
            thisModel.save(thisModel.changedAttributes(), {patch: true})
        },

        render: function () {
            this.$el.html('<div class="button_centered"><button class="btn btn-default button_margin removeButton"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button><button class="btn btn-default button_margin saveButton"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></button></div>');
            return this;
        }
    });


    var columns = [{

        name: "username",
        label: "Имя пользователя",
        // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like *id* above, or a string
        cell: "string" // This is converted to "StringCell" and a corresponding class in the Backgrid package namespace is looked up
    }, {
        name: "",
        label: "Сбросить пароль",
        cell: ResetPassword
    }, {
        name: "group",
        label: "Группа",
        cell: "string" // An integer cell is a number cell that displays humanized integers
    }, {
        name: "fio",
        label: "Фио",
        cell: "string" // A cell type for floating point value, defaults to have a precision 2 decimal numbers
    }, {
        name: "status",
        label: "Состояние",
        cell: "string"
    }, {
        name: "description",
        label: "Описание",
        cell: "string"
    }, {
        name: "createOwner",
        label: "Создал",
        cell: "string"
    }, {
        name: "updateOwner",
        label: "Редактировал",
        cell: "string"
    }, {
        name: "createDate",
        label: "Дата создания",
        cell: "date"
    }, {
        name: "updateDate",
        label: "Дата изменения",
        cell: "date" // Renders the value in an HTML anchor element
    }, {
        name: '',
        label: 'Действие',
        cell: ActionCell
    }];

    // var Territory = Backbone.Model.extend({});

    var PageableUsers = Backbone.PageableCollection.extend({
        model: UserModel,
        url: "/user",
        state: {
            pageSize: 15
        },
        mode: "client" // page entirely on the client side
    });


    var pageableUsers = new PageableUsers();

// Set up a grid to use the pageable collection
    var pageableGrid = new Backgrid.Grid({
        columns: [{
            // enable the select-all extension
            name: "",
            cell: "select-row",
            headerCell: "select-all"
        }].concat(columns),
        collection: pageableUsers
    });

// Render the grid
    var $example2 = $("#" + usertableid);
    $example2.append(pageableGrid.render().el);

// Initialize the paginator
    var paginator = new Backgrid.Extension.Paginator({
        collection: pageableUsers
    });

// Render the paginator
    $example2.after(paginator.render().el);

// Initialize a client-side filter to filter on the client
// mode pageable collection's cache.
    var filter = new Backgrid.Extension.ClientSideFilter({
        collection: pageableUsers,
        fields: ['username']
    });


// Render the filter
    $example2.before(filter.render().el);

// Add some space to the filter and move it to the right
    $(filter.el).css({float: "right", margin: "20px"});

// Fetch some data
    pageableUsers.fetch({reset: true});

}