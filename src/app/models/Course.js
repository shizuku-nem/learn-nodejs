import mongoose from 'mongoose';
// TODO:
import slug from 'mongoose-slug-generator';

mongoose.plugin(slug);
const Schema = mongoose.Schema;

const CourseSchema = new Schema(
    {
        name: { type: String, min: 3, max: 255, required: true },
        description: { type: String, max: 1000 },
        videoId: { type: String, max: 1000 },
        level: { type: String, max: 1000 },
        image: { type: String, max: 255 },
        slug: { type: String, slug: 'name', unique: true },
        // createdAt: { type: Date, default: Date.now },
        // updatedAt: { type: Date, default: Date.now },
    },
    {
        // auto add createdAt and updatedAt the same above one
        timestamps: true,
    },
);
export const Course = mongoose.model('Course', CourseSchema);
