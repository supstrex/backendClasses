function User() {}
User.prototype = { admin: true };
let user = new User();
User.prototype = { admin: false };
console.log(user.admin);
