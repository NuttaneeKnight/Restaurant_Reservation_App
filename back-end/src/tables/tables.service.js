const knex = require('../db/connection');
const tableName = 'tables';

//create a new table
function create(table) {
  return knex(tableName)
    .insert(table)
    .returning('*')
}

//read the table with the given table_id
function read(table_id){
  return knex(tableName)
    .select('*')
    .where({ table_id: table_id })
    .first();
}

//update reservation status with the given reservation_id
function updateReservation(reservation_id, status) {
  return knex('reservation')
    .where({ reservation_id: reservation_id })
    .update({ status: status })
}

//list all tables
function list() {
  return knex(tableName)
    .select('*');
}

//read the reservation with the givin reservation_id
function readReservation(reservation_id) {
  return knex('reservations')
    .select('*')
    .where({ reservation_id: reservation_id })
    .first();
  }

function occupy(table_id, reservation_id) {
  return knex(tableName)
    .where({ table_id: table_id})
    .update({ reservation_id: reservation_id, status: "occupied" });
}

function free(table_id) {
  return knex(tableName)
    .where({ table_id: table_id })
    .update({ reservation_id: null, status: 'free' })
}

module.exports = {
  list,
  create,
  read,
  occupy,
  free,
  readReservation,
  updateReservation,
};