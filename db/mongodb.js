/**
 * Created by wei on 18-7-17.
 */
'use strict';
module.exports = {
    load () {
        require('./user').load();
        require('./category').load();
        require('./infoArticle').load();
        require('./infoCategory').load();
        require('./circleCategory').load();
        require('./communityCategory').load();
        require('./circleContent').load();
        require('./circleComment').load();
    }
};