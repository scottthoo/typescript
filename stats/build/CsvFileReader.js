"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: 'utf-8',
        })
            .split('\n') // each row is a record
            .map(function (row) {
            return row.split(',');
        }); // now spliting each data in a record by ','
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
//[ '28/10/2018', 'Man United', 'Everton', '2', '1', 'H', 'J Moss' ],
// MatchData is an array, from here is an array of MatchData, which is 2d array.
// You have list of matches 1,2,3,4...
// in each match have date,away,home,win, etc
// 2 dimension array !
