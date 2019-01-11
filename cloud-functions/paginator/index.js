// 云函数入口文件
const cloud = require('wx-server-sdk');

cloud.init();
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
    let dbName = event.dbName;//集合名称

    let filter = event.filter ? event.filter : null;//筛选条件

    let pageIndex = event.pageIndex ? event.pageIndex : 1;//当前第几页

    let pageSize = event.pageIndex ? event.pageSize : 10;//每页取多少条

    const countResult = await  db.collection(dbName).where(filter).count();//获取集合的总条数

    const total = countResult.total;//得到总记录数

    let res = await db.collection(dbName).where(filter).skip((pageIndex - 1) * pageSize).limit(pageSize).get();

    return {

        data: res.data,

        total
    }
};