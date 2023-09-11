exports.create = async (req, res) => {
  res
    .status(200)
    .json({ status: "success", data: "Create function for blogs" });
};

exports.read = async (req, res) => {
  res.status(200).json({ status: "success", data: "Read function for blogs" });
};

exports.delete = async (req, res) => {
  res
    .status(200)
    .json({ status: "success", data: "Delete function for blogs" });
};

exports.update = async (req, res) => {
  res
    .status(200)
    .json({ status: "success", data: "Update function for blogs" });
};
