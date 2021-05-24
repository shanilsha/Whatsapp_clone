import {Avatar,IconButton,Button} from '@material-ui/core'
import styled from 'styled-components';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import * as EmailValidator from 'email-validator';
import { useAuthState } from 'react-firebase-hooks/auth';
import {useCollection} from 'react-firebase-hooks/firestore';
import { auth,db } from "../firebase";
import Chat from './Chat';

function Sidebar() {

    const [user] = useAuthState(auth);
    const userChatRef = db.collection('chats').where('users','array-contains',user.email);
    const [chatsSnapshot] = useCollection(userChatRef);

    const createChat = () => {
        const input = prompt("Please enter email address for the user you wish to chat..");

        if (!input) return null;

        if (EmailValidator.validate(input) && !chatsAlreadyExists(input) && input !== user.email) {
            // We need to add the chat into the  DB chat collection
            db.collection('chats').add({
                users:[user.email,input],

            })
        }
    }

    const chatsAlreadyExists = (recipientEmail) => {
        !!chatsSnapshot?.docs.find((chat) => chat.data().users.find(user => user === recipientEmail)?.length > 0);
    }


    return (
        <Container>
            <Header>
                <UserAvatar onClick={() => auth.signOut() }/>
                <IconContainer>

                <IconButton>
                    <ChatIcons />
                </IconButton>

                <IconButton>
                    <MoreVertIcons />
                </IconButton>

                </IconContainer>
            </Header>

            <Search>
            <IconButton>
                <SearchIcons />
            </IconButton>
                <SearchInput placeholder="Search " />
                
            </Search>
            <SidebarButton onClick={createChat}>Start New Chat</SidebarButton>

            {/* List of chats */}
            {chatsSnapshot?.docs.map((chat) => (
                <Chat key={chat.id} id={chat.id} users={chat.data().users} />
            ))}
        </Container>
    )
}

export default Sidebar

const Container = styled.div`

`;
const Header = styled.div`
    display: flex;
    top:0;
    position: sticky;
    background-color: white;
    z-index: 1;
    justify-content: space-between;
    padding: 15px;
    height: 80px;
    align-items: center;
    border-bottom: 1px solid whitesmoke;

    
`;
const UserAvatar = styled(Avatar)`
    cursor: pointer;

    :hover {
        opacity:0.8 ;
    }

`;

const IconContainer = styled.div`

`;

const ChatIcons = styled(ChatIcon)`


`;
const MoreVertIcons = styled(MoreVertIcon)`

`;
const Search = styled.div`
    display: flex;
    align-items: center;
    padding:20px;
    border-radius: 2px;


`;
const SearchIcons = styled(SearchIcon)`

`;
const SearchInput = styled.input`
    outline-width: 0;
    flex:1;
    border:none;
`;
const SidebarButton = styled(Button)`
    width:100%;
    /* become larger box */
    &&& {
        border-top: 1px solid whitesmoke;
        border-bottom: 1px solid whitesmoke;
    }
    
    cursor: pointer;
`;
 
