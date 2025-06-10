let person = "Employee";
let authorization;

switch(person) {
    case "Employee":
        authorization = "have access to Dietary Services";
        break;
    case "Enrolled Member":
        authorization = "have access to Dietary Services, one-on-one interaction with a dietician";
        break;
    case "Subscriber":
        authorization = "have partial access to Dietary Services only";
        break;
    case "Non-Subscriber":
        authorization = "need to enroll or at least subscribe first to avail this facility";
        break;
    default :
        authorization = "NONE";
}

console.log("Eligibility : ", authorization);

