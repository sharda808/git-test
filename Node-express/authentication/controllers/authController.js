 const {check, validationResult}= require('express-validator');
exports.getLogin = (req,res,next) => {
res.render('auth/login',
    {pageTitle:'Login',
      isLoggedIn:false})
}
exports.getSignup= (req,res,next) => {

  res.render('auth/signup',{pageTitle:'signup',isLoggedIn:false,
    errorMessages: []
  });

}
exports.postLogin = (req,res,next) => {
req.session.isLoggedIn = true;
  res.redirect("/");
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
res.redirect("/login");
  }
];
exports.postLogout = (req,res,next) => {
 
  // req.session.destroy();
 res.cookie('isLoggedIn',false);
  res.redirect("/login");
}