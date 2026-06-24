const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: "dsxkm5leq",
    api_key: "341454478328968",
    api_secret: "9ZuDmj79GfdC2WThcSaCc1q4ufA"
});

module.exports = cloudinary;