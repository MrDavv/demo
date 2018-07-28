/**
 * Created by wei on 18-7-27.
 */
let allCount = 3;
let users = [
    {noAgreeId: 1, order: 1, value: '', id: 0, agreeCount: 0},
    {noAgreeId: 1, order: 2, value: '', id: 0, agreeCount: 0},
    {noAgreeId: 1, order: 3, value: '', id: 0, agreeCount: 0},
];

let ID = 0;
function proposal(proposalUser, value) {
    ID++;
    proposalUser.value = value;
    proposalUser.id = ID;
}

function agreeFirst(user, proposalUser) {
    user.noAgreeId = proposalUser.id;
}
function agreeSecond(user, proposalUser) {
    if(user.noAgreeId <= proposalUser.id){
        proposalUser.agreeCount++;
    }
}

function main() {
    //第一阶段
    proposal(users[0], '去上海');
    agreeFirst(users[1], users[0]);
    agreeFirst(users[2], users[0]);

    proposal(users[1], '去深圳');
    agreeFirst(users[0], users[1]);
    agreeFirst(users[2], users[1]);

    proposal(users[2], '去杭州');
    agreeFirst(users[0], users[0]);
    agreeFirst(users[1], users[0]);
    console.log(users);

    //第二阶段
    agreeSecond(users[1], users[0]);
    agreeSecond(users[2], users[0]);

    agreeSecond(users[0], users[1]);
    agreeSecond(users[2], users[1]);

    agreeSecond(users[0], users[2]);
    agreeSecond(users[1], users[2]);

    let maxIndex;
    for(let i = 0; i < users.length; i ++){
        if(users[i].agreeCount >= Math.ceil(allCount / 2)){
            maxIndex = i;
            break;
        }
    }
    console.log(users,'f')
    return users[maxIndex];
    
};
let result = main();
console.log(result);