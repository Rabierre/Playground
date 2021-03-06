pragma solidity ^0.4.17;

contract ProjectFactory {

    address[] public deployedProjects;

    function createProject(uint minimum) public {

        address newProject = new Project(minimum, msg.sender);
        deployedProjects.push(newProject);
    }

    function getDeployedProjects() public view returns (address[]) {

        return deployedProjects;

    }
}

contract Project {

    struct Request {

        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;

    }

    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;

    constructor(uint minimum, address creator) public {

        manager = creator;
        minimumContribution = minimum;

    }



    function contribute() public payable {

        require(msg.value > minimumContribution);
        approvers[msg.sender] = true;
        approversCount++;
    }

    function createRequest(string description, uint value, address recipient) public restricted {

        require(approvers[msg.sender]);

        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });

        requests.push(newRequest);

    }

    function approveRequest(uint index ) public {

        Request storage request = requests[index];

        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;

        request.approvalCount++;



    }

    function finalizeRequest(uint index) public restricted {

        Request storage request = requests[index];

        require(request.approvalCount > (approversCount / 2));
        require(!request.complete);

        request.recipient.transfer(request.value);
        request.complete = true;


    }


    modifier restricted() {

        require(msg.sender == manager);
        _;

    }

    function getSummary() public view returns (
      uint, uint, uint, uint, address
      ) {

      return (
        minimumContribution,
        this.balance,
        requests.length,
        approversCount,
        manager
      );

    }

    function getRequestsCount() public view returns (uint) {
      return requests.length;
    }

}
