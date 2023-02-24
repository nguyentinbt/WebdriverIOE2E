import { assert } from 'chai'
import { createUserPayload, createUserBody } from 'src/api/resources/payloads';
import { makeDELETECall, makeGETCall, makePOSTCall } from 'src/api/utils/apicalls';
import { endpoints } from "src/api/services/endpoints"
import { stringFormatter } from 'src/api/utils/formatter';

describe('REQRES users api validation', () => {
    it('should return list all existing user(s)', async () => {
        const response = await makeGETCall(endpoints.GOREST_USERS_SERVICE)
        assert.equal(response.status, 200)
    });

    it('should return the user info when calling GOREST_USERS_BY_ID_SERVICE with an existing userid as parameter', async () => {
        const userID = await (await makeGETCall(endpoints.GOREST_USERS_SERVICE)).body[0].id
        const endpoint = stringFormatter(endpoints.GOREST_USERS_BY_ID_SERVICE, userID)
        const response = await makeGETCall(endpoint)
        assert.equal(response.statusCode, 200, 'the response code does not match')
    });

    it('should return 201 code when user call post API with valid payloadD', async () => {
        const response = await makePOSTCall(endpoints.GOREST_USERS_SERVICE, createUserBody[0], true)
        const { id, ...bodyWithoutID } = response.body
        console.log("this is a body data ", response.body.id);
        assert.deepEqual(bodyWithoutID, createUserBody[0])
        assert.equal(response.statusCode, 201)
    });

    it('Chai test', async () => {
        let numberStore = [0, 1, 2];
        let newNumber = 12;
        numberStore = [...numberStore, newNumber];
        console.log(numberStore);
    });

    // it('should verify POST user call', async () => {
    //     const response = await makePOSTCall(endpoints.USERS_SERVICE, createUserPayload)
    //     assert.equal(response.statusCode, 201)
    //     assert.equal(response.body.name, createUserPayload.name)
    //     assert.equal(response.body.job, createUserPayload.job)
    // });

    // it('should verify GET user/{id} call', async () => {
    //     const userId = 2
    //     const userByID = stringFormatter(endpoints.USER_BY_ID_SERVICE, userId)
    //     const response = await makeGETCall(userByID)
    //     assert.equal(response.statusCode, 200)
    //     assert.equal(response.body.data.id, 2)
    // });

    // it('should verify DELETE user/{id} call', async () => {
    //     const userByID = stringFormatter(endpoints.USER_BY_ID_SERVICE, 2)
    //     const response = await makeDELETECall(userByID)
    //     assert.equal(response.statusCode, 204)
    // });
});
