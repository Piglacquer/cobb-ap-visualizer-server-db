
exports.up = function(knex) {
  return knex.schema.createTable('graph_data', data => {
		data.increments('id')
		data.integer('user_id')
		data.string('entry_filename')
		data.string('time')
		data.string('af_correction_1')
		data.string('af_learning_1')
		data.string('af_sens_1_ratio')
		data.string('boost')
		data.string('calculated_load')
		data.string('feedback_knock')
		data.string('fine_knock_learn')
		data.string('ignition_timing')
		data.string('inj_duty_cycle')
		data.string('intake_temp')
		data.string('maf')
		data.string('maf_voltage')
		data.string('primary_ignition')
		data.string('rpm')
		data.string('throttle_pos')
		data.string('wastegate_duty')
		data.string('ap_info')
	})
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('graph_data');
};
