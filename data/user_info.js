export let userInfo = JSON.parse(localStorage.getItem('userInfo'))||[{
    fName: 'fName',
    lName: 'lName',
    uName: 'fl',
    password: 'sas',
    mNo: '9874563210',
    Age: 21,
    height: 175,
    weight: 78,
    activity: "high",
    sex:"male",
    goal: "cut",
}];

// localStorage.clear();