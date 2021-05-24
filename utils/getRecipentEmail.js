
const getRecipientEmail = (users, userLoggedIn) => {
    users?.filter(userTopFilter => userTopFilter !== userLoggedIn?.email)[0];

}

export default  getRecipientEmail;