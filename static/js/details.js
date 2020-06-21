const url = window.location.href.split("/")[4];
console.log(url);
const serialNo = document.querySelector('tbody tr td:nth-child(1)');
serialNo.innerText = 1;
const route = document.querySelector('tbody tr td:nth-child(2)');
// console.log(route);

const method = document.querySelector('tbody tr td:nth-child(3)');
// console.log(method);

const samJson = document.querySelector('tbody tr td:nth-child(4)');
// console.log(samJson);

const result = document.querySelector('tbody tr td:nth-child(5)');
// console.log(result);

const details = document.querySelector('.lead');
// console.log(details);

const data = [
    {
        "route": "/post",
        "method": "GET",
        "sampleJson": "-",
        "result": `[
        {
        "_id": "5ed5afa5b760816c101950cf",
        "name": "ashutosh verma",
        "email": "ashu.verma@gmail.com",
        "age": 24,
        "date": "2020-06-02T01:47:17.366Z",
        "__v": 0
        },
        {
        "_id": "5ed5d8aed3d3ec51e81faae9",
        "name": "Amol Singh",
        "email": "amolashu@gmail.com",
        "age": 24,
        "date": "2020-06-02T04:42:22.905Z",
        "__v": 0
        }
        ]`,
        "details": "This page will contains information about, how to access all data."
    },
    {
        "route": "/post/{id}",
        "method": "GET",
        "sampleJson": "-",
        "result": `{
        "_id": "5ed5afa5b760816c101950cf",
        "name": "ashutosh verma",
        "email": "ashu.verma@gmail.com",
        "age": 24,
        "date": "2020-06-02T01:47:17.366Z",
        "__v": 0
        }`,
        "details": "This page will contains information about, how to access particular  data using Id attribute."

    },
    {
        "route": "/post/create",
        "method": "POST",
        "sampleJson": `{
        "name": "John Doe",
        "email": "John.Doe@gmail.com",
        "age": 24
    }`,
        "result": `
        {
            "_id": "5ee3bc1c5157e20ba07332d7",
            "name": "John Doe",
            "email": "john.Doe@gmail.com",
            "age": 24,
            "date": "2020-06-12T17:32:12.693Z",
            "__v": 0
        }`,
        "details": "This page will contains information about, how to create  data using API."


    },
    {
        "route": "/post/update/{id}",
        "method": "PATCH",
        "sampleJson": `{
        "email": "amolashu@gmail.com"
        }`,
        "result": `{
            "n": 1,
            "nModified": 1,
            "ok": 1
        }`,
        "details": "This page will contains information about, how to update data using rest /update."


    },
    {
        "route": "/post/delete/{id}",
        "method": "DELETE",
        "sampleJson": "-",
        "result": `
        {
            "n": 1,
            "ok": 1,
            "deletedCount": 1
        }`,
        "details": "This page will contains information about, how to delete data using rest /delete."
    }
];
// console.log(url.trim() === "detailOne");


if (url === "docOne") {
    // console.log("one");
    route.innerText = data[0].route;
    method.innerText = data[0].method;
    samJson.innerText = data[0].sampleJson;
    result.innerText = data[0].result;
    details.innerText = data[0].details;

} else if (url === "docTwo") {
    route.innerText = data[1].route;
    method.innerText = data[1].method;
    samJson.innerText = data[1].sampleJson;
    result.innerText = data[1].result;
    details.innerText = data[1].details;
}else if(url==="docThree"){
    route.innerText = data[2].route;
    method.innerText = data[2].method;
    samJson.innerText = data[2].sampleJson;
    result.innerText = data[2].result;
    details.innerText = data[2].details;
}else if(url==="docFour"){
    route.innerText = data[3].route;
    method.innerText = data[3].method;
    samJson.innerText = data[3].sampleJson;
    result.innerText = data[3].result;
    details.innerText = data[3].details;
}
else if(url==="docFive"){
    route.innerText = data[4].route;
    method.innerText = data[4].method;
    samJson.innerText = data[4].sampleJson;
    result.innerText = data[4].result;
    details.innerText = data[4].details;
}

