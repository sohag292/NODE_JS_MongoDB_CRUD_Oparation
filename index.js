// NODE JS MongoDB CRUD Script

var MongoClient = require('mongodb').MongoClient;
var URL = "mongodb://127.0.0.1:27017/";

MongoClient.connect(URL, function (error, MyMongoClinet) {
    if(error){
        console.log("Connection is Fail")
    }
    else{
        console.log("Connection is Success");

        // **** Creating Data ****
        //  InsertData(MyMongoClinet);
        //  InsertManyData(MyMongoClinet);
        //  CreateMyCollection(MyMongoClinet);

        
        // **** Read Data ****
        // FindOneWithoutCondition(MyMongoClinet);
        // FindOneWithCondition(MyMongoClinet);
        // FindAllData(MyMongoClinet);
        // FindAllDataByProjection(MyMongoClinet);
        // FindAllDataByQuery(MyMongoClinet);
        // FindAllDataByLimit(MyMongoClinet);


        // **** Update Data ****
        // UpdateMyData(MyMongoClinet);
        
        
        // **** Delete Data ****
        // DeleteMyCollection(MyMongoClinet);
        // DeleteOneItem(MyMongoClinet);
        // DeleleAllItem(MyMongoClinet);
        
    }
});


// ####################################################################
// ####################################################################

function InsertData(MyMongoClinet){
    var MyDataBase= MyMongoClinet.db("User");
    var MyCollection= MyDataBase.collection('List');

    var MyNameData={name:"anika",age:"21", gender:"Female", age:24, city:"dhaka", languages:["bangla","hindi"]};

    MyCollection.insertOne(MyNameData, function (error) {
        if(error){
            console.log("Data Insert Fail");
        }
        else{
            console.log("Data Insert Success");
        }
    })
 }


//  function InsertManyData(MyMongoClinet){
//     var MyDataBase = MyMongoClinet.db("User");
//     var MyCollection = MyDataBase.collection("List");

//     var MultipleData = [{name:"sakib",age:"12", gender:"male",  city:"noyakhali", languages:["bangla","hindi","arabi"]}, {name:"mishuk",age:"24", gender:"male", city:"khulna", languages:["bangla","hindi"]}]

//     MyCollection.insertMany(MultipleData, function (error) {
//         if(error){
//             console.log("Data Insert Fail");
//         }
//         else{
//             console.log("Data Insert Success");
//         }
//     })
//  }

// function CreateMyCollection(MyMongoClinet){
//     var MyDataBase= MyMongoClinet.db("UserDb");
//     MyDataBase.createCollection("students",function (error,result) {
//         console.log(result);
//     })
// }


// function FindOneWithoutCondition(MyMongoClinet) {
//     var MyDataBase= MyMongoClinet.db("User");
//     var MyCollection= MyDataBase.collection("List");
//     var FindFirstData={}
//     MyCollection.findOne(FindFirstData, function (error,result) {
//         console.log(result);
//     })
// }

// function FindOneWithCondition(MyMongoClinet) {
//     var MyDataBase= MyMongoClinet.db("User");
//     var MyCollection= MyDataBase.collection("List");
//     var FindObj={age: 25}
//     MyCollection.findOne(FindObj,function (error,result) {
//         console.log(result);
//     })
// }


// function FindAllData(MyMongoClinet) {
//     var MyDataBase= MyMongoClinet.db("User");
//     var MyCollection= MyDataBase.collection("List");
//     MyCollection.find().toArray(function (error,result) {
//         console.log(result)
//     })
// }

// function FindAllDataByProjection(MyMongoClinet) {
//     var MyDataBase= MyMongoClinet.db("User");
//     var MyCollection= MyDataBase.collection('List');

//     var ItemObj={}
//     var ItemProjection={projection:{age:1}} 

//     MyCollection.find(ItemObj,ItemProjection).toArray(function (error,result) {
//         console.log(result)
//     })
// }


// function FindAllDataByQuery(MyMongoClinet) {
//     var MyDataBase= MyMongoClinet.db("User");
//     var MyCollection= MyDataBase.collection("List");

//     var Query={age:24,city: "dhaka"}

//     MyCollection.find(Query).toArray(function (error,result) {
//         console.log(result)
//     })
// }


// function FindAllDataByLimit(MyMongoClinet) {
//     var MyDataBase= MyMongoClinet.db("User");
//     var MyCollection= MyDataBase.collection("List");

//     MyCollection.find().limit(2).toArray(function (error,result) {
//         console.log(result)
//     })
// }


// function UpdateMyData(MyMongoClinet){
//     var MyDataBase= MyMongoClinet.db("User");
//     var MyCollection= MyDataBase.collection("List");

//     var MyQuery={age:24};
//     var NewValues={$set:{name:"sn sohag shah",city:"gazipur"}}

//     MyCollection.updateOne(MyQuery,NewValues,function (error,result) {
//         console.log(result);
//     })
// }


// function DeleteMyCollection(MyMongoClinet){
//     var MyDataBase= MyMongoClinet.db("UserDb");

//     MyDataBase.dropCollection("students",function (error,result) {
//         console.log(result);
//     })
// }


// function DeleteOneItem(MyMongoClinet) {
//     var MyDataBase= MyMongoClinet.db("User");
//     var MyCollection= MyDataBase.collection('List');
//     var DeleteItem={age:23}
//     MyCollection.deleteOne(DeleteItem, function (error) {
//         if(error){
//             console.log("Data Delete Fail");
//         }
//         else{
//             console.log("Data Delete Success");
//         }
//     });
// }

// function DeleleAllItem(MyMongoClinet) {
//     var MyDataBase= MyMongoClinet.db("UserDb");
//     var MyCollection= MyDataBase.collection('students');

//     MyCollection.deleteMany((error,Result)=>{
//         if(error){
//             console.log("Delete Fail");
//         }
//         else {
//             console.log("Item Deleted");
//         }
//     })
// }