'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Managers = app.model.define('managers', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    role_id:INTEGER,
    real_name: STRING(30),
    phone:STRING(30),
    password: STRING(30),
    avatar_url:STRING(30),
    sex:STRING(30),
    birthday:DATE,
    introduction:STRING(30),
    last_visit_at:DATE,
    created_at: DATE,
    updated_at: DATE,
  })
  return Managers;
};