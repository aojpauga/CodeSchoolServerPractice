var app = new Vue({
    el: "#app",

    data: {
        greeting: "Hello World",
        names: [],
        counter: 0,
    },
    methods: {
        loadNames: function() {
            fetch("http://localhost:8000/names").then(function(response) {
                response.json().then(function(data) {
                    app.names = data.names;
                });
            });
        }
    }
});