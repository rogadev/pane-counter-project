exports.publicAccess = (res, req) => {
  res.status(200).json({ message: 'public content' });
};

exports.userDashboard = (res, req) => {
  res.status(200).json({ message: 'user dashboard' });
};
