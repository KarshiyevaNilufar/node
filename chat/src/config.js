require("dotenv").config();

// Destruction
const { env } = process;

module.exports = {
    PORT: env.PORT,
};