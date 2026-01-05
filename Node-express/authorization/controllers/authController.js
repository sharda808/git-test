 const {check, validationResult}= require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
exports.getLogin = (req,res,next) => {
res.render('auth/login',
    {pageTitle:'Login',
      isLoggedIn:false,
    })
}
exports.getSignup= (req,res,next) => {

  res.render('auth/signup',{pageTitle:'signup',isLoggedIn:false,
    errorMessages: []
  });

}
exports.postLogin = async (req,res,next) => {
  const{email,password} = req.body;
console.log(email,password);
try {
const user = await User.findOne({email});
if(!user){
  throw new Error('User not found');
}
const isMatch = await bcrypt.compare(password,user.password);
if(!isMatch){
  throw new Error ('password does not match');
}

req.session.isLoggedIn = true;

// Convert Mongoose document to plain object and convert ObjectId to string
const userObj = user.toObject();
  // if needed, but we won’t store full object

req.session.user = {
  _id: userObj._id.toString(),     // <--- IMPORTANT
  firstName: userObj.firstName,
  lastName: userObj.lastName,
  email: userObj.email,
  userType: userObj.userType
};

req.session.isLoggedIn = true;

console.log('Before save - Session:', req.session.isLoggedIn, req.session.user);

await new Promise((resolve, reject) => {
  req.session.save((err) => {
    if (err) {
      console.error('Session save error:', err);
      reject(err);
    } else {
      console.log('Session saved successfully');
      console.log('After save - Session:', req.session.isLoggedIn, req.session.user);
      resolve();
    }
  });
});
res.redirect("/");
}
catch(err) {
    res.render('auth/login',{
    pageTitle:'Login',
    isLoggedIn:false,
    errorMessages:[err.message]
  });
}
}
exports.postSignup= [ 
  // First Name  Validator
check('firstName')
.notEmpty()
.withMessage("First name is mandatory")
.trim()
.isLength({min:2})
.withMessage('First Name is should  be minimun 2 chars')
.matches(/^[a-zA-Z\s]+$/)
.withMessage('First Name should only contain english alphabet'),
  // last Name  Validator
check('lastName')
.notEmpty()

.matches(/^[a-zA-Z\s]*$/)
.withMessage('Last Name should only contain english alphabet'),
//Email Validator
check('email')
.isEmail()
.withMessage('Please enter a valid email')
.normalizeEmail(),
// Password Validator
check('password')
.trim()
.isLength({min:8})
.withMessage('PassWord should be minimum 8 chars')
.matches(/[a-z]/)
.withMessage('Password should have atleast one small alphabet')
.matches(/[A-Z]/)
.withMessage('Password should have atleast one capital alphabet')
.matches(/[!@#$% ^*_":?]/)
.withMessage('Password should have atleast one special character'),
//Confirm password
check('confirm_password')
.trim()
  .custom((value,{req}) => {
if(value !== req.body.password){
  throw new Error ('Confirm Password does not match Password');
}
return true;
  }),
//User Type validator
check('userType')
.trim()
.notEmpty()
.withMessage('User type is reqiured')
.isIn(['Guest','Host'])
.withMessage('User type is inavlid'),
//  terms 
check('terms') 
.notEmpty()
.withMessage('Terms and conditions must be accepted'),
(req,res,next) => {
console.log('User came for signup:',req.body);
const errors =validationResult(req);
if(!errors.isEmpty()){
  return res.status(422).render('auth/signup',
    {
      pageTitle:'Login',
      isLoggedIn:false,
    errorMessages:errors.array().map(err => err.msg),
    oldInput:req.body,
    })
   
}
const {firstName,lastName,email,password,userType} = req.body;
bcrypt.hash(password,12).then(hashedPassword => {

  const user =   new User({
 firstName,lastName,email,password:hashedPassword,userType 
});
user.save().then(result => {
console.log(result);
res.redirect("/login");

}).catch(error => {

  return res.status(422).render('auth/signup',
    {
      pageTitle:'Login',
      isLoggedIn:false,
    errorMessages:[error],
    oldInput:req.body,
    })
   });
})
}
 ];
exports.postLogout = (req,res,next) => {
  req.session.destroy((err) => {
    if (err) {
      console.log('Error destroying session:', err);
    }
    res.redirect("/login");
  });
}