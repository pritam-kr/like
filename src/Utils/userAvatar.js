export const userAvatar = (username, users) =>
    users.filter((eachUser) => eachUser.username === username)[0];