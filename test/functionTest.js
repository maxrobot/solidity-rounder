const rounder = artifacts.require('Rounder');

contract('Contract Test', function (accounts) {

    describe('Functions', function () {
        let testContract;

        beforeEach(async function () {
            testContract = await rounder.new(
                {
                    from: accounts[0]
                }
            );
        });


        it('Should return the input', async function () {
            expectedOutput = 15;
            let tx = await testContract.returnInput(expectedOutput);
            assert.equal(tx, expectedOutput);
        });

    });
});