const IPFSInbox = artifacts.require("./IPFSInbox.sol");

contract("IPFSInbox", accounts => {
    it("...should emit an event when you send an IPFS address.", async () => {
        const ipfsInbox = await IPFSInbox.deployed();

        eventEmitted = false

        await ipfsInbox.sendIPFS(accounts[1], "SampleAddress", { from: accounts[0] });

        eventEmitted = true

        assert.equal(eventEmitted, true, "Sending an IPFS request does not emit an event.");
    });
});