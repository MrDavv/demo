/**
 * Created by wei on 18-7-23.
 */
module.exports = {
    add: {
        name: true,
        orderNum: true
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