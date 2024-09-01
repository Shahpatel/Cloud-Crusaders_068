import ChatApp from "./Chat.mjs";

const chatApp = new ChatApp();

// Register users to the chat application
chatApp.registerUser("Shahid2");
chatApp.registerUser("Shoeb");
 chatApp.registerUser("Safreen");

// // Send messages between registered users
 chatApp.sendMessage("Shahid2", "Shoeb", "Hello Shoeb");
// chatApp.sendMessage("Shoeb", "Shahid2", "Hello Shahid");

// // // Display  chat history between two users
 chatApp.displayChatHistory("Shahid2", "Shoeb");

// // // Create a group chat and manage  members
  chatApp.createGroupChat('Friends', ["Shahid2", "Shoeb"]);
 chatApp.addUserToGroup('Friends', "Safreen");
 chatApp.removeUserFromGroup('Friends', "Shoeb");

// chatApp.removeUserFromGroup("Friends","Shoeb")