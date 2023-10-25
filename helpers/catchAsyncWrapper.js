module.exports = (fn) => (req, res, next) => {
  fn(req, res, next).catch((err) => next(err));
};

// const ctrlWrapper = (ctrl) => {
//   const func = async (req, res, next) => {
//     try {
//       await ctrl(req, res, next);
//     } catch (error) {
//       next(error);
//     }
//   };
//   return func;
// };
