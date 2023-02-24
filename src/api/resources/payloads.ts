import faker from '@faker-js/faker';

export const createUserPayload = {
    "name": faker.name.firstName() + " " + faker.name.lastName(),
    "job": faker.name.jobTitle()
}

export const createUserBody = [
    {
        "name": faker.name.firstName() + " " + faker.name.lastName(),
        "email": faker.internet.email(faker.name.firstName(), faker.name.lastName()),
        "gender": "female",
        "status": "inactive"
    },
    {
        "name": faker.name.firstName() + " " + faker.name.lastName(),
        "email": faker.internet.email(faker.name.firstName(), faker.name.lastName()),
        "gender": "male",
        "status": "inactive"
    },
    {
        "name": faker.name.firstName() + " " + faker.name.lastName(),
        "email": faker.internet.email(faker.name.firstName(), faker.name.lastName()),
        "gender": "male",
        "status": "inactive"
    },
    {
        "name": faker.name.firstName() + " " + faker.name.lastName(),
        "email": faker.internet.email(faker.name.firstName(), faker.name.lastName()),
        "gender": "male",
        "status": "inactive"
    },
    {
        "name": faker.name.firstName() + " " + faker.name.lastName(),
        "email": faker.internet.email(faker.name.firstName(), faker.name.lastName()),
        "gender": "male",
        "status": "inactive"
    },
    {
        "name": faker.name.firstName() + " " + faker.name.lastName(),
        "email": faker.internet.email(faker.name.firstName(), faker.name.lastName()),
        "gender": "male",
        "status": "inactive"
    },
    {
        "name": faker.name.firstName() + " " + faker.name.lastName(),
        "email": faker.internet.email(faker.name.firstName(), faker.name.lastName()),
        "gender": "male",
        "status": "inactive"
    },
    {
        "name": faker.name.firstName() + " " + faker.name.lastName(),
        "email": faker.internet.email(faker.name.firstName(), faker.name.lastName()),
        "gender": "male",
        "status": "inactive"
    },
    {
        "name": faker.name.firstName() + " " + faker.name.lastName(),
        "email": faker.internet.email(faker.name.firstName(), faker.name.lastName()),
        "gender": "male",
        "status": "inactive"
    }


]

