/**
 * Created by wei on 18-7-23.
 */
module.exports = {
    add: {
        name: true,
        orderNum: true,
        type: false // 1 info, 2 community, 3 circle
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
        searchType: true,
        name: false,
        orderNum: false
    }
};