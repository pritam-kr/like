export const likeByUser = (post, user) => post?.likes?.likedBy?.find((likeUser) => likeUser.username === user.username);