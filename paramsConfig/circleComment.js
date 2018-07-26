/**
 * Created by wei on 18-7-26.
 */
module.exports = {
    add: {
        circleContentUid: true,
        content: true
    },
    remove: {
        uid: true
    },
    update: {
        uid: true,
        name: true,
        orderNum: true
    },
    getAll: {

    },
    getByFilters: {
        type: true,
        name: false,
        orderNum: false
    }
};