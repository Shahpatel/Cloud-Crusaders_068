class ChatApp {
    constructor() {
        this.users = []; // array to store registered users
        this.messages = []; // Array to store messages between users
        this.groupChats = []; // array to store group chats
    }

    // Method to register a new user
    // adds the user to the users array if they are not already registered
    registerUser(username) {
        if (!this.users.includes(username)) {
            this.users.push(username);
            console.log(`${username} has been registered successfully.`);
        } else {
            console.log(`${username} is already registered.`);
        }
    }

    // Method to send a message between users
    // Stores the message in the messages array if both users are registered
    sendMessage(sender, recevier, message) {
        if (this.users.includes(sender) && this.users.includes(recevier)) {
            this.messages.push({ sender, recevier, message });
            console.log(`Message sent from ${sender} to ${recevier}: ${message}`);
        } else {
            console.log(`Either ${sender} or ${recevier} is not a registered user.`);
        }
    }

    // Method to display chat history between two users
    //  displays all messages exchanged between the two specified users
    displayChatHistory(user1, user2) {
        const chatHistory = this.messages.filter(msg =>
            (msg.sender === user1 && msg.recevier === user2) ||
            (msg.sender === user2 && msg.recevier === user1)
        );
        
        if (chatHistory.length > 0) {
            console.log(`Chat history between ${user1} and ${user2}:`);
            chatHistory.forEach(msg => {
                console.log(`${msg.sender} to ${msg.recipient}: ${msg.message}`);
            });
        } else {
            console.log(`No messages exchanged between ${user1} and ${user2}.`);
        }
    }

    // Method to create a group chat
    // Creates a new group chat with the specified name and members if it doesn't already exist
    createGroupChat(groupName, members) {
        if (this.groupChats.some(group => group.groupName === groupName)) {
            console.log(`Group chat with the name ${groupName} already exists.`);
        } else {
            this.groupChats.push({ groupName, members });
            console.log(`Group chat ${groupName} created with members: ${members.join(', ')}`);
        }
    }

    // Method to add a user to a group chat
    // Adds the specified user to the specified group chat if they are not already a member
    addUserToGroup(groupName, user) {
        const group = this.groupChats.find(group => group.groupName === groupName);

        if (group) {
            if (!group.members.includes(user)) {
                group.members.push(user);
                console.log(`${user} has been added to group ${groupName}.`);
            } else {
                console.log(`${user} is already a member of group ${groupName}.`);
            }
        } else {
            console.log(`Group chat ${groupName} does not exist.`);
        }
    }

    // Method to remove a user from a group chat
    // Removes the specified user from the specified group chat if they are a member
    removeUserFromGroup(groupName, user) {
        const group = this.groupChats.find(group => group.groupName === groupName);

        if (group) {
            const userIndex = group.members.indexOf(user);
            if (userIndex !== -1) {
                group.members.splice(userIndex, 1);
                console.log(`${user} has been removed from group ${groupName}.`);
            } else {
                console.log(`${user} is not a member of group ${groupName}.`);
            }
        } else {
            console.log(`Group chat ${groupName} does not exist.`);
        }
    }
}


export default ChatApp;