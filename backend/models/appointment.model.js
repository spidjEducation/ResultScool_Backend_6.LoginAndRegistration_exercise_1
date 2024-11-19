import mongoose, { Schema } from 'mongoose';

const appointmentSchema = new Schema({
	fullName: String,
	phone: String,
	description: String,
	date: { type: Date, default: Date.now },
});

export const Appointment = mongoose.model('Appointment', appointmentSchema);
