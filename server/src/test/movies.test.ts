import request from 'supertest';
import sinon from 'sinon';
import app from '../app';  // Your express app
import mongoose from 'mongoose';
import mongooseMock from 'mongoose-mock';

// Mock the mongoose for tests

import * as MovieService from '../contollers/movieController';

beforeAll(() => {
    mongoose.Mongoose.prototype.connect = mongooseMock.connect;
});

// describe("When fetching movies from external API", () => {
//     it("should return mocked movie data", async () => {
//         const mockedResponse = [{
//             id: 1,
//             title: "Mocked Movie"
//         }];

//         const stub = sinon.stub(MovieService, 'getMovies').resolves(mockedResponse as any);
//         const res = await request(app).get('/movies').send();
        
//         expect(res.status).toBe(200);
//         expect(res.body[0].title).toBe("Mocked Movie");
//         stub.restore();
//     });
// });



describe("Movies API", () => {
    describe("GET /movies", () => {
        it("should fetch paginated movies", async () => {
            const res = await request(app).get('/movies').send();
            expect(res.status).toBe(200);
            expect(Array.isArray(res.body)).toBeTruthy();
        });
    });

    describe("GET /movies/:id", () => {
        it("should fetch a movie by ID", async () => {
            const fakeMovieID = '603f65009351342d6881aaaa'; // You might want to replace this with a mocked valid ID
            const res = await request(app).get(`/movies/${fakeMovieID}`).send();
            
            // In reality, you might stub the mongoose call and ensure the return is based on what you stub
            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty('title');
        });
    });
});

