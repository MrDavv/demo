const sessions=new Map();
const timeOut=3600000;

module.exports={
    code:'',
    get(token){
        return sessions.get(token);
    },
    add(token,obj){
        if(sessions.has(token)){
            const oldObj=sessions.get(token);
            clearTimeout(oldObj.timer);
        }
        obj.timer=setTimeout(()=>{
            sessions.delete(token);
        },timeOut);
        sessions.set(token,obj);
    },
    delete(token){
        if(sessions.has(token)) {
            const obj = this.get(token);
            clearTimeout(obj.timer);
            sessions.delete(token);
        }
    },
    has(token){
        const _has=sessions.has(token);
        console.log(_has);
        if(_has){
            const obj=sessions.get(token);
            clearTimeout(obj.timer);
            obj.timer=setTimeout(()=>{
                sessions.delete(token);
            },timeOut);
        }
        return _has;
    }
};