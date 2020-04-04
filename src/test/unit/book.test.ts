import { expect } from 'chai';
import { createSandbox } from 'sinon';
import BookService from '../../services/book.service';
const sb = createSandbox();

describe("BookService", function () {
    describe("create", function () {
        it("should create a new book", async function () {
            const stubValue = {
                _id: "2",
                name: "was",
            };
            const userService = new BookService();
            const stub = sb.stub(userService, "save").returns(stubValue);
            const book = await userService.create(stubValue);
            expect(stub.calledOnce).to.be.true;
            expect(book._id).to.equal(stubValue._id);
            expect(book.name).to.equal(stubValue.name);
        });
    });
});