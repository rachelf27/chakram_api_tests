var chakram = require('chakram');
var expect = chakram.expect;

describe("Get users data from JSONPlaceholder", function () {
    it("list a single user", function () {
        var url = "https://jsonplaceholder.typicode.com/posts?userId=1"
        var response = chakram.get(url);
        expect(response).to.have.status(200);
        return response
            .then(function (requestPromise) { console.log('Response: ' + JSON.stringify(requestPromise)) });
    });

    it("list all users", function () {
        var url = "https://jsonplaceholder.typicode.com/users"
        var response = chakram.get(url);
        expect(response).to.have.status(200);
        expect(response).not.to.have.header('non-existing-header');
        return response
            .then(function (requestPromise) { console.log('Response: ' + JSON.stringify(requestPromise)) });
    });

    it("it should only support get users", function () {
        var url = "https://jsonplaceholder.typicode.com/posts?userId=2"
        var response = chakram.put(url);
        expect(response).to.have.status(404);
        return response
            .then(function (requestPromise) { console.log('Response: ' + JSON.stringify(requestPromise)) });
    });

    it("add a user", function () {
        var url = "https://jsonplaceholder.typicode.com/users"
        var response = chakram.post(url,
            {
                "id": 11,
                "name": "Rachel Fernando",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "address": {
                    "street": "Kulas Light",
                    "suite": "Apt. 556",
                    "city": "Gwenborough",
                    "zipcode": "92998-3874",
                    "geo": {
                        "lat": "-37.3159",
                        "lng": "81.1496"
                    },
                }, json: true, headers: { "content-type": "application/json" }
            });
        return response
            .then(function (requestPromise) { console.log('Response: ' + JSON.stringify(requestPromise)) });
    });
});