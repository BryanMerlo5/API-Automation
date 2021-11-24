const api = require("../src/common");
const config = require("../src/data.json");
const expect = require("chai").expect;
const chance = require("chance");
const addContext = require('mochawesome/addContext');

const baseUrl = config.baseUrl;
let create = baseUrl + config.createPost;
let getFirstComment = baseUrl + config.getFirstComment;
let getAllComments = baseUrl + config.getAllComments;
let updateEmployeeUrl = baseUrl + config.updateEmployeeUrl;
let deletePost = baseUrl + config.deletePost;

let _id, _res;
