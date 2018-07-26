const nameSpace = require('../common/nameSpace');

function getCategory(type) {
    if(type == 1){
        return 'infoCategory';
    }else if(type == 2){
        return 'communityCategory';
    }else if(type == 3) {
        return 'circleCategory';
    }else {
        return 'category';
    }
}

module.exports.getCategory = getCategory;