//Test Group 1
var inputTime1 = [{ startTime: 4, endTime: 8 },
{ startTime: 0, endTime: 1 },
{ startTime: 3, endTime: 5 },
{ startTime: 10, endTime: 12 },
{ startTime: 9, endTime: 10 }];

var sortExpected1 = [{ startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 9, endTime: 10 },
    { startTime: 10, endTime: 12 }];

var mergeExpected1 = [ { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 8 },
    { startTime: 9, endTime: 12 } ];


//Test Group 2
var inputTime2 = [ { startTime: 6, endTime: 8 },
    { startTime: 1, endTime: 9 },
    { startTime: 2, endTime: 4 },
    { startTime: 4, endTime: 7 } ];

var sortExpected2 = [{ startTime: 1, endTime: 9 },
{ startTime: 2, endTime: 4 },
{ startTime: 4, endTime: 7 },
{ startTime: 6, endTime: 8 }];

var mergeExpected2 = [{startTime: 1,endTime: 9}]


var HiCal = require('./HiCal.js');
var assert = require('assert');
describe('HiCal.js Functions ', function () {
    describe('#sortTimeSlots(timeSlots) test 1', function () {
        it('Testing sort time slots function with data set inputTime1 ', function () {
            console.log("Ruuning Test Case:\n",inputTime1);
            var returnedSorted = HiCal.sortTimeSlots(inputTime1);
            for(i=0;i<returnedSorted.length;i++){
                assert.equal(returnedSorted[i].startTime, sortExpected1[i].startTime);
                assert.equal(returnedSorted[i].endTime, sortExpected1[i].endTime);
            }
            console.log("Test returnedSorted:\n",returnedSorted);
        });
    });

    describe('#sortTimeSlots(timeSlots) test 2', function () {
        it('Testing sort time slots function with data inputTime2', function () {
            console.log("Ruuning Test Case:\n",inputTime2);
            var returnedSorted = HiCal.sortTimeSlots(inputTime2);
            for(i=0;i<returnedSorted.length;i++){
                assert.equal(returnedSorted[i].startTime, sortExpected2[i].startTime);
                assert.equal(returnedSorted[i].endTime, sortExpected2[i].endTime);
            }
            console.log("Test returnedSorted:\n",returnedSorted);
        });
    });

    describe('#mergeRange(timeSlots) test 1', function () {
        it('Testing sort merge range function with data inputTime1', function () {
            console.log("Ruuning Test Case:\n",inputTime1);
            var returnedMerged = HiCal.mergeRange(inputTime1);
            for(i=0;i<returnedMerged.length;i++){
                assert.equal(returnedMerged[i].startTime, mergeExpected1[i].startTime);
                assert.equal(returnedMerged[i].endTime, mergeExpected1[i].endTime);
            }
            console.log("Test returnedSorted:\n",returnedMerged);
        });
    });

    describe('#mergeRange(timeSlots) test 2', function () {
        it('Testing sort merge range function with data inputTime2', function () {
            console.log("Ruuning Test Case:\n",inputTime1);
            var returnedMerged = HiCal.mergeRange(inputTime2);
            for(i=0;i<returnedMerged.length;i++){
                assert.equal(returnedMerged[i].startTime, mergeExpected2[i].startTime);
                assert.equal(returnedMerged[i].endTime, mergeExpected2[i].endTime);
            }
            console.log("Test returnedSorted:\n",returnedMerged);
        });
    });
});