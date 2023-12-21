require('dotenv').config()
const {MYSQL_USERNAME,MYSQL_PASSWORD,MYSQL_HOSTNAME,MYSQL_PORT, MYSQL_DB} = process.env
const dbString = `mysql://${MYSQL_USERNAME}:${MYSQL_PASSWORD}@${MYSQL_HOSTNAME}:${MYSQL_PORT}/${MYSQL_DB}`
// console.log(process.env) //env = environment
console.log(dbString)