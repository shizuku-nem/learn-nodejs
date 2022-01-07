import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect(
            'mongodb://localhost:27017/nodejs_education_dev',
        );
        console.log('connect db succecs');
    } catch (error) {
        console.log('connect db failed');
    }
}

export { connect };
