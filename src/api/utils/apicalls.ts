import supertest from "supertest"
import { GOREST_BASE_URI } from 'src/api/config/baseuri';
import { endpoints } from "src/api/services/endpoints";
require('dotenv').config()
// import { config } from 'dotenv'

const token = process.env.TOKEN

const request = supertest(GOREST_BASE_URI)

export const makeGETCall = async (endpoint: endpoints | string) => {
    return request.get(endpoint);
}

export const makePOSTCall = async (endpoint: endpoints | string, payload: string | object, auth?: boolean) => {
    if (auth) {
        return request.post(endpoint)
            .auth(`${token}`, { type: "bearer" })
            .send(payload);
    } else {
        return request.post(endpoint)
            .send(payload);
    }
}

export const makeDELETECall = async (endpoint: endpoints | string) => {
    return request.delete(endpoint);
}