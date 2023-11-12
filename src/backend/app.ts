import cookieParser from "cookie-parser";
import express, {Request, Response, NextFunction} from 'express';
import path from 'path';
import dotenv from "dotenv";
import userRouter from "./routes/users";
import teacherRouter from "./routes/teacher"
import createError from "http-errors";
import logger from 'morgan'


const app = express();
dotenv.config();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("", userRouter);
app.use('/teacher', teacherRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err:any, req:Request, res:Response, next:NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(process.env.PORT, () => {
  console.log(`Listening from port ${process.env.PORT}`);
});
module.exports = app;
